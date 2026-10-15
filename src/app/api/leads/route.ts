import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  contact: z.string().trim().min(5).max(160),
  origin: z.string().trim().max(120).optional(),
  destination: z.string().trim().max(120).optional(),
  cargo: z.string().trim().min(10).max(2000),
  services: z.array(z.enum(["transport", "customs", "consultation"])).max(3),
  consent: z.literal(true),
  website: z.string().max(200).optional(),
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(contentLength) && contentLength > 12_000) {
    return NextResponse.json({ error: "Слишком большой объём данных." }, { status: 413 });
  }

  const parsed = leadSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Проверьте заполнение полей." }, { status: 400 });
  if (parsed.data.website) return new NextResponse(null, { status: 204 });

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM_EMAIL;
  const to = process.env.LEAD_TO_EMAIL ?? site.email;

  if (!host || !Number.isInteger(port) || port < 1 || port > 65535 || !user || !password || !from || !to) {
    return NextResponse.json({ error: "Форма временно недоступна. Позвоните нам." }, { status: 503 });
  }

  const serviceLabels = {
    transport: "Перевозка под пломбой",
    customs: "Таможенное оформление",
    consultation: "Нужна консультация",
  } as const;
  const lead = parsed.data;
  const plainText = [
    "Новая заявка с сайта ВТН ТРАНС",
    `Время: ${new Date().toISOString()}`,
    `Имя: ${lead.name}`,
    `Контакт: ${lead.contact}`,
    `Услуги: ${lead.services.length ? lead.services.map((service) => serviceLabels[service]).join(", ") : "Не выбраны"}`,
    `Откуда: ${lead.origin || "Не указано"}`,
    `Куда: ${lead.destination || "Не указано"}`,
    "",
    "Задача:",
    lead.cargo,
  ].join("\n");

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 8000,
  });

  const result = await transporter.sendMail({
    from,
    to,
    replyTo: emailPattern.test(lead.contact) ? lead.contact : undefined,
    subject: "Новая заявка с сайта ВТН ТРАНС",
    text: plainText,
  }).catch(() => null);

  if (!result?.messageId) return NextResponse.json({ error: "Не удалось отправить заявку. Попробуйте позже." }, { status: 502 });
  return NextResponse.json({ ok: true }, { status: 202 });
}

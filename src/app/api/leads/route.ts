import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  contact: z.string().trim().min(5).max(160),
  origin: z.string().trim().max(120).optional(),
  destination: z.string().trim().max(120).optional(),
  cargo: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  const parsed = leadSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Проверьте заполнение полей." }, { status: 400 });
  if (parsed.data.website) return new NextResponse(null, { status: 204 });

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Форма временно недоступна. Позвоните нам." }, { status: 503 });
    }
    console.info("VTN TRANS lead", parsed.data);
    return NextResponse.json({ ok: true, mode: "development" }, { status: 202 });
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...parsed.data, source: "vtntrans.ru", createdAt: new Date().toISOString() }),
    signal: AbortSignal.timeout(8000),
  }).catch(() => null);

  if (!response?.ok) return NextResponse.json({ error: "Не удалось отправить заявку. Попробуйте позже." }, { status: 502 });
  return NextResponse.json({ ok: true }, { status: 202 });
}

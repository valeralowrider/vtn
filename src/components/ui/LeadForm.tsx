"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import "./lead-form.css";

type Service = "transport" | "customs" | "consultation";
type Field = "name" | "contact" | "cargo" | "consent";
type Errors = Partial<Record<Field, string>>;

const serviceOptions: { value: Service; label: string }[] = [
  { value: "transport", label: "Перевозка под пломбой" },
  { value: "customs", label: "Таможенное оформление" },
  { value: "consultation", label: "Нужна консультация" },
];

const initial = {
  name: "",
  contact: "",
  origin: "",
  destination: "",
  cargo: "",
  services: [] as Service[],
  consent: false,
  website: "",
};

function validate(form: typeof initial): Errors {
  const errors: Errors = {};
  if (form.name.trim().length < 2) errors.name = "Укажите имя — минимум 2 символа.";

  const contact = form.contact.trim();
  const phoneDigits = contact.replace(/\D/g, "");
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  if (!isEmail && (phoneDigits.length < 10 || phoneDigits.length > 15)) {
    errors.contact = "Укажите телефон или адрес электронной почты.";
  }

  if (form.cargo.trim().length < 10) errors.cargo = "Опишите задачу чуть подробнее — минимум 10 символов.";
  if (!form.consent) errors.consent = "Для ответа на заявку нужно ваше согласие.";
  return errors;
}

export function LeadForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

  const update = (key: "name" | "contact" | "origin" | "destination" | "cargo" | "website") =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [key]: event.target.value }));
      if (key === "name" || key === "contact" || key === "cargo") {
        setErrors((current) => ({ ...current, [key]: undefined }));
      }
      if (status !== "idle") setStatus("idle");
    };

  function toggleService(service: Service) {
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
    if (status !== "idle") setStatus("idle");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "pending") return;

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const firstField = (Object.keys(nextErrors) as Field[])[0];
      const formElement = event.currentTarget;
      requestAnimationFrame(() => formElement.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus());
      return;
    }

    setStatus("pending");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Lead delivery failed");
      setForm(initial);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="lead-form" onSubmit={submit} noValidate aria-label="Запрос на перевозку">
      <div className="lead-form__topline"><span>ВАША ЗАДАЧА</span><span>01 — 03</span></div>
      <fieldset className="lead-form__services">
        <legend>Чем можем помочь</legend>
        <div className="lead-form__service-list">
          {serviceOptions.map((option) => (
            <label className="lead-form__service" key={option.value}>
              <input type="checkbox" value={option.value} checked={form.services.includes(option.value)} onChange={() => toggleService(option.value)} disabled={status === "pending"} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="lead-form__grid">
        <div className="lead-form__field">
          <label htmlFor="lead-name">Ваше имя <span aria-hidden="true">*</span></label>
          <input id="lead-name" name="name" value={form.name} onChange={update("name")} placeholder="Как к вам обращаться" autoComplete="name" maxLength={80} required disabled={status === "pending"} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "lead-name-error" : undefined} />
          {errors.name && <span className="lead-form__error" id="lead-name-error">{errors.name}</span>}
        </div>
        <div className="lead-form__field">
          <label htmlFor="lead-contact">Телефон или почта <span aria-hidden="true">*</span></label>
          <input id="lead-contact" name="contact" value={form.contact} onChange={update("contact")} placeholder="+7 999 000-00-00" autoComplete="tel" maxLength={160} required disabled={status === "pending"} aria-invalid={Boolean(errors.contact)} aria-describedby={errors.contact ? "lead-contact-error" : undefined} />
          {errors.contact && <span className="lead-form__error" id="lead-contact-error">{errors.contact}</span>}
        </div>
        <div className="lead-form__field">
          <label htmlFor="lead-origin">Откуда</label>
          <input id="lead-origin" name="origin" value={form.origin} onChange={update("origin")} placeholder="Город или терминал" maxLength={120} disabled={status === "pending"} />
        </div>
        <div className="lead-form__field">
          <label htmlFor="lead-destination">Куда</label>
          <input id="lead-destination" name="destination" value={form.destination} onChange={update("destination")} placeholder="Город назначения" maxLength={120} disabled={status === "pending"} />
        </div>
      </div>

      <div className="lead-form__field lead-form__field--wide">
        <label htmlFor="lead-cargo">Коротко о грузе и задаче <span aria-hidden="true">*</span></label>
        <textarea id="lead-cargo" name="cargo" value={form.cargo} onChange={update("cargo")} placeholder="Что перевезти, откуда и куда, нужна ли помощь с документами" maxLength={2000} rows={4} required disabled={status === "pending"} aria-invalid={Boolean(errors.cargo)} aria-describedby={errors.cargo ? "lead-cargo-error" : undefined} />
        {errors.cargo && <span className="lead-form__error" id="lead-cargo-error">{errors.cargo}</span>}
      </div>

      <div className="lead-form__honeypot" aria-hidden="true"><label htmlFor="lead-website">Ваш сайт</label><input id="lead-website" name="website" value={form.website} onChange={update("website")} tabIndex={-1} autoComplete="off" disabled={status === "pending"} /></div>

      <div className="lead-form__bottom">
        <div>
          <label className="lead-form__consent">
            <input type="checkbox" name="consent" checked={form.consent} onChange={(event) => { setForm((current) => ({ ...current, consent: event.target.checked })); setErrors((current) => ({ ...current, consent: undefined })); if (status !== "idle") setStatus("idle"); }} required disabled={status === "pending"} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "lead-consent-error" : "lead-consent-note"} />
            <span>Даю {site.legalName} согласие обработать данные этой заявки, чтобы ответить на мой запрос.</span>
          </label>
          <p className="lead-form__data-note" id="lead-consent-note">Имя, контакт и сведения о перевозке передаются компании. Подробнее — в <Link href="/politika-konfidentsialnosti">политике обработки данных</Link>. По вопросам: <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          {errors.consent && <span className="lead-form__error" id="lead-consent-error">{errors.consent}</span>}
        </div>
        <button className="lead-form__submit" type="submit" disabled={status === "pending"}>
          <span>{status === "pending" ? "Отправляем…" : "Обсудить перевозку"}</span><span aria-hidden="true">↗</span>
        </button>
      </div>

      <div className="lead-form__status" role="status" aria-live="polite">
        {status === "pending" && <p>Отправляем запрос…</p>}
        {status === "success" && <p className="lead-form__status--success">Запрос отправлен. Мы свяжемся с вами по указанному контакту.</p>}
        {status === "error" && <p className="lead-form__status--error">Сейчас не удалось отправить запрос. Данные остались в форме — попробуйте позже или позвоните нам: <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>.</p>}
      </div>
    </form>
  );
}

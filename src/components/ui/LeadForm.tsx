"use client";

import { FormEvent, useState } from "react";

const initial = { name: "", contact: "", origin: "", destination: "", cargo: "", website: "" };

export function LeadForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("pending");
    const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) setForm(initial);
  }

  const update = (key: keyof typeof initial) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  return (
    <form className="lead-form" onSubmit={submit} aria-describedby="form-status">
      <div className="form-grid">
        <label><span>Ваше имя</span><input value={form.name} onChange={update("name")} required placeholder="Иван Петров" autoComplete="name" /></label>
        <label><span>Телефон или email</span><input value={form.contact} onChange={update("contact")} required placeholder="+7 (___) ___-__-__" autoComplete="tel" /></label>
        <label><span>Откуда</span><input value={form.origin} onChange={update("origin")} placeholder="Например, Шереметьево" /></label>
        <label><span>Куда</span><input value={form.destination} onChange={update("destination")} placeholder="Например, Нижний Новгород" /></label>
      </div>
      <label><span>Опишите груз и задачу</span><textarea value={form.cargo} onChange={update("cargo")} required minLength={10} placeholder="Тип груза, вес, габариты, требуется ли оформление" /></label>
      <label className="visually-hidden"><span>Ваш сайт</span><input value={form.website} onChange={update("website")} tabIndex={-1} autoComplete="off" /></label>
      <div className="form-footer">
        <p>Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.</p>
        <button className="button button--amber" type="submit" disabled={status === "pending"}>{status === "pending" ? "Отправляем…" : "Получить расчёт"}<span aria-hidden>↗</span></button>
      </div>
      <p id="form-status" className="form-status" role="status">{status === "success" && "Заявка принята. Мы свяжемся с вами."}{status === "error" && "Не удалось отправить заявку. Позвоните нам."}</p>
    </form>
  );
}

"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import "./cookie-consent.css";

const cookieName = "vtn_cookie_consent";
const maxAge = 60 * 60 * 24 * 180;

type Consent = "necessary" | "analytics";
type ConsentSnapshot = Consent | null | "pending";

const subscribe = () => () => {};

function savedConsent(): Consent | null {
  const value = document.cookie.split("; ").find((item) => item.startsWith(`${cookieName}=`))?.split("=")[1];
  return value === "necessary" || value === "analytics" ? value : null;
}

function saveConsent(consent: Consent) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${cookieName}=${consent}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent("vtn-cookie-consent", { detail: { consent } }));
}

export function CookieConsent() {
  const browserConsent = useSyncExternalStore<ConsentSnapshot>(subscribe, savedConsent, () => "pending");
  const [dismissed, setDismissed] = useState(false);

  if (browserConsent === "pending" || browserConsent !== null || dismissed) return null;

  function choose(consent: Consent) {
    saveConsent(consent);
    setDismissed(true);
  }

  return (
    <aside className="cookie-consent" role="dialog" aria-modal="false" aria-labelledby="cookie-consent-heading" aria-describedby="cookie-consent-description">
      <p id="cookie-consent-heading" className="cookie-consent__eyebrow">НАСТРОЙКА COOKIE</p>
      <p id="cookie-consent-description" className="cookie-consent__text">Используем обязательный cookie, чтобы запомнить ваш выбор. Метрика и Вебвизор пока не подключены; когда появятся, загрузим их только после вашего согласия.</p>
      <p className="cookie-consent__text"><Link href="/cookies">Подробнее о cookie</Link></p>
      <div className="cookie-consent__actions">
        <button type="button" className="cookie-consent__button cookie-consent__button--quiet" onClick={() => choose("necessary")}>Только необходимые</button>
        <button type="button" className="cookie-consent__button" onClick={() => choose("analytics")}>Разрешить аналитику <span aria-hidden="true">↗</span></button>
      </div>
    </aside>
  );
}

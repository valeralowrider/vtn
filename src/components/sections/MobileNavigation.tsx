"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { routes, site } from "@/lib/site";
import "./mobile-navigation.css";

export function MobileNavigation() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const details = detailsRef.current;
      if (details?.open && !details.contains(event.target as Node)) details.open = false;
    }

    function handleKeyDown(event: KeyboardEvent) {
      const details = detailsRef.current;
      if (event.key === "Escape" && details?.open) {
        details.open = false;
        summaryRef.current?.focus();
      }
    }

    const desktop = window.matchMedia("(min-width: 851px)");
    function closeOnDesktop() {
      if (desktop.matches && detailsRef.current) detailsRef.current.open = false;
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  function close() {
    if (detailsRef.current) detailsRef.current.open = false;
  }

  return (
    <details className="mobile-nav" ref={detailsRef}>
      <summary ref={summaryRef}>
        <span className="mobile-nav__label mobile-nav__label--closed">Меню</span>
        <span className="mobile-nav__label mobile-nav__label--open">Закрыть</span>
        <svg className="mobile-nav__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 8H21" />
          <path d="M3 16H21" />
        </svg>
      </summary>
      <div className="mobile-nav__panel">
        <p className="mobile-nav__eyebrow">РАЗДЕЛЫ САЙТА</p>
        <nav className="mobile-nav__links" aria-label="Мобильная навигация">
          {routes.slice(1).map((route, index) => (
            <Link key={route.href} href={route.href} onClick={close}>
              <span className="mobile-nav__number">{String(index + 1).padStart(2, "0")}</span>
              <span>{route.label}</span>
              <span className="mobile-nav__arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
        <div className="mobile-nav__bottom">
          <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} onClick={close}>{site.phone}</a>
          <Link href="/#request" onClick={close}>Обсудить перевозку <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </details>
  );
}

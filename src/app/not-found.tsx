import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/SiteHeader";
import "./not-found.css";

export default function NotFound() {
  return <main className="not-found-page">
    <SiteHeader />
    <section className="not-found-hero" aria-labelledby="main-content">
      <Image className="not-found-image" src="/images/404-customs-route.webp" alt="Ночной таможенный терминал и пустая дорога, уходящая в темноту" fill priority sizes="100vw" />
      <div className="not-found-scrim" />
      <div className="not-found-copy">
        <p className="eyebrow">СБОЙ МАРШРУТА · 404</p>
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1 id="main-content" tabIndex={-1}>Этого маршрута<br />нет на карте.</h1>
        <p>Страница могла изменить адрес или больше не существует. Вернёмся на проверенный маршрут.</p>
        <div className="not-found-actions"><Link className="button button--amber" href="/">На главную <span aria-hidden>↗</span></Link><Link className="text-link" href="/tamozhennye-perevozki">Наши услуги <span aria-hidden>→</span></Link></div>
      </div>
      <p className="not-found-caption">ВТН ТРАНС · ТАМОЖЕННЫЕ ПЕРЕВОЗКИ</p>
    </section>
  </main>;
}

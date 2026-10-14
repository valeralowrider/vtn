import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { MobileNavigation } from "@/components/sections/MobileNavigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" aria-label="ВТН ТРАНС — главная">
        <Image src="/images/vtn-trans-logo.svg" alt="ВТН ТРАНС" width={280} height={69} priority />
      </Link>
      <nav aria-label="Основная навигация">
        <Link href="/tamozhennye-perevozki">Услуги</Link>
        <Link href="/o-kompanii">О компании</Link>
        <Link href="/kontakty">Контакты</Link>
      </nav>
      <a className="header-phone" href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
      <Link className="button button--outline" href="/#request" aria-label="Рассчитать перевозку">
        <span className="header-cta-full">Рассчитать перевозку</span>
        <span className="header-cta-short" aria-hidden>Расчёт</span>
        <span className="header-cta-arrow" aria-hidden>↗</span>
      </Link>
      <MobileNavigation />
    </header>
  );
}

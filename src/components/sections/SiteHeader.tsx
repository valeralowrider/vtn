import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteHeader() {
  return <header className="site-header"><Link href="/" aria-label="ВТН ТРАНС — главная"><Image src="/images/vtn-trans-logo.svg" alt="ВТН ТРАНС" width={224} height={84} priority /></Link><nav aria-label="Основная навигация"><Link href="/tamozhennye-perevozki">Услуги</Link><Link href="/o-kompanii">О компании</Link><Link href="/kontakty">Контакты</Link></nav><a className="header-phone" href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a><a className="button button--outline" href="#request">Рассчитать перевозку <span aria-hidden>↗</span></a></header>;
}

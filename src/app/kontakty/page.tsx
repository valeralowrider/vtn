import Image from "next/image";
import { LeadForm } from "@/components/ui/LeadForm";
import { ContactsMap } from "@/components/ui/ContactsMap";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import "./contacts.css";

export const metadata = pageMetadata({ path: "/kontakty", title: "Контакты", description: "Контакты ООО «ВТН ТРАНС» для расчёта таможенной перевозки." });

export default function ContactsPage() {
  const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;
  return <main className="contacts-page">
    <SiteHeader />
    <section className="contacts-hero" aria-labelledby="main-content">
      <div className="contacts-hero-copy"><p className="eyebrow">ВТН ТРАНС · НА СВЯЗИ</p><h1 id="main-content" tabIndex={-1}>Обсудим<br />вашу задачу.</h1><p>Позвоните, напишите или оставьте заявку. Начнём с маршрута и вводных по грузу.</p><div className="contacts-hero-links"><a href={phoneHref}><small>ТЕЛЕФОН</small>{site.phone}<span aria-hidden>↗</span></a><a href={`mailto:${site.email}`}><small>ЭЛЕКТРОННАЯ ПОЧТА</small>{site.email}<span aria-hidden>↗</span></a></div></div>
      <div className="contacts-hero-media" aria-hidden="true"><Image src="/images/hero-customs-gate.webp" alt="" fill priority sizes="(max-width: 850px) 100vw, 50vw" /><div><span>МОСКВА</span><b>119435</b><p>пер. Большой Саввинский,<br />д. 2–4–6, стр. 4</p></div></div>
    </section>

    <section className="contacts-direct" aria-labelledby="direct-heading"><div><p className="contacts-label">01 / ВЫБЕРИТЕ УДОБНЫЙ СПОСОБ</p><h2 id="direct-heading">Можно начать с короткого разговора.</h2></div><div className="contacts-direct-list"><a href={phoneHref}><span>01</span><small>ПО ТЕЛЕФОНУ</small><strong>{site.phone}</strong><em aria-hidden>→</em></a><a href={`mailto:${site.email}`}><span>02</span><small>ПО ЭЛЕКТРОННОЙ ПОЧТЕ</small><strong>{site.email}</strong><em aria-hidden>→</em></a></div></section>

    <section className="contacts-address"><div className="contacts-address-media"><Image src="/images/intercity-customs-route.webp" alt="Контейнеровоз на междугородном маршруте" fill sizes="(max-width: 850px) 100vw, 45vw" /><span>ВТН ТРАНС · МОСКВА</span></div><div className="contacts-address-copy"><p className="contacts-label">02 / АДРЕС КОМПАНИИ</p><h2>Москва</h2><p className="contacts-address-main">{site.address.postalCode}, {site.address.addressLocality}<br />{site.address.streetAddress}</p><dl><div><dt>Юридическое лицо</dt><dd>{site.legalName}</dd></div><div><dt>ИНН</dt><dd>{site.inn}</dd></div><div><dt>ОГРН</dt><dd>{site.ogrn}</dd></div></dl></div></section>

    <ContactsMap />
    <section id="request" className="contacts-request" aria-labelledby="request-heading"><div className="contacts-request-inner"><div className="contacts-request-copy"><p className="contacts-label">04 / ЗАПРОС НА ПЕРЕВОЗКУ</p><h2 id="request-heading">Опишите задачу — мы уточним детали.</h2><p>Укажите маршрут, контакт и коротко расскажите о грузе. Если информации пока мало, достаточно позвонить или написать нам.</p><a href={phoneHref}>{site.phone} <span aria-hidden>↗</span></a></div><LeadForm /></div></section>
  </main>;
}

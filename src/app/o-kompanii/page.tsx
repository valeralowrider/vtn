import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { pageMetadata } from "@/lib/metadata";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./about.css";

export const metadata = pageMetadata({ path: "/o-kompanii", title: "О компании", description: "ООО «ВТН ТРАНС» — таможенный перевозчик, работающий с 2014 года." });

const facts = [
  ["Год регистрации", "03.07.2014"],
  ["Свидетельство таможенного перевозчика", `ФТС № ${site.customsCarrierCertificate} от ${site.customsCarrierCertificateIssuedAt}`],
  ["Юридическое лицо", site.legalName],
  ["Реквизиты", `ИНН ${site.inn} · ОГРН ${site.ogrn}`],
] as const;

export default function AboutPage() {
  return <main className="about-page">
    <JsonLd data={organizationSchema} />
    <SiteHeader />
    <section className="about-hero" aria-labelledby="main-content">
      <div className="about-hero-copy">
        <p className="eyebrow">ООО «ВТН ТРАНС» · С {site.founded} ГОДА</p>
        <h1 id="main-content" tabIndex={-1}>Контроль груза начинается с ответственности.</h1>
        <p>Организуем таможенные перевозки, оформление и сопровождение так, чтобы транспорт и документы работали как один процесс.</p>
        <Link className="button button--amber" href="/kontakty#request">Обсудить задачу <span aria-hidden>↗</span></Link>
      </div>
      <div className="about-hero-media" aria-hidden="true"><Image src="/images/broker-transport.webp" alt="" fill priority sizes="(max-width: 850px) 100vw, 50vw" /></div>
    </section>

    <section className="about-intro">
      <p className="about-label">01 / КАК МЫ РАБОТАЕМ</p>
      <div className="about-intro-grid">
        <h2>Не передаём клиента между перевозчиком и таможней.</h2>
        <div><p>Для каждой перевозки согласуем маршрут, условия транспорта и порядок оформления до выезда. Перевозчик и собственные таможенные брокеры работают в одной команде — поэтому вопросы по грузу и документам не остаются между разными подрядчиками.</p><p>Если нужны уточнения по документам или условиям перевозки, подключаемся к задаче по ходу работы и держим клиента в курсе.</p></div>
      </div>
    </section>

    <section className="about-roles" aria-labelledby="roles-heading">
      <div className="about-roles-heading"><p className="about-label">02 / ОДНА КОМАНДА</p><h2 id="roles-heading">Каждый отвечает за свой участок маршрута.</h2></div>
      <ol>
        <li><span>01</span><h3>Перевозчик</h3><p>Подбирает транспорт, организует получение груза и движение по согласованному маршруту.</p></li>
        <li><span>02</span><h3>Таможенный брокер</h3><p>Проверяет вводные, готовит документы и сопровождает необходимые операции на таможне.</p></li>
        <li><span>03</span><h3>Клиент</h3><p>Получает понятные вопросы по своей задаче и единый контакт по перевозке и оформлению.</p></li>
      </ol>
    </section>

    <section className="about-proof">
      <div className="about-proof-media"><Image src="/images/hero-customs-gate.webp" alt="Контейнеровоз у терминала таможенного контроля" fill sizes="(max-width: 850px) 100vw, 47vw" /><span>ПРОВЕРЯЕМЫЕ СВЕДЕНИЯ</span></div>
      <div className="about-proof-copy"><p className="about-label">03 / ДОКУМЕНТЫ И РЕКВИЗИТЫ</p><h2>Сведения, которые можно проверить до начала работы.</h2><dl>{facts.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}</dl><Link className="text-link" href="/dokumenty">Открыть документы и реквизиты <span aria-hidden>→</span></Link></div>
    </section>

    <section className="about-conditions"><p className="about-label">04 / ПЕРЕД ПОДТВЕРЖДЕНИЕМ РЕЙСА</p><h2>Сначала разбираемся в условиях задачи.</h2><div><p>Для перевозки под таможенным контролем важны не только точки маршрута. Уточняем характеристики груза, доступные документы, требования к транспорту и место оформления.</p><p>Сложные категории груза, особые условия сопровождения и дополнительные требования подтверждаем после оценки конкретной перевозки.</p></div></section>

    <section className="about-cta" aria-labelledby="about-cta-heading"><p className="about-label">05 / НАЧАТЬ РАБОТУ</p><h2 id="about-cta-heading">Расскажите о грузе — остальное уточним вместе.</h2><p>Оставьте маршрут и короткое описание задачи. Подскажем, какие вводные нужны для расчёта.</p><Link className="button button--amber" href="/kontakty#request">Рассчитать перевозку <span aria-hidden>↗</span></Link></section>
  </main>;
}

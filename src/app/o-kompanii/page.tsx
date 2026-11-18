import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { pageMetadata } from "@/lib/metadata";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./about.css";

export const metadata = pageMetadata({ path: "/o-kompanii", title: "О компании ВТН ТРАНС — таможенный перевозчик с 2014 года", description: "ООО «ВТН ТРАНС» — таможенный перевозчик из реестра ФТС России. Перевозки сложных технических и опасных грузов, собственные брокеры." });

const facts = [
  ["Год регистрации", "03.07.2014"],
  ["Свидетельство таможенного перевозчика", `ФТС № ${site.customsCarrierCertificate} от ${site.customsCarrierCertificateIssuedAt}`],
  ["Юридическое лицо", site.legalName],
  ["Реквизиты", `ИНН ${site.inn} · ОГРН ${site.ogrn}`],
  ["Реестр ФТС", "Включены в реестр таможенных перевозчиков"],
  ["Аккредитация", "ГК «Ростех» — в перечне организаций-поставщиков"],
] as const;

const customers = [
  "ПАО «ОАК»", "АО «Камов»", "АО «Концерн ВКО «Алмаз-Антей»", "АО «РТ-Логистика»", "АО «Корпорация «Фазотрон-НИИР»", "АО «НПО им. С.А. Лавочкина»", "АО «Долгопрудненское научно-производственное предприятие»", "ЗАО «ИФК Техник» (подразделение АО «Ильюшин Финанс Ко.»)", "АО «Авиакомпания «РОССИЯ»", "АО «Авиакомпания «Ангара»", "АО «ПО «Уральский оптико-механический завод им. Э.С. Яламова»", "АО «ЛИИ им. М.М. Громова»", "ООО «Центр закупок и логистики вертолётостроительной индустрии» холдинга «Вертолёты России»", "SIA «AVIATEST» — испытательный центр, сертифицированный АРМАК и европейским органом LATAK",
] as const;

export default function AboutPage() {
  return <main className="about-page">
    <JsonLd data={organizationSchema} />
    <SiteHeader />
    <section className="about-hero" aria-labelledby="main-content">
      <div className="about-hero-copy">
        <p className="eyebrow">ООО «ВТН ТРАНС» · С {site.founded} ГОДА</p>
        <h1 id="main-content" tabIndex={-1}>Контроль груза начинается с ответственности.</h1>
        <p>ООО «ВТН ТРАНС» — таможенный перевозчик, включённый в реестр ФТС России. С 2014 года организуем таможенные и автомобильные перевозки, оформление и сопровождение грузов так, чтобы транспорт и документы работали как один процесс.</p>
        <Link className="button button--amber" href="/kontakty#request">Обсудить задачу <span aria-hidden>↗</span></Link>
      </div>
      <div className="about-hero-media" aria-hidden="true"><Image src="/images/broker-transport.webp" alt="" fill priority sizes="(max-width: 850px) 100vw, 50vw" /></div>
    </section>

    <section className="about-intro">
      <p className="about-label">01 / КАК МЫ РАБОТАЕМ</p>
      <div className="about-intro-grid">
        <h2>Не передаём клиента между перевозчиком и таможней.</h2>
        <div><p>Мы специализируемся на автомобильных перевозках сложных технических и опасных грузов для предприятий авиационной, космической и оборонной промышленности, авиакомпаний и научных организаций. Для каждой перевозки до выезда согласуем маршрут, транспорт и порядок оформления.</p><p>Перевозчик и собственные таможенные брокеры работают в одной команде, поэтому вопросы по грузу и документам не застревают между подрядчиками. Если по ходу работы нужны уточнения, решаем их сами и держим клиента в курсе.</p></div>
      </div>
    </section>

    <section className="about-customers" aria-labelledby="customers-heading">
      <div><p className="about-label">ЗАКАЗЧИКИ</p><h2 id="customers-heading">Нам доверяют сложные перевозки.</h2><p>Сегодня ООО «ВТН ТРАНС» привлечено к перевозкам грузов таких предприятий:</p></div>
      <ol>{customers.map((customer, index) => <li key={customer}><span>{String(index + 1).padStart(2, "0")}</span>{customer}</li>)}</ol>
      <p className="about-customers-note">И других предприятий авиационно-космической индустрии, ОПК и научных организаций.</p>
    </section>

    <section className="about-roles" aria-labelledby="roles-heading">
      <div className="about-roles-heading"><p className="about-label">02 / ОДНА КОМАНДА</p><h2 id="roles-heading">Каждый отвечает за свой участок маршрута.</h2></div>
      <ol>
        <li><span>01</span><h3>Перевозчик</h3><p>Подбирает транспорт из собственного парка, организует получение груза и доставку под таможенным контролем по согласованному маршруту.</p></li>
        <li><span>02</span><h3>Таможенный брокер</h3><p>Проверяет вводные, готовит декларацию и сопровождает операции на таможне до выпуска товара.</p></li>
        <li><span>03</span><h3>Клиент</h3><p>Получает понятный план до начала работ и один контакт по перевозке и оформлению.</p></li>
      </ol>
    </section>

    <section className="about-proof">
      <div className="about-proof-media"><Image src="/images/hero-customs-gate.webp" alt="Контейнеровоз у терминала таможенного контроля" fill sizes="(max-width: 850px) 100vw, 47vw" /><span>ПРОВЕРЯЕМЫЕ СВЕДЕНИЯ</span></div>
      <div className="about-proof-copy"><p className="about-label">03 / ДОКУМЕНТЫ И РЕКВИЗИТЫ</p><h2>Сведения, которые можно проверить до начала работы.</h2><dl>{facts.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}</dl><Link className="text-link" href="/dokumenty">Открыть документы и реквизиты <span aria-hidden>→</span></Link></div>
    </section>

    <section className="about-conditions"><p className="about-label">04 / ПЕРЕД ПОДТВЕРЖДЕНИЕМ РЕЙСА</p><h2>Сначала разбираемся в условиях задачи.</h2><div><p>Для перевозки под таможенным контролем важны не только точки маршрута. Заранее уточняем характеристики груза, документы, требования к транспорту и место оформления.</p><p>Опасные, негабаритные и режимные грузы, охрану и особые условия подтверждаем только после оценки конкретной перевозки — так сроки и стоимость не меняются в пути.</p></div></section>

    <section className="about-cta" aria-labelledby="about-cta-heading"><p className="about-label">05 / НАЧАТЬ РАБОТУ</p><h2 id="about-cta-heading">Расскажите о грузе — остальное уточним вместе.</h2><p>Оставьте маршрут и короткое описание задачи. Подскажем, какие вводные нужны для расчёта, — консультация бесплатна.</p><Link className="button button--amber" href="/kontakty#request">Рассчитать перевозку <span aria-hidden>↗</span></Link></section>
  </main>;
}

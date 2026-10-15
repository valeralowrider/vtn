import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { site } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";
import "./service-detail.css";

type ServiceStep = { title: string; text: string };
type ServicePageProps = { path: string; title: string; eyebrow: string; intro: string; summary: string; image: string; imageAlt: string; whenNeeded: string[]; included: string[]; steps: ServiceStep[]; inputs: string[]; note: string };

export function ServicePage({ path, title, eyebrow, intro, summary, image, imageAlt, whenNeeded, included, steps, inputs, note }: ServicePageProps) {
  const schema = serviceSchema(title, intro, path);
  return <main className="service-page"><JsonLd data={schema} /><SiteHeader />
    <section className="service-hero" aria-labelledby="main-content"><div className="service-hero-copy"><p className="eyebrow">{eyebrow}</p><h1 id="main-content" tabIndex={-1}>{title}</h1><p>{intro}</p><Link className="button button--amber" href="/kontakty#request">Рассчитать перевозку <span aria-hidden>↗</span></Link></div><div className="service-hero-media" aria-hidden="true"><Image src={image} alt="" fill priority sizes="(max-width: 850px) 100vw, 50vw" /><span>{eyebrow}</span></div></section>
    <section className="service-summary"><p className="service-section-label">01 / В КАКОЙ МОМЕНТ ПОДКЛЮЧАЕМСЯ</p><div className="service-summary-grid"><h2>{summary}</h2><div><p className="service-summary-lead">Услуга подходит, когда:</p><ul className="service-when-list">{whenNeeded.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul></div></div></section>
    <section className="service-included" aria-labelledby="included-heading"><div className="service-included-copy"><p className="service-section-label">02 / ЧТО БЕРЁМ НА СЕБЯ</p><h2 id="included-heading">Одна задача — одна координация</h2><p>Вы получаете понятный порядок действий до начала работ и одного контактного человека по перевозке и документам.</p></div><ul>{included.map((item, index) => <li key={item}><span>0{index + 1}</span><strong>{item}</strong></li>)}</ul></section>
    <section className="service-process" aria-labelledby="process-heading"><div className="service-process-heading"><p className="service-section-label">03 / ПОРЯДОК РАБОТЫ</p><h2 id="process-heading">Движемся по маршруту вместе с грузом</h2></div><ol>{steps.map((step, index) => <li key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section>
    <section className="service-prepare"><div className="service-prepare-media"><Image src={image} alt={imageAlt} fill sizes="(max-width: 850px) 100vw, 44vw" /><span>ВТН ТРАНС · ТАМОЖЕННЫЙ ПЕРЕВОЗЧИК</span></div><div className="service-prepare-copy"><p className="service-section-label">04 / ЧТО УТОЧНИТЬ ДО РАСЧЁТА</p><h2>Начнём с вводных по вашему грузу</h2><ul>{inputs.map((item) => <li key={item}>{item}</li>)}</ul><p className="service-prepare-note">{note}</p></div></section>
    <section className="service-proof"><p>Таможенный перевозчик · Свидетельство ФТС № {site.customsCarrierCertificate}</p><h2>Документы компании можно проверить до начала работы.</h2><Link className="text-link text-link--light" href="/dokumenty">Открыть документы и реквизиты <span aria-hidden>→</span></Link></section>
    <section className="service-cta" aria-labelledby="service-cta-heading"><p className="service-section-label">05 / ОБСУДИТЬ ЗАДАЧУ</p><h2 id="service-cta-heading">Расскажите, откуда и куда нужно доставить груз.</h2><p>Уточним маршрут, состав документов и условия, которые нужны именно для вашей перевозки.</p><Link className="button button--amber" href="/kontakty#request">Обсудить перевозку <span aria-hidden>↗</span></Link></section>
  </main>;
}

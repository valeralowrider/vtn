import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "О компании", description: "ООО «ВТН ТРАНС» — таможенный перевозчик, работающий с 2014 года." };

export default function AboutPage() { return <main className="inner-page"><SiteHeader /><section className="inner-hero"><p className="eyebrow">ООО «ВТН ТРАНС»</p><h1>Контроль груза начинается с ответственности</h1><p>Работаем с {site.founded} года как таможенный перевозчик: соединяем транспорт, оформление и сопровождение в один понятный процесс.</p></section><section className="inner-content"><ul><li>Свидетельство таможенного перевозчика ФТС № {site.customsCarrierCertificate} от {site.customsCarrierCertificateIssuedAt}.</li><li>Таможенные перевозки и оформление в одном процессе.</li><li>Работа с задачами, где важны контроль и конфиденциальность.</li></ul><Link className="text-link text-link--light inner-link" href="/dokumenty">Документы и реквизиты <span aria-hidden>→</span></Link></section></main>; }

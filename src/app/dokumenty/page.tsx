import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { pageMetadata } from "@/lib/metadata";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./document-scans.css";

export const metadata = pageMetadata({
  path: "/dokumenty",
  title: "Документы и реквизиты",
  description: "Сканы свидетельства ФТС и налогового свидетельства ООО «ВТН ТРАНС», номер свидетельства таможенного перевозчика, ОГРН, ИНН и КПП.",
});

const documents = [
  ["Свидетельство таможенного перевозчика", `ФТС № ${site.customsCarrierCertificate} от ${site.customsCarrierCertificateIssuedAt}`],
  ["Государственная регистрация", `ОГРН ${site.ogrn}; дата регистрации 03.07.2014`],
  ["Налоговые реквизиты", `ИНН ${site.inn}; КПП ${site.kpp}`],
  ["Профиль деятельности", `ОКВЭД ${site.okved}`],
] as const;

export default function DocumentsPage() {
  return <main className="inner-page">
    <JsonLd data={organizationSchema} />
    <SiteHeader />
    <section className="inner-hero">
      <p className="eyebrow">ПРОВЕРЯЕМЫЕ СВЕДЕНИЯ</p>
      <h1 id="main-content" tabIndex={-1}>Документы<br />и реквизиты</h1>
      <p>Сканы свидетельства ФТС и налогового свидетельства доступны для просмотра. Основные реквизиты приводим текстом, чтобы их было удобно проверить.</p>
    </section>
    <section className="inner-content documents-content">
      <dl className="document-list">
        {documents.map(([term, description], index) => <div key={term}><dt>{String(index + 1).padStart(2, "0")} · {term}</dt><dd>{description}</dd></div>)}
      </dl>
      <h2 className="document-scans-heading">Сканы документов</h2>
      <p className="document-scans-intro">На превью показан фрагмент. Откройте документ, чтобы изучить полный скан.</p>
      <div className="document-scans">
        <a href="/documents/customs-carrier-certificate.webp" target="_blank" rel="noopener noreferrer" aria-label="Открыть полный скан свидетельства таможенного перевозчика ФТС в новой вкладке">
          <span className="document-scan-image"><Image src="/documents/customs-carrier-certificate.webp" alt="Верхняя часть свидетельства таможенного перевозчика ФТС" width={1200} height={1701} sizes="(max-width: 700px) calc(100vw - 40px), 410px" /></span>
          <span className="document-scan-title">Свидетельство таможенного перевозчика</span>
          <span className="document-scan-open">Открыть полный скан ↗</span>
        </a>
        <a href="/documents/tax-registration-certificate.webp" target="_blank" rel="noopener noreferrer" aria-label="Открыть полный скан свидетельства о постановке на налоговый учёт в новой вкладке">
          <span className="document-scan-image"><Image src="/documents/tax-registration-certificate.webp" alt="Верхняя часть налогового свидетельства ООО «ВТН ТРАНС»" width={2582} height={3653} sizes="(max-width: 700px) calc(100vw - 40px), 410px" /></span>
          <span className="document-scan-title">Свидетельство о постановке на налоговый учёт</span>
          <span className="document-scan-open">Открыть полный скан ↗</span>
        </a>
      </div>
      <Link className="button button--amber documents-contact" href="/kontakty">Запросить другие документы <span aria-hidden>↗</span></Link>
    </section>
  </main>;
}

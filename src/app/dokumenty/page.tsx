import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Документы и реквизиты",
  description: "Проверяемые реквизиты и сведения ООО «ВТН ТРАНС»: ОГРН, ИНН, КПП и свидетельство таможенного перевозчика ФТС.",
};

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
      <h1>Документы<br />и реквизиты</h1>
      <p>Публикуем основные сведения об ООО «ВТН ТРАНС». Копии документов предоставим по запросу для проверки контрагента.</p>
    </section>
    <section className="inner-content documents-content">
      <dl className="document-list">
        {documents.map(([term, description], index) => <div key={term}><dt>{String(index + 1).padStart(2, "0")} · {term}</dt><dd>{description}</dd></div>)}
      </dl>
      <Link className="button button--amber" href="/kontakty">Запросить копии документов <span aria-hidden>↗</span></Link>
    </section>
  </main>;
}

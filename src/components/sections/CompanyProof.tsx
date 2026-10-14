import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import "./company-proof.css";

export function CompanyProof() {
  return (
    <section className="company-proof" id="company-documents" aria-labelledby="company-proof-heading">
      <div className="company-proof-inner">
        <div className="company-proof-copy">
          <p className="eyebrow eyebrow--dark">05 / ДОКУМЕНТЫ КОМПАНИИ</p>
          <h2 id="company-proof-heading">Документы, которые можно открыть</h2>
          <p className="company-proof-lead">
            Публикуем скан свидетельства о включении в реестр таможенных
            перевозчиков и реквизиты ООО «ВТН ТРАНС» — для проверки до начала работы.
          </p>

          <dl className="company-proof-facts">
            <div>
              <dt>Свидетельство ФТС</dt>
              <dd>№ {site.customsCarrierCertificate}</dd>
            </div>
            <div>
              <dt>Дата выдачи</dt>
              <dd>{site.customsCarrierCertificateIssuedAt}</dd>
            </div>
            <div>
              <dt>Юридическое лицо</dt>
              <dd>{site.legalName}</dd>
            </div>
          </dl>

          <Link className="text-link company-proof-link" href="/dokumenty">
            Все документы и реквизиты <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <a
          className="company-proof-artifact"
          href="/documents/customs-carrier-certificate.webp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Открыть полный скан свидетельства таможенного перевозчика ФТС в новой вкладке"
        >
          <span className="company-proof-paper">
            <Image
              src="/documents/customs-carrier-certificate.webp"
              alt="Скан свидетельства ФТС о включении ООО «ВТН ТРАНС» в реестр таможенных перевозчиков"
              width={1200}
              height={1701}
              sizes="(max-width: 900px) calc(100vw - 88px), 500px"
            />
          </span>
          <span className="company-proof-caption">
            <span>ПОДЛИННЫЙ СКАН ДОКУМЕНТА</span>
            <span>Открыть полностью ↗</span>
          </span>
        </a>
      </div>
    </section>
  );
}

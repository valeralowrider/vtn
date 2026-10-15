import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import "./company-proof.css";

function RegistryIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.75 26 8.8v8.6c0 5.35-3.9 9.35-10 10.85-6.1-1.5-10-5.5-10-10.85V8.8L16 3.75Z" /><path d="m11.25 15.9 3.05 3.05 6.45-6.45" /></svg>;
}

function DocumentIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 3.75h10.2L24 8.55v19.7H9z" /><path d="M19 3.75v5h5M12.5 14h8M12.5 18h8M12.5 22h5" /></svg>;
}

export function CompanyProof() {
  return (
    <section className="company-proof" id="company-documents" aria-labelledby="company-proof-heading">
      <div className="company-proof-inner">
        <div className="company-proof-overview">
          <div className="company-proof-intro">
            <p className="eyebrow eyebrow--dark">05 / О КОМПАНИИ</p>
            <h2 id="company-proof-heading"><span>С 2014 года</span> в таможенной логистике</h2>
          </div>
          <dl className="company-proof-metrics">
            <div><dt><RegistryIcon /></dt><dd>В реестре ФТС</dd><dd className="company-proof-metric-description">Работаем как таможенный перевозчик на основании свидетельства.</dd></div>
            <div><dt><DocumentIcon /></dt><dd>№ {site.customsCarrierCertificate}</dd><dd className="company-proof-metric-description">Свидетельство можно открыть и проверить до начала работы.</dd></div>
            <div><dt className="company-proof-mark">01</dt><dd>Одна команда</dd><dd className="company-proof-metric-description">Перевозчик и таможенные брокеры ведут задачу вместе.</dd></div>
          </dl>
        </div>
        <div className="company-proof-lower">
          <div className="company-proof-copy">
            <p className="company-proof-lead">ООО «ВТН ТРАНС» организует таможенные перевозки, оформление и сопровождение груза. До рейса проверяем вводные, маршрут и нужные документы.</p>
            <Link className="company-proof-link" href="/o-kompanii">Подробнее о компании <span aria-hidden="true">→</span></Link>
          </div>
          <div className="company-proof-registry">
            <Image src="/images/hero-customs-gate.webp" alt="Контейнеровоз у терминала таможенного контроля" width={1200} height={675} sizes="(max-width: 780px) calc(100vw - 40px), 42vw" />
            <div className="company-proof-registry-copy">
              <p>ПРОВЕРИТЬ ПЕРЕД НАЧАЛОМ РАБОТЫ</p>
              <h3>Документы и реквизиты — в открытом доступе</h3>
              <span>Свидетельство ФТС от {site.customsCarrierCertificateIssuedAt}</span>
              <Link href="/dokumenty">Открыть документы <b aria-hidden="true">→</b></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

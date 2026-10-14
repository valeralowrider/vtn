import { LeadForm } from "@/components/ui/LeadForm";
import { site } from "@/lib/site";
import "./request-section.css";

export function RequestSection() {
  return (
    <section className="request-section" id="request" aria-labelledby="request-heading">
      <div className="request-inner">
        <div className="request-copy">
          <p className="eyebrow">06 / ЗАПРОС НА ПЕРЕВОЗКУ</p>
          <h2 id="request-heading">Расскажите о грузе. Остальное уточним вместе.</h2>
          <p className="request-lead">
            Укажите маршрут, контакт и коротко опишите задачу. Мы изучим вводные
            и уточним, какие документы и условия нужны для расчёта.
          </p>
          <div className="request-direct-contact">
            <span>Удобнее обсудить по телефону?</span>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

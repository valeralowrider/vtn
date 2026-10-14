import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { organizationSchema, serviceSchemas } from "@/lib/schema";
import { site } from "@/lib/site";
import { HeroMedia } from "@/components/sections/HeroMedia";

import { TransportScenarios } from "@/components/sections/TransportScenarios";
import { TransportBroker } from "@/components/sections/TransportBroker";
import { SpecialConditions } from "@/components/sections/SpecialConditions";
import { IntercityRoute } from "@/components/sections/IntercityRoute";
import { CompanyProof } from "@/components/sections/CompanyProof";
import { RequestSection } from "@/components/sections/RequestSection";

export default function Home() {
  return <main><JsonLd data={[organizationSchema, ...serviceSchemas]} /><section className="hero"><HeroMedia /><div className="hero-scrim" /><SiteHeader /><div className="hero-copy"><p className="eyebrow">ТАМОЖЕННЫЕ ПЕРЕВОЗКИ · С {site.founded} ГОДА</p><h1>Таможенный груз —<br />под контролем<br />на всём маршруте</h1><p>Берём груз под пломбу, доставляем к месту оформления и сопровождаем выпуск.</p><div className="hero-actions"><a className="button button--amber" href="#request">Рассчитать перевозку <span aria-hidden>↗</span></a><Link className="text-link" href="/kontakty">Консультация <span aria-hidden>→</span></Link></div></div><div className="route-strip" aria-label="Пример маршрута"><span><small>01 / ПРИБЫТИЕ</small>Шереметьево</span><i /><span><small>02 / ТРАНЗИТ</small>Нижний Новгород</span><i /><span><small>03 / ТАМОЖНЯ</small>Оформление</span></div></section>
    <TransportScenarios />
    <TransportBroker />
    <SpecialConditions />
    <IntercityRoute />
    <CompanyProof />
    <RequestSection />
  </main>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { organizationSchema, serviceSchemas, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { HeroMedia } from "@/components/sections/HeroMedia";

import { TransportScenarios } from "@/components/sections/TransportScenarios";
import { TransportBroker } from "@/components/sections/TransportBroker";
import { SpecialConditions } from "@/components/sections/SpecialConditions";
import { AdditionalServices, ReasonsToChoose } from "@/components/sections/HomeExtras";
import { IntercityRoute } from "@/components/sections/IntercityRoute";
import { CompanyProof } from "@/components/sections/CompanyProof";
import { Clients } from "@/components/sections/Clients";
import { Tariffs } from "@/components/sections/Tariffs";
import { RequestSection } from "@/components/sections/RequestSection";

export const metadata: Metadata = {
  title: "Таможенный перевозчик ВТН ТРАНС — перевозки под пломбами по России",
  description: "Перевозим нерастаможенные грузы под таможенными пломбами из аэропорта и с границы до места оформления. Собственные брокеры, опасные и негабаритные грузы. С 2014 года.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <main><JsonLd data={[organizationSchema, websiteSchema, ...serviceSchemas]} /><section className="hero"><HeroMedia /><div className="hero-scrim" /><SiteHeader /><div className="hero-copy"><p className="eyebrow">ТАМОЖЕННЫЙ ПЕРЕВОЗЧИК В РЕЕСТРЕ ФТС · С {site.founded} ГОДА</p><h1 id="main-content" tabIndex={-1}>Таможенный груз —<br />под контролем<br />на всём маршруте</h1><p>Перевозим нерастаможенные грузы под таможенными пломбами по всей России — из аэропорта, с границы или с СВХ до поста, где запланировано оформление. Собственные брокеры готовят декларацию и сопровождают выпуск.</p><div className="hero-actions"><a className="button button--amber" href="#request">Рассчитать перевозку <span aria-hidden>↗</span></a><Link className="text-link" href="/kontakty">Консультация <span aria-hidden>→</span></Link></div></div><div className="route-strip" aria-label="Пример маршрута"><span><small>01 / ПРИБЫТИЕ</small>Шереметьево</span><i /><span><small>02 / ТРАНЗИТ</small>Нижний Новгород</span><i /><span><small>03 / ТАМОЖНЯ</small>Оформление</span></div></section>
    <TransportScenarios />
    <TransportBroker />
    <SpecialConditions />
    <AdditionalServices />
    <IntercityRoute />
    <CompanyProof />
    <ReasonsToChoose />
    <Clients />
    <Tariffs />
    <RequestSection />
  </main>;
}

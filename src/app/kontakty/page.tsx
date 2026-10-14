import type { Metadata } from "next";
import { LeadForm } from "@/components/ui/LeadForm";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Контакты", description: "Контакты ООО «ВТН ТРАНС» для расчёта таможенной перевозки." };

export default function ContactsPage() { return <main className="inner-page"><SiteHeader /><section className="inner-hero"><p className="eyebrow">ВТН ТРАНС</p><h1>Обсудим вашу задачу</h1><p>{site.address.postalCode}, {site.address.addressLocality}, {site.address.streetAddress}<br /><a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a><br /><a href={`mailto:${site.email}`}>{site.email}</a></p></section><section id="request" className="contact-request"><LeadForm /></section></main>; }

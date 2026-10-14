import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { serviceSchema } from "@/lib/schema";

type ServicePageProps = { path: string; title: string; intro: string; items: string[] };

export function ServicePage({ path, title, intro, items }: ServicePageProps) {
  const schema = serviceSchema(title, intro, path);
  return <main className="inner-page"><JsonLd data={schema} /><SiteHeader /><section className="inner-hero"><p className="eyebrow">ВТН ТРАНС · ТАМОЖЕННЫЙ ПЕРЕВОЗЧИК</p><h1 id="main-content" tabIndex={-1}>{title}</h1><p>{intro}</p><Link className="button button--amber" href="/kontakty#request">Обсудить задачу <span aria-hidden>↗</span></Link></section><section className="inner-content"><h2>Как работаем</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section></main>;
}

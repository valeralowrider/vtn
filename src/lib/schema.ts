import { site } from "@/lib/site";

const absoluteUrl = (path: string) => new URL(path, site.url).toString();
const organizationId = `${absoluteUrl("/")}#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: site.legalName,
  alternateName: site.name,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/brand/icon-512.png"),
  foundingDate: site.founded,
  taxID: site.inn,
  identifier: [
    { "@type": "PropertyValue", propertyID: "ОГРН", value: site.ogrn },
    { "@type": "PropertyValue", propertyID: "КПП", value: site.kpp },
    {
      "@type": "PropertyValue",
      propertyID: "Свидетельство таможенного перевозчика ФТС",
      value: site.customsCarrierCertificate,
    },
  ],
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    ...site.address,
  },
  knowsAbout: [
    "Таможенные перевозки",
    "Таможенное оформление",
    "Таможенный транзит",
    "Перевозка сложных грузов",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${absoluteUrl("/")}#website`,
  name: site.name,
  url: absoluteUrl("/"),
  publisher: { "@id": organizationId },
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "Organization",
      "@id": organizationId,
      name: site.legalName,
      url: absoluteUrl("/"),
    },
    areaServed: { "@type": "Country", name: "Россия" },
  };
}

export const serviceSchemas = [
  serviceSchema("Таможенные перевозки", "Организуем перевозку груза под таможенными пломбами от места прибытия до места оформления.", "/tamozhennye-perevozki"),
  serviceSchema("Таможенное оформление", "Собственные брокеры готовят документы и сопровождают операции до выпуска груза.", "/tamozhennoe-oformlenie"),
  serviceSchema("Специальные перевозки", "Проектируем порядок работ для грузов с особыми требованиями к транспорту, маршруту и сопровождению.", "/specialnye-perevozki"),
];

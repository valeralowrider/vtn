import { site } from "@/lib/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: `${site.url}/images/vtn-trans-logo.svg`,
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

export const serviceSchemas = [
  "Таможенные перевозки",
  "Таможенное оформление",
  "Специальные перевозки",
].map((name) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  provider: { "@type": "Organization", name: site.legalName, url: site.url },
  areaServed: { "@type": "Country", name: "Россия" },
}));

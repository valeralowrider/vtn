export const site = {
  name: "ВТН ТРАНС",
  legalName: "ООО «ВТН ТРАНС»",
  description:
    "Таможенные перевозки, оформление и сопровождение сложных грузов по России.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vtntrans.ru",
  phone: "+7 (495) 730-56-09",
  email: "info@vtntrans.ru",
  address: {
    streetAddress: "пер. Большой Саввинский, д. 2–4–6, стр. 4",
    addressLocality: "Москва",
    postalCode: "119435",
    addressCountry: "RU",
  },
  customsCarrierCertificate: "10000/0581 А",
  customsCarrierCertificateIssuedAt: "11.02.2020",
  founded: "2014",
  ogrn: "1147746755551",
  inn: "7704867770",
  kpp: "770401001",
  okved: "52.29 — деятельность вспомогательная прочая, связанная с перевозками",
} as const;

export const routes = [
  { href: "/", label: "Главная" },
  { href: "/tamozhennye-perevozki", label: "Таможенные перевозки" },
  { href: "/tamozhennoe-oformlenie", label: "Оформление" },
  { href: "/specialnye-perevozki", label: "Специальные перевозки" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/dokumenty", label: "Документы" },
  { href: "/kontakty", label: "Контакты" },
] as const;

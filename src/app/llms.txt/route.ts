import { site } from "@/lib/site";

export const revalidate = 86400;

export function GET() {
  const content = `# ${site.name}
> ${site.description}

## Основные страницы
- [Главная](${site.url}/): Таможенные перевозки и сопровождение груза.
- [Таможенные перевозки](${site.url}/tamozhennye-perevozki): Перевозка под пломбами до места оформления.
- [Таможенное оформление](${site.url}/tamozhennoe-oformlenie): Подготовка декларации и сопровождение выпуска.
- [Специальные перевозки](${site.url}/specialnye-perevozki): Индивидуальные условия для сложных задач.
- [Документы и реквизиты](${site.url}/dokumenty): Проверяемые сведения об организации.
- [Контакты](${site.url}/kontakty): Связь с командой ВТН ТРАНС.

## Проверяемые факты
- ООО «ВТН ТРАНС» зарегистрировано 03.07.2014; ОГРН ${site.ogrn}; ИНН ${site.inn}; КПП ${site.kpp}.
- Свидетельство таможенного перевозчика ФТС № ${site.customsCarrierCertificate} от ${site.customsCarrierCertificateIssuedAt}.
- Основной профиль по документу ФСС: ${site.okved}.
- Email: ${site.email}
- Телефон: ${site.phone}
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

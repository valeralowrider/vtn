import { site } from "@/lib/site";

export const revalidate = 86400;

export function GET() {
  const content = `# ${site.name}\n> ${site.description}\n\n## Основные страницы\n- [Главная](${site.url}/): Таможенные перевозки и сопровождение груза.\n- [Таможенные перевозки](${site.url}/tamozhennye-perevozki): Перевозка под пломбами до места оформления.\n- [Таможенное оформление](${site.url}/tamozhennoe-oformlenie): Подготовка декларации и сопровождение выпуска.\n- [Специальные перевозки](${site.url}/specialnye-perevozki): Индивидуальные условия для сложных задач.\n- [Контакты](${site.url}/kontakty): Связь с командой ВТН ТРАНС.\n\n## Проверяемые факты\n- Компания работает с ${site.founded} года.\n- Свидетельство таможенного перевозчика ФТС № ${site.customsCarrierCertificate}.\n- Email: ${site.email}\n- Телефон: ${site.phone}\n`;
  return new Response(content, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

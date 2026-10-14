import { ServicePage } from "@/components/sections/ServicePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ path: "/specialnye-perevozki", title: "Специальные перевозки", description: "Индивидуальные решения для сложных категорий грузов." });

export default function SpecialTransportPage() { return <ServicePage path="/specialnye-perevozki" title="Специальные перевозки" intro="Проектируем порядок работ для грузов с особыми требованиями к транспорту, маршруту и сопровождению." items={["Согласуем характеристики груза и ограничения.", "Подбираем оснащение и маршрут под задачу.", "Организуем дополнительные условия перевозки по согласованию."]} />; }

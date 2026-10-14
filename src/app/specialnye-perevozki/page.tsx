import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";

export const metadata: Metadata = { title: "Специальные перевозки", description: "Индивидуальные решения для сложных категорий грузов." };

export default function SpecialTransportPage() { return <ServicePage title="Специальные перевозки" intro="Проектируем порядок работ для грузов с особыми требованиями к транспорту, маршруту и сопровождению." items={["Согласуем характеристики груза и ограничения.", "Подбираем оснащение и маршрут под задачу.", "Организуем дополнительные условия перевозки по согласованию."]} />; }

import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";

export const metadata: Metadata = { title: "Таможенные перевозки", description: "Перевозка грузов под таможенными пломбами до места оформления." };

export default function CustomsTransportPage() { return <ServicePage title="Таможенные перевозки" intro="Организуем перевозку груза под таможенными пломбами от места прибытия до места оформления." items={["Подбираем транспорт под характеристики груза.", "Организуем маршрут и передачу на таможенный пост.", "Координируем перевозку и оформление в одной команде."]} />; }

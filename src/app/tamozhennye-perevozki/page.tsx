import { ServicePage } from "@/components/sections/ServicePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ path: "/tamozhennye-perevozki", title: "Таможенные перевозки", description: "Перевозка грузов под таможенными пломбами до места оформления." });

export default function CustomsTransportPage() { return <ServicePage path="/tamozhennye-perevozki" title="Таможенные перевозки" intro="Организуем перевозку груза под таможенными пломбами от места прибытия до места оформления." items={["Подбираем транспорт под характеристики груза.", "Организуем маршрут и передачу на таможенный пост.", "Координируем перевозку и оформление в одной команде."]} />; }

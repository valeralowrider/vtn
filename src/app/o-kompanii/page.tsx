import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";

export const metadata: Metadata = { title: "О компании", description: "ООО «ВТН ТРАНС» — таможенный перевозчик, работающий с 2014 года." };

export default function AboutPage() { return <ServicePage title="О компании" intro="ООО «ВТН ТРАНС» — таможенный перевозчик. Работаем с 2014 года." items={["Свидетельство таможенного перевозчика ФТС № 10000/0581 А.", "Таможенные перевозки и оформление в одном процессе.", "Работа с задачами, где важны контроль и конфиденциальность."]} />; }

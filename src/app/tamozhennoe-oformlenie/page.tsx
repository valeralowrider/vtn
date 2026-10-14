import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";

export const metadata: Metadata = { title: "Таможенное оформление", description: "Подготовка декларации и сопровождение таможенного оформления груза." };

export default function CustomsClearancePage() { return <ServicePage title="Таможенное оформление" intro="Собственные брокеры готовят документы и сопровождают операции до выпуска груза." items={["Проверяем вводные и комплект документов.", "Готовим декларацию и сопровождаем процедуру.", "Оперативно разбираемся с уточнениями на таможне."]} />; }

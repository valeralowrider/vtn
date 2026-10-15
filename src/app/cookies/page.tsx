import { SiteHeader } from "@/components/sections/SiteHeader";
import { pageMetadata } from "@/lib/metadata";
import "../legal-page.css";

export const metadata = pageMetadata({ path: "/cookies", title: "Cookie", description: "Информация об использовании cookie на сайте ООО «ВТН ТРАНС»." });

export default function CookiesPage() {
  return <main className="legal-page"><SiteHeader /><article className="legal-page__content"><p className="legal-page__eyebrow">ВТН ТРАНС · COOKIE</p><h1 id="main-content" tabIndex={-1}>Использование cookie</h1><p className="legal-page__updated">Дата размещения: 15 октября 2026 года</p><div className="legal-page__prose"><section><h2>Что используется сейчас</h2><p>Сайт использует один технический cookie <code>vtn_cookie_consent</code>. В нём хранится только выбранный режим: необходимые cookie или разрешение на аналитику. Он нужен, чтобы не показывать окно выбора при каждом посещении, и действует до 180 дней.</p></section><section><h2>Аналитика</h2><p>На дату размещения этой страницы Яндекс Метрика и Вебвизор на сайте не подключены и не загружаются. После подключения эти инструменты будут работать только при выборе «Разрешить аналитику» в окне cookie.</p></section><section><h2>Как изменить выбор</h2><p>Удалите cookie этого сайта в настройках браузера — окно выбора появится снова при следующем посещении. Блокирование технических cookie может помешать сайту запомнить ваш выбор.</p></section></div></article></main>;
}

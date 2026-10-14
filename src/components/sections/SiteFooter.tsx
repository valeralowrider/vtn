import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import "./site-footer.css";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link href="/" aria-label="ВТН ТРАНС — главная">
              <Image src="/images/vtn-trans-logo.svg" alt="ВТН ТРАНС" width={250} height={62} />
            </Link>
            <p>Таможенная перевозка, оформление и сопровождение груза — в одной команде.</p>
          </div>
          <Link href="/kontakty#request" className="site-footer__cta">Обсудить перевозку <span aria-hidden="true">↗</span></Link>
        </div>

        <div className="site-footer__main">
          <nav aria-label="Услуги в подвале" className="site-footer__nav">
            <h2>Услуги</h2>
            <Link href="/tamozhennye-perevozki">Таможенные перевозки</Link>
            <Link href="/tamozhennoe-oformlenie">Таможенное оформление</Link>
            <Link href="/specialnye-perevozki">Специальные перевозки</Link>
          </nav>
          <nav aria-label="Компания в подвале" className="site-footer__nav">
            <h2>Компания</h2>
            <Link href="/o-kompanii">О компании</Link>
            <Link href="/dokumenty">Документы и реквизиты</Link>
            <Link href="/kontakty">Контакты</Link>
          </nav>
          <div className="site-footer__contact">
            <h2>На связи</h2>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p>{site.address.postalCode}, {site.address.addressLocality}<br />{site.address.streetAddress}</p>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} {site.legalName}</span>
          <span>Информация о перевозке и оформлении не является публичной офертой.</span>
          <Link href="/dokumenty">Проверить документы <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </footer>
  );
}

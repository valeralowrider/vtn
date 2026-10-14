import Image from "next/image";
import "./intercity-route.css";

export function IntercityRoute() {
  return (
    <section className="intercity-section" id="intercity-route" aria-labelledby="intercity-heading">
      <div className="intercity-inner">
        <figure className="intercity-media">
          <div className="intercity-image-wrap">
            <Image
              src="/images/intercity-customs-route.webp"
              alt="Иллюстрация: синий грузовик на междугородной дороге в предрассветных сумерках"
              width={1000}
              height={1250}
              sizes="(max-width: 900px) calc(100vw - 40px), 580px"
            />
          </div>
          <figcaption>
            <span>МЕЖРЕГИОНАЛЬНЫЙ МАРШРУТ</span>
            <span>Концептуальная иллюстрация</span>
          </figcaption>
        </figure>

        <div className="intercity-copy">
          <p className="eyebrow">04 / ТАМОЖЕННЫЙ ТРАНЗИТ</p>
          <h2 id="intercity-heading">Таможня — не обязательно в городе прибытия</h2>
          <p className="intercity-lead">
            Забираем груз в месте прибытия и организуем перевозку под пломбами
            к посту, где запланировано оформление.
          </p>

          <div className="intercity-example" aria-label="Пример маршрута: Шереметьево — Нижний Новгород">
            <p>ПРИМЕР МАРШРУТА</p>
            <div className="intercity-cities">
              <span>Шереметьево</span>
              <span className="intercity-arrow" aria-hidden="true">↗</span>
              <span>Нижний Новгород</span>
            </div>
          </div>

          <p className="intercity-note">
            Возможность транзита, документы и условия перевозки проверяем по
            конкретной партии до отправления.
          </p>
          <a className="text-link intercity-link" href="#request">
            Обсудить свой маршрут <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

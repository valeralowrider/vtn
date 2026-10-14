import Image from "next/image";
import Link from "next/link";
import "./special-conditions.css";

const conditions = [
  {
    title: "Пломбы и печати",
    description: "Перевозим груз под таможенным контролем с сохранением установленных пломб и печатей.",
  },
  {
    title: "Оснащение транспорта",
    description: "Используем специально оборудованный транспорт; размещение и крепление планируем под параметры груза.",
  },
  {
    title: "Особые категории",
    description: "Для сложных, в том числе опасных грузов, проверяем документы и условия допуска до подтверждения перевозки.",
  },
  {
    title: "Охрана по задаче",
    description: "При необходимости согласуем сопровождение груза охраной и порядок работы на маршруте.",
  },
];

export function SpecialConditions() {
  return (
    <section className="special-section" id="special-conditions" aria-labelledby="special-heading">
      <div className="special-inner">
        <div className="special-copy">
          <p className="eyebrow eyebrow--dark">03 / СПЕЦИАЛЬНЫЕ УСЛОВИЯ</p>
          <h2 id="special-heading">Условия груза определяют маршрут</h2>
          <p className="special-intro">
            До рейса уточняем требования к транспорту, документам и сопровождению.
            Для сложной перевозки нет одного решения на все случаи.
          </p>
          <ol className="special-ledger">
            {conditions.map((condition, index) => (
              <li key={condition.title}>
                <span className="special-number" aria-hidden="true">0{index + 1}</span>
                <div>
                  <h3>{condition.title}</h3>
                  <p>{condition.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link className="text-link special-link" href="/specialnye-perevozki">
            Подробнее о специальных перевозках <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <figure className="special-media">
          <div className="special-image-wrap">
            <Image
              src="/images/special-cargo-securement.webp"
              alt="Иллюстрация: промышленный груз закреплён ремнями в грузовом кузове"
              width={1000}
              height={1250}
              sizes="(max-width: 900px) calc(100vw - 40px), 580px"
            />
          </div>
          <figcaption>
            <span>ПОДГОТОВКА К ПЕРЕВОЗКЕ</span>
            <span>Концептуальная иллюстрация</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

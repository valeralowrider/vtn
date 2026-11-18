import Image from "next/image";
import Link from "next/link";
import "./special-conditions.css";

const conditions = [
  {
    title: "Пломбы и печати",
    description: "Крытые автомобили разных классов прошли освидетельствование для перевозки под таможенными пломбами и печатями. Сохраняем их целостность на всём маршруте.",
  },
  {
    title: "Оснащение транспорта",
    description: "Крытые фургоны, контейнеровозы для всех типов контейнеров, открытые площадки и низкорамные платформы для негабарита. Размещение и крепление планируем под параметры груза, погрузку и выгрузку выполняем автокранами.",
  },
  {
    title: "Особые категории",
    description: "Опасные грузы везём собственным транспортом, водители имеют свидетельство ДОПОГ. Для негабаритных грузов прорабатываем маршрут, разрешения и допуски до подтверждения рейса.",
  },
  {
    title: "Охрана по задаче",
    description: "Для режимных и ценных грузов согласуем сопровождение, в том числе вооружённую охрану, и порядок работы на маршруте.",
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
            У сложной перевозки нет типового решения — подбираем его под конкретный груз.
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

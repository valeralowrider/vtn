import Image from "next/image";
import Link from "next/link";
import "./transport-broker.css";

const stages = [
  {
    title: "Груз едет под пломбой",
    description: "Согласуем место получения, подбираем транспорт и доставляем груз под таможенным контролем к месту оформления.",
  },
  {
    title: "Брокер готовит оформление",
    description: "Проверяет документы, составляет декларацию и сопровождает операции на таможне до выпуска. Для авиагрузов подключаем авиаброкера.",
  },
  {
    title: "Уточнения — внутри команды",
    description: "Если таможня запросит дополнительный документ или исправление, брокер решает вопрос и держит вас в курсе — без пересылки писем между подрядчиками.",
  },
];

export function TransportBroker() {
  return (
    <section className="broker-section" id="transport-and-broker" aria-labelledby="broker-heading">
      <div className="broker-inner">
        <div className="broker-copy">
          <p className="eyebrow">02 / ПЕРЕВОЗКА + ОФОРМЛЕНИЕ</p>
          <h2 id="broker-heading">Не передаём вас между перевозчиком и таможней</h2>
          <p className="broker-lead">
            Перевозчик и собственные таможенные брокеры работают в одной команде.
            У вас один контакт по грузу и документам — от получения в месте прибытия до выпуска товара.
          </p>
          <ol className="broker-stages">
            {stages.map((stage, index) => (
              <li key={stage.title}>
                <span className="broker-stage-number" aria-hidden="true">0{index + 1}</span>
                <div>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link className="text-link broker-link" href="/tamozhennoe-oformlenie">
            Как проходит оформление <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <figure className="broker-art">
          <div className="broker-art-image">
            <Image
              src="/images/broker-transport.webp"
              alt="Иллюстрация: документы на столе и контейнеровоз за окном таможенного терминала"
              width={1200}
              height={900}
              sizes="(max-width: 900px) calc(100vw - 40px), 600px"
            />
          </div>
          <figcaption className="broker-art-caption">
            <span>ПЕРЕВОЗКА</span>
            <span className="broker-caption-line" aria-hidden="true" />
            <span>ОФОРМЛЕНИЕ</span>
          </figcaption>
          <p className="broker-art-note">Концептуальная иллюстрация процесса</p>
        </figure>
      </div>
    </section>
  );
}

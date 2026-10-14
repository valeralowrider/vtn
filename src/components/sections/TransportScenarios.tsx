"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./transport-scenarios.css";

const scenarios = [
  {
    title: "Груз прибыл, но ещё не выпущен",
    text: "Забираем груз в месте прибытия и доставляем под таможенными пломбами к месту оформления.",
    label: "Груз под пломбой",
    detail: "Перевозка до места таможенного оформления с сохранением пломб.",
    steps: ["Место прибытия", "Перевозка под пломбой", "Место оформления"],
    image: "/images/scenarios/cargo-under-seal.webp",
    imageAlt: "Синий грузовик с пломбированным контейнером у таможенного терминала",
  },
  {
    title: "Оформление в другом городе",
    text: "Согласуем перевозку между пунктом прибытия и таможенным постом, где планируется оформление.",
    label: "Один маршрут — несколько этапов",
    detail: "Например: забрать груз в Шереметьево и доставить к месту оформления в Нижнем Новгороде.",
    steps: ["Шереметьево", "Таможенный транзит", "Нижний Новгород"],
    image: "/images/scenarios/intercity-customs-route.webp",
    imageAlt: "Синий контейнеровоз следует по междугородней дороге к логистическому терминалу",
  },
  {
    title: "Груз требует особых условий",
    text: "Уточняем характеристики груза, подбираем транспорт и согласуем необходимые условия сопровождения.",
    label: "Условия под вашу задачу",
    detail: "Состав транспорта, документов и сопровождения определяем после изучения заявки.",
    steps: ["Параметры груза", "Согласование условий", "Организация перевозки"],
    image: "/images/scenarios/special-cargo-preparation.webp",
    imageAlt: "Подготовка промышленного груза к погрузке в контейнеровоз",
  },
];

export function TransportScenarios() {
  const [active, setActive] = useState(0);
  const current = scenarios[active];

  return (
    <section className="scenarios" id="transport-scenarios" aria-labelledby="scenarios-heading">
      <div className="scenarios-inner">
        <div className="scenarios-copy">
          <p className="eyebrow eyebrow--dark">01 / ЗАДАЧИ, КОТОРЫЕ РЕШАЕМ</p>
          <h2 id="scenarios-heading">Когда нужен<br />таможенный перевозчик</h2>
          <p className="scenarios-intro">Груз уже в пути. Мы подключаемся там, где перевозка требует таможенного контроля.</p>
          <div className="scenario-options" role="group" aria-label="Выберите сценарий перевозки">
            {scenarios.map((scenario, index) => (
              <button key={scenario.title} type="button" className="scenario-option" aria-pressed={active === index} aria-controls="scenario-illustration" onClick={() => setActive(index)}>
                <span className="scenario-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="scenario-option-copy"><span className="scenario-option-title">{scenario.title}</span><span className="scenario-option-text">{scenario.text}</span></span>
                <svg className="scenario-arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
              </button>
            ))}
          </div>
          <Link className="text-link scenarios-link" href="/tamozhennye-perevozki">Подробнее о перевозках <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="scenario-plate" id="scenario-illustration">
          <div className="scenario-plate-heading"><span>СЦЕНАРИЙ ПЕРЕВОЗКИ</span><span>0{active + 1} / 03</span></div>
          <div className="scenario-visuals">
            {scenarios.map((scenario, index) => (
              <Image
                key={scenario.image}
                className="scenario-drawing"
                data-active={active === index}
                src={scenario.image}
                alt={scenario.imageAlt}
                aria-hidden={active !== index}
                width={1000}
                height={800}
                sizes="(max-width: 850px) calc(100vw - 80px), 560px"
              />
            ))}
          </div>
          <div className="scenario-caption" aria-live="polite" aria-atomic="true">
            <div key={active} className="scenario-caption-content">
              <h3>{current.label}</h3>
              <p>{current.detail}</p>
              <ol className="scenario-stages">{current.steps.map((step, index) => <li key={step}><span aria-hidden="true">0{index + 1}</span>{step}</li>)}</ol>
            </div>
          </div>
          <p className="scenario-footnote">Иллюстрация процесса · условия согласуются для каждого груза</p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import "./transport-scenarios.css";

const scenarios = [
  {
    title: "Груз прибыл, но ещё не выпущен",
    text: "Забираем груз в месте прибытия и доставляем под таможенными пломбами к месту оформления.",
    label: "Груз под пломбой",
    detail: "Перевозка до места таможенного оформления с сохранением пломб.",
    steps: ["Место прибытия", "Перевозка под пломбой", "Место оформления"],
  },
  {
    title: "Оформление в другом городе",
    text: "Согласуем перевозку между пунктом прибытия и таможенным постом, где планируется оформление.",
    label: "Один маршрут — несколько этапов",
    detail: "Например: забрать груз в Шереметьево и доставить к месту оформления в Нижнем Новгороде.",
    steps: ["Шереметьево", "Таможенный транзит", "Нижний Новгород"],
  },
  {
    title: "Груз требует особых условий",
    text: "Уточняем характеристики груза, подбираем транспорт и согласуем необходимые условия сопровождения.",
    label: "Условия под вашу задачу",
    detail: "Состав транспорта, документов и сопровождения определяем после изучения заявки.",
    steps: ["Параметры груза", "Согласование условий", "Организация перевозки"],
  },
];

function CargoDrawing({ active }: { active: number }) {
  return (
    <svg className="scenario-drawing" viewBox="0 0 560 340" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="cargo-side" x1="140" y1="160" x2="420" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#127cc9" /><stop offset="1" stopColor="#06457e" />
        </linearGradient>
        <linearGradient id="cargo-top" x1="80" y1="100" x2="400" y2="170" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a4dbff" /><stop offset="1" stopColor="#358dca" />
        </linearGradient>
        <pattern id="cargo-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" stroke="#ccdae6" strokeWidth=".7" />
        </pattern>
      </defs>
      <rect width="560" height="340" fill="url(#cargo-grid)" opacity=".6" />
      <path d="m50 259 277 65 185-91-277-65Z" fill="#c8dae8" opacity=".4" />
      <path d="m74 119 242 61 155-75-241-59Z" fill="url(#cargo-top)" stroke="#3b82b2" />
      <path d="m74 119 242 61v128L74 247Z" fill="url(#cargo-side)" stroke="#095184" />
      <path d="m316 180 155-75v127l-155 76Z" fill="#073b68" stroke="#095184" />
      {Array.from({ length: 13 }, (_, i) => {
        const x = 88 + i * 17;
        const y = 124 + i * 4.3;
        return <path key={i} d={`M${x} ${y}v113`} stroke="#66b9ef" strokeOpacity=".55" strokeWidth="3" />;
      })}
      <path d="m85 109 240 59M108 98l239 59M131 87l240 59M154 76l240 59M177 65l240 59" stroke="#c4eaff" strokeOpacity=".5" strokeWidth="2" />
      <path d="m327 186 132-64v103l-132 65Zm66-32v104M347 177v103M438 133v103" stroke="#78b4dc" strokeWidth="2" />
      <path d="m341 236 12-6m79-32 12-6" stroke="#d9eaf4" strokeWidth="4" />
      <g className={active === 0 ? "cargo-focus" : "cargo-muted"}>
        <path d="M393 236v-18c0-13 14-17 14-5v17" stroke="#f5ac35" strokeWidth="3" />
        <path d="m387 237 23-11v24l-23 11Z" fill="#f5ac35" stroke="#ffda91" />
        <path d="m399 238 0 10" stroke="#694112" strokeWidth="2" />
        <path d="M402 244h83V166" stroke="#c58521" strokeDasharray="4 5" />
        <circle cx="485" cy="157" r="8" fill="#f5ac35" />
      </g>
      <g className={active === 1 ? "cargo-focus" : "cargo-muted"}>
        <path d="M49 278 289 336 510 265" stroke="#0875df" strokeWidth="3" />
        <path d="m500 262 10 3-6 9" stroke="#0875df" strokeWidth="3" />
        <circle cx="49" cy="278" r="6" fill="#0875df" />
      </g>
      <g className={active === 2 ? "cargo-focus" : "cargo-muted"}>
        <path d="M435 39 463 49v23c0 19-28 34-28 34s-28-15-28-34V49Z" fill="#eaf4ff" stroke="#0875df" strokeWidth="2" />
        <path d="m422 70 9 9 17-20" stroke="#0875df" strokeWidth="3" />
      </g>
    </svg>
  );
}

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
          <div className="scenario-plate-heading"><span>СХЕМА ПЕРЕВОЗКИ</span><span>0{active + 1} / 03</span></div>
          <CargoDrawing active={active} />
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

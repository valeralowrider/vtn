"use client";

import { useState } from "react";
import "./tariffs.css";

const tariffs = [
  { capacity: "До 10 м³", weight: "до 1 т", amount: 13482 },
  { capacity: "До 40 м³", weight: "до 5 т", amount: 24730 },
  { capacity: "До 82 м³", weight: "до 20 т", amount: 44733 },
];

const money = new Intl.NumberFormat("ru-RU", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
const price = (amount: number) => `${money.format(amount)} ₽`;

export function Tariffs() {
  const [openTariff, setOpenTariff] = useState<number | null>(null);

  return (
    <section className="tariffs" id="tarify" aria-labelledby="tariffs-heading">
      <div className="tariffs-inner">
        <div className="tariffs-intro">
          <p className="eyebrow">06 / ТАРИФЫ</p>
          <h2 id="tariffs-heading">Стоимость работы транспорта</h2>
          <p>Ставка за 1 день работы · пробег до 70 км</p>
        </div>
        <div className="tariffs-list" aria-label="Тарифы на перевозку">
          {tariffs.map((tariff, index) => {
            const isOpen = openTariff === index;
            const vat = tariff.amount * 0.05;
            const total = tariff.amount + vat;
            const detailsId = `tariff-calculation-${index}`;

            return <article className={`tariff-row${isOpen ? " is-open" : ""}`} key={tariff.amount}>
              <button
                className="tariff-mark"
                type="button"
                aria-expanded={isOpen}
                aria-controls={detailsId}
                aria-label={`${isOpen ? "Скрыть" : "Показать"} расчёт тарифа ${tariff.capacity}, ${tariff.weight}`}
                onClick={() => setOpenTariff(isOpen ? null : index)}
              >
                <span aria-hidden="true">+</span>
              </button>
              <h3>{tariff.capacity} · {tariff.weight}</h3>
              <div className="tariff-price">
                <strong>{price(tariff.amount)}</strong>
                <span>без НДС</span>
              </div>
              <div className="tariff-calculation" id={detailsId} aria-hidden={!isOpen}>
                <p>Расчёт за 1 день работы · до 70 км пробега</p>
                <dl>
                  <div><dt>Ставка</dt><dd>{price(tariff.amount)}</dd></div>
                  <div><dt>НДС 5%</dt><dd>{price(vat)}</dd></div>
                  <div className="tariff-calculation-total"><dt>Итого с НДС</dt><dd>{price(total)}</dd></div>
                </dl>
                <small>Условия перевозки за пределами включённого пробега согласуем до рейса.</small>
              </div>
            </article>
          })}
          <p className="tariffs-note"><span aria-hidden="true" />НДС 5%</p>
        </div>
      </div>
    </section>
  );
}

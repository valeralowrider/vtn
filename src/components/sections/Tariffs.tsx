import "./tariffs.css";

const tariffs = [
  { capacity: "До 10 м³", weight: "до 1 т", price: "13 482 ₽" },
  { capacity: "До 40 м³", weight: "до 5 т", price: "24 730 ₽" },
  { capacity: "До 82 м³", weight: "до 20 т", price: "44 733 ₽" },
];

export function Tariffs() {
  return (
    <section className="tariffs" id="tarify" aria-labelledby="tariffs-heading">
      <div className="tariffs-inner">
        <div className="tariffs-intro">
          <p className="eyebrow">06 / ТАРИФЫ</p>
          <h2 id="tariffs-heading">Стоимость работы транспорта</h2>
          <p>Ставка за 1 день работы · пробег до 70 км</p>
        </div>
        <div className="tariffs-list" aria-label="Тарифы на перевозку">
          {tariffs.map((tariff) => (
            <article className="tariff-row" key={tariff.price}>
              <span className="tariff-mark" aria-hidden="true">+</span>
              <h3>{tariff.capacity} · {tariff.weight}</h3>
              <div className="tariff-price">
                <strong>{tariff.price}</strong>
                <span>без НДС</span>
              </div>
            </article>
          ))}
          <p className="tariffs-note"><span aria-hidden="true" />Стоимость с НДС 5%</p>
        </div>
      </div>
    </section>
  );
}

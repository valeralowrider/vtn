import Link from "next/link";
import "./home-extras.css";

const additionalServices = [
  ["Автомобильные перевозки", "Доставим таможенные и обычные грузы по всей России: на таможенный пост, с поста и на междугородних рейсах."],
  ["Международные перевозки и экспедирование", "Организуем полный цикл доставки от дверей отправителя до дверей получателя, включая таможенное оформление."],
  ["Погрузочно-разгрузочные работы", "Выполняем погрузку и выгрузку автокранами подходящей грузоподъёмности."],
  ["Проконсультируем и поможем", "Подключим таможенного или авиаброкера, разберём сложные вопросы с таможней и подскажем порядок действий."],
] as const;

const reasons = [
  ["Компетентность", "С 2014 года в таможенной логистике. Собственные брокеры и опыт перевозки сложных технических, опасных и режимных грузов."],
  ["Надёжность", "Статус таможенного перевозчика в реестре ФТС, аккредитация ГК «Ростех» и заказчики из авиационной и оборонной отраслей."],
  ["Скорость", "Быстро забираем груз из аэропорта и с границы: не нужно оформлять отдельное обеспечение уплаты таможенных платежей."],
] as const;

export function AdditionalServices() {
  return (
    <section className="home-extras home-extras--services" aria-labelledby="additional-services-heading">
      <div className="home-extras__inner">
        <div className="home-extras__heading">
          <p className="eyebrow eyebrow--dark">ДОПОЛНИТЕЛЬНО</p>
          <h2 id="additional-services-heading">А также…</h2>
          <p>Кроме таможенных перевозок и оформления берём на себя и другие задачи по доставке груза.</p>
        </div>
        <ol className="home-extras__list">
          {additionalServices.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
        </ol>
      </div>
    </section>
  );
}

export function ReasonsToChoose() {
  return (
    <section className="home-extras home-extras--reasons" aria-labelledby="reasons-heading">
      <div className="home-extras__inner">
        <div className="home-extras__heading">
          <p className="eyebrow">ПОЧЕМУ ВТН ТРАНС</p>
          <h2 id="reasons-heading">Главные причины, почему выбирают нас</h2>
        </div>
        <ol className="home-extras__list">
          {reasons.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
        </ol>
        <Link className="home-extras__link" href="/kontakty#request">Обсудить перевозку <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}

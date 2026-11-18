import Image from "next/image";
import type { CSSProperties } from "react";
import "./clients.css";

const clients = [
  { name: "ПАО «ОАК»", logo: "/images/clients/uac.webp", description: "Объединённая авиастроительная корпорация" },
  { name: "АО «Концерн ВКО «Алмаз-Антей»", logo: "/images/clients/almaz-antey-mark.webp", description: "Концерн воздушно-космической обороны" },
  { name: "АО «РТ-Логистика»", logo: "/images/clients/rt-logistics.webp", description: "Логистическая компания" },
];

export function Clients() {
  return (
    <section className="clients" aria-labelledby="clients-heading">
      <div className="clients-inner">
        <div className="clients-heading">
          <p className="eyebrow eyebrow--dark">06 / НАМ ДОВЕРЯЮТ</p>
          <h2 id="clients-heading">Компании, с которыми работаем</h2>
          <p>Опыт таможенных и специальных перевозок для авиационной, оборонной и транспортной отраслей.</p>
        </div>
        <ul className="clients-grid">
          {clients.map((client, index) => (
            <li className="client-card" style={{ "--client-index": index } as CSSProperties} key={client.name}>
              <div className="client-logo"><Image src={client.logo} alt={`Логотип ${client.name}`} width={520} height={300} sizes="(max-width: 700px) 76vw, 28vw" /></div>
              <div className="client-card-copy"><h3>{client.name}</h3><p>{client.description}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

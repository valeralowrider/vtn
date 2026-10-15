"use client";

import { useState } from "react";
import "./contacts-map.css";

const address = "Москва, пер. Большой Саввинский, д. 2–4–6, стр. 4";
const mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=37.5631%2C55.7336%2C37.5781%2C55.7390&layer=mapnik&marker=55.7362523%2C37.5705814";
const yandexUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(address)}`;

export function ContactsMap() {
  const [loaded, setLoaded] = useState(false);
  return <section className="contacts-map" aria-labelledby="map-heading"><div className="contacts-map__intro"><p className="contacts-label">03 / КАК НАЙТИ НАС</p><h2 id="map-heading">Карта проезда</h2><p>{address}</p><a href={yandexUrl} target="_blank" rel="noopener noreferrer">Открыть в Яндекс Картах <span aria-hidden>↗</span></a></div><div className="contacts-map__frame">{loaded ? <iframe title={`Карта: ${address}`} src={mapUrl} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /> : <div className="contacts-map__placeholder"><span>МОСКВА · ХАМОВНИКИ</span><b aria-hidden>⌖</b><p>Интерактивная карта загрузится после нажатия.</p><button type="button" onClick={() => setLoaded(true)}>Показать карту <i aria-hidden>↗</i></button></div>}</div></section>;
}

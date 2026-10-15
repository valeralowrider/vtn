"use client";

import { useState } from "react";
import "./contacts-map.css";

const address = "Москва, пер. Большой Саввинский, д. 2–4–6, стр. 4";
const mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=37.5631%2C55.7336%2C37.5781%2C55.7390&layer=mapnik&marker=55.7362523%2C37.5705814";

export function ContactsMap() {
  const [interactive, setInteractive] = useState(false);
  return <section className="contacts-map" id="map" aria-label={`Карта: ${address}`} onMouseLeave={() => setInteractive(false)}><iframe title={`Карта: ${address}`} src={mapUrl} loading="eager" referrerPolicy="strict-origin-when-cross-origin" className={interactive ? "contacts-map__iframe--interactive" : undefined} /><button className="contacts-map__activation" type="button" aria-label="Включить управление картой" onClick={() => setInteractive(true)} /></section>;
}

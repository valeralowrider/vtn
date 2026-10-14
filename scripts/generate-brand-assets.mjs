import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "public", "brand");
await mkdir(output, { recursive: true });

// Hand-drawn Cyrillic ВТН: paths, never dependent on installed fonts.
const letters = '<path d="M9 22h7a5 5 0 0 1 0 10H9m7 0a5 5 0 0 1 0 10H9V22M27 22h13m-6.5 0v20M46 22v20m12-20v20M46 32h12" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>';
function icon({ light = false, maskable = false, monochrome = false } = {}) {
  const background = light ? "#eaf4ff" : "#06182f";
  const foreground = light ? "#0758bc" : "#ffffff";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
    <title>ВТН ТРАНС</title>
    ${monochrome ? "" : `<rect width="64" height="64" rx="${maskable ? 0 : 12}" fill="${background}"/>`}
    <g color="${monochrome ? "#000000" : foreground}" transform="${maskable ? "translate(10 10) scale(.68)" : "translate(-1 0)"}">${letters}</g>
    ${monochrome ? "" : `<path d="M${maskable ? 20 : 11} 49h${maskable ? 24 : 42}" stroke="#0875df" stroke-width="3"/>`}
  </svg>`;
}
const normal = Buffer.from(icon());
const light = Buffer.from(icon({ light: true }));
const mask = Buffer.from(icon({ maskable: true }));
await writeFile(path.join(output, "icon-dark.svg"), normal);
await writeFile(path.join(output, "icon-light.svg"), light);
await writeFile(path.join(output, "safari-pinned-tab.svg"), icon({ monochrome: true }));
for (const size of [16, 32, 48, 96, 180, 192, 512]) {
  await sharp(normal).resize(size, size).png().toFile(path.join(output, `icon-${size}.png`));
}
for (const size of [192, 512]) {
  await sharp(mask).resize(size, size).png().toFile(path.join(output, `maskable-${size}.png`));
}
await sharp(normal).resize(150, 150).png().toFile(path.join(output, "windows-tile.png"));

// Multi-resolution ICO. PNG-compressed frames are supported by modern ICO consumers.
const sizes = [16, 32, 48];
const frames = await Promise.all(sizes.map((size) => sharp(normal).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
frames.forEach((frame, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(frame.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});
await writeFile(path.join(root, "src/app/favicon.ico"), Buffer.concat([header, ...frames]));

// A graphic social card, no stock image or fictitious operational data.
const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><linearGradient id="bg"><stop stop-color="#06182f"/><stop offset="1" stop-color="#0b355d"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g fill="none" stroke="#2486ca" opacity=".25" stroke-width="2">
    <path d="M810 0v630M930 0v630M1050 0v630M1170 0v630M750 110h450M750 230h450M750 350h450M750 470h450M750 590h450"/>
    <path d="M800 440V170h270v270Z" stroke-width="3"/>
  </g>
  <path d="M810 410h220l80-80" stroke="#f5ac35" stroke-width="5" fill="none"/>
  <circle cx="1110" cy="330" r="9" fill="#f5ac35"/>
  <g transform="translate(60 54) scale(1.5)" color="#ffffff">${letters}</g>
  <text x="176" y="108" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#ffffff">ВТН ТРАНС</text>
  <text x="72" y="246" font-family="Arial, sans-serif" font-size="62" font-weight="700" fill="#ffffff">Таможенные</text>
  <text x="72" y="322" font-family="Arial, sans-serif" font-size="62" font-weight="700" fill="#ffffff">грузоперевозки</text>
  <text x="76" y="390" font-family="Arial, sans-serif" font-size="26" fill="#bed5e8">Под контролем на всём маршруте</text>
  <path d="M76 488h620" stroke="#5480a4" stroke-opacity=".5"/>
  <text x="76" y="540" font-family="Arial, sans-serif" font-size="21" fill="#a9cbe7">ПЕРЕВОЗКА · ОФОРМЛЕНИЕ · СОПРОВОЖДЕНИЕ</text>
</svg>`;
await writeFile(path.join(output, "social-card.svg"), card);
await sharp(Buffer.from(card)).png().toFile(path.join(output, "social-card.png"));
await sharp(Buffer.from(card)).webp({ quality: 90 }).toFile(path.join(output, "social-card.webp"));

// Review sheet includes true small-size favicons and maskable circular crop.
const preview = sharp({ create: { width: 1000, height: 480, channels: 4, background: "#dfe8f0" } });
const circle = Buffer.from('<svg width="160" height="160"><circle cx="80" cy="80" r="80" fill="white"/></svg>');
const circular = await sharp(mask).resize(160,160).composite([{ input: circle, blend: "dest-in" }]).png().toBuffer();
const labels = Buffer.from('<svg width="1000" height="480"><g font-family="Arial" font-size="18" fill="#102542"><text x="32" y="35">LIGHT / DARK / APPLE / ANDROID MASKABLE</text><text x="32" y="295">FAVICON 16 / 32 / 48 / 96</text><text x="560" y="295">SOCIAL PREVIEW · 1200 × 630</text></g></svg>');
await preview.composite([
  { input: labels, left: 0, top: 0 },
  { input: await sharp(light).resize(160,160).png().toBuffer(), left: 32, top: 65 },
  { input: await sharp(normal).resize(160,160).png().toBuffer(), left: 240, top: 65 },
  { input: await sharp(normal).resize(180,180).png().toBuffer(), left: 448, top: 55 },
  { input: circular, left: 690, top: 65 },
  ...await Promise.all([16,32,48,96].map(async (size,index) => ({input:await sharp(normal).resize(size,size).png().toBuffer(),left:32+index*115,top:325}))),
  { input: await sharp(Buffer.from(card)).resize(400,210).png().toBuffer(), left: 560, top: 260 },
]).png().toFile(path.join(output, "asset-preview.png"));
console.log("Generated favicon, theme icons, Apple/Android icons, maskable icons and social preview.");

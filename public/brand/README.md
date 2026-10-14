# ВТН ТРАНС: иконки и превью

Генератор: `npm run assets:brand` (scripts/generate-brand-assets.mjs).
Буквы ВТН отрисованы в SVG-контурах, не требуют установленных шрифтов.

| Использование | Файл |
| --- | --- |
| Вкладки, запасной вариант | /favicon.ico — 16, 32, 48 px |
| Светлая / тёмная тема браузера | icon-light.svg / icon-dark.svg |
| Растровые варианты | icon-16 / 32 / 48 / 96 / 180 / 192 / 512.png |
| iOS, iPadOS, закладки | icon-180.png |
| Android, ярлык сайта | icon-192.png, icon-512.png |
| Android, круглая/произвольная обрезка | maskable-192.png, maskable-512.png |
| Safari, закреплённая вкладка | safari-pinned-tab.svg |
| Плитка Windows | windows-tile.png + /browserconfig.xml |
| Open Graph и Twitter/X | social-card.png, 1200×630 |
| WebP-версия / векторный источник карточки | social-card.webp / social-card.svg |
| Обзор комплекта | asset-preview.png |

PNG/ICO используются для совместимости служебных иконок и социальных карточек.
Фотографии сайта остаются WebP. Manifest описывает ярлык и внешний вид запуска;
офлайн-режим не реализован. Фактическая установка на iOS/Android и кеширование
соцсетями проверяются отдельно на опубликованном домене.

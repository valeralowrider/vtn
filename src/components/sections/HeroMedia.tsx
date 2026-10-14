"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const manuallyPaused = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 850px)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    let visible = true;
    const sync = () => {
      const saveData = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "");
      if (preference.matches || saveData || document.hidden || !visible || manuallyPaused.current) {
        video.pause();
        return;
      }
      if (!video.getAttribute("src")) video.src = "/video/hero.mp4";
      void video.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(video);
    preference.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      video.pause();
    };
  }, []);

  return <>
    <Image className="hero-image" src="/images/hero-poster.webp" alt="Синий контейнеровоз ВТН ТРАНС на ночной дороге" fill priority sizes="100vw" />
    <video ref={videoRef} className={`hero-video${playing ? " is-playing" : ""}`} muted loop playsInline preload="none" aria-hidden="true" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    <button className="hero-motion-control" type="button" aria-label={playing ? "Остановить фоновое видео" : "Включить фоновое видео"} onClick={() => {
      const video = videoRef.current;
      if (!video) return;
      manuallyPaused.current = playing;
      if (playing) video.pause();
      else { if (!video.src) video.src = "/video/hero.mp4"; void video.play().catch(() => {}); }
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">{playing ? <path d="M8 5v14M16 5v14" /> : <path d="m8 5 11 7-11 7Z" />}</svg>
      <span>{playing ? "Пауза" : "Смотреть"}</span>
    </button>
  </>;
}

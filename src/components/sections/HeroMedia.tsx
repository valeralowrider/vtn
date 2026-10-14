"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 850px)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    let visible = true;
    const sync = () => {
      const saveData = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "");
      if (preference.matches || saveData || document.hidden || !visible) {
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
  </>;
}

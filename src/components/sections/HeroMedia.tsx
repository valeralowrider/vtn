"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let visible = true;
    const sync = () => {
      if (document.hidden || !visible) {
        video.pause();
        return;
      }
      void video.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(video);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      video.pause();
    };
  }, []);

  return <>
    <Image className="hero-image" src="/images/hero-poster.webp" alt="" fill priority sizes="100vw" />
    <video ref={videoRef} className={`hero-video${playing ? " is-playing" : ""}`} src="/video/hero.mp4" autoPlay muted loop playsInline preload="auto" aria-hidden="true" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
  </>;
}

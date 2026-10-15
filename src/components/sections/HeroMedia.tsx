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
    let retryTimer: ReturnType<typeof setTimeout> | undefined;
    const sync = () => {
      if (retryTimer) clearTimeout(retryTimer);
      if (document.hidden || !visible) {
        video.pause();
        return;
      }
      void video.play().catch(() => {});
      // Safari can suspend an inline video while the browser is backgrounded.
      // A second attempt after the page becomes active resumes it reliably.
      retryTimer = setTimeout(() => {
        if (!document.hidden && visible && video.paused) void video.play().catch(() => {});
      }, 180);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(video);
    document.addEventListener("visibilitychange", sync);
    window.addEventListener("focus", sync);
    window.addEventListener("pageshow", sync);
    sync();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("focus", sync);
      window.removeEventListener("pageshow", sync);
      if (retryTimer) clearTimeout(retryTimer);
      video.pause();
    };
  }, []);

  return <>
    <Image className="hero-image" src="/images/hero-poster.webp" alt="" fill priority sizes="100vw" />
    <video ref={videoRef} className={`hero-video${playing ? " is-playing" : ""}`} src="/video/hero.mp4" autoPlay muted loop playsInline preload="auto" aria-hidden="true" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
  </>;
}

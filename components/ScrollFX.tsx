"use client";
import { useEffect } from "react";

// Fallback reveal for browsers without CSS scroll-driven animations
const SEL = ".panel-copy,.photos,.panel-art,.steps li,.faq,.facts,.values,.form,.intro h2,.section h2,.about h2,.faq-wrap h2,.contact h2,.wa h2";
export default function ScrollFX() {
  useEffect(() => {
    if (CSS.supports("animation-timeline: view()") || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(SEL));
    els.forEach((e) => e.classList.add("fx"));
    const io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("fx-in"); io.unobserve(x.target); } }), { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return null;
}

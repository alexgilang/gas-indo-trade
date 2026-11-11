"use client";
export default function WayCard({ href, eyebrow, title, line, cta, tone }: { href: string; eyebrow: string; title: string; line: string; cta: string; tone: string }) {
  return (
    <a className={`way ${tone}`} href={href}
      onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`); e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`); }}>
      <span className="way-eye">{eyebrow}</span>
      <h3>{title}</h3>
      <p>{line}</p>
      <span className="way-cta">{cta}</span>
    </a>
  );
}

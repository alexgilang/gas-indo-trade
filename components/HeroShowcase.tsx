"use client";
import { useEffect, useState } from "react";
import Scatter from "./Shapes";

type Item = { slug: string; name: string; tag: string; bg: string; fg: string; shape: string; det: string; kinds: ("bean" | "clove" | "finger" | "ginger" | "grain" | "stem")[]; n: number; sp: number; photo?: string | null; order: string };

export default function HeroShowcase({ items }: { items: Item[] }) {
  const [i, setI] = useState(0);
  const [hold, setHold] = useState(false);
  useEffect(() => {
    if (hold || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [hold, items.length]);
  const it = items[i];
  return (
    <div className="show" style={{ "--c": it.bg, "--f": it.fg } as React.CSSProperties}
      onPointerEnter={() => setHold(true)} onPointerLeave={(e) => { setHold(false); e.currentTarget.style.setProperty("--rx", "0deg"); e.currentTarget.style.setProperty("--ry", "0deg"); }}
      onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5; e.currentTarget.style.setProperty("--rx", `${(-y * 12).toFixed(1)}deg`); e.currentTarget.style.setProperty("--ry", `${(x * 12).toFixed(1)}deg`); }}>
      <svg className="badge" viewBox="0 0 200 200" aria-hidden="true"><defs><path id="ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs><circle cx="100" cy="100" r="98" fill="#F4B223" /><text><textPath href="#ring">Direct from Indonesia · Export supply · </textPath></text><text x="100" y="118" textAnchor="middle" className="mark">GAS</text></svg>
      <div className="disc">
        <div className={"tilt" + (it.photo ? " ph" : "")} key={it.slug}>
          {it.photo ? <img className="hphoto" src={it.photo} alt={it.name} /> : <Scatter className="spin" label={`${it.name} illustration`} kinds={it.kinds} fill={it.shape} detail={it.det} count={it.n} spread={it.sp} />}
        </div>
      </div>
      <div className="cap" aria-live="polite">
        <strong>{it.name}</strong>
        <p>{it.tag}</p>
        <a className="btn gold sm" href={it.order}>Order Now</a>
      </div>
      <div className="pick" role="group" aria-label="Choose a commodity">
        {items.map((x, n) => <button key={x.slug} aria-pressed={n === i} onClick={() => setI(n)}>{x.name}</button>)}
      </div>
    </div>
  );
}

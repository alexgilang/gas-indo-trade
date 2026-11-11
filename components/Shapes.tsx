type Kind = "bean" | "clove" | "finger" | "ginger" | "grain" | "stem";
const KF: Record<Kind, string> = { bean: "#8a5a3c", clove: "#c2492f", finger: "#f4b223", ginger: "#e6c48a", grain: "#f4b223", stem: "#b98a52" };
const rnd = (i: number) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };

function One({ k, f, d }: { k: Kind; f: string; d: string }) {
  switch (k) {
    case "bean": return <g><ellipse rx="15" ry="22" fill={f} /><path d="M0-21C-9-8 9 8 0 21" fill="none" stroke={d} strokeWidth="3" strokeLinecap="round" /></g>;
    case "clove": return <g><path d="M-4-12H4L1.5 26h-3z" fill={f} /><circle cy="-15" r="7" fill={f} /><path d="M-9-13l-6-3M9-13l6-3M0-22v-6" stroke={f} strokeWidth="3" strokeLinecap="round" /><circle cy="-15" r="3" fill={d} /></g>;
    case "finger": return <g><rect x="-10" y="-30" width="20" height="60" rx="10" fill={f} /><path d="M-10-12h20M-10 2h20M-10 16h20" stroke={d} strokeWidth="2" opacity=".45" /></g>;
    case "ginger": return <g><path d="M-26 6C-30-8-14-12-10-8-8-20 6-24 10-12 24-18 30-2 22 6 26 16 8 20 2 14-8 22-22 20-26 6z" fill={f} /><path d="M-12 4h22" stroke={d} strokeWidth="2" opacity=".45" /></g>;
    case "stem": return <g><rect x="-3" y="-28" width="6" height="56" rx="3" fill={f} /><circle cy="-27" r="5" fill={d} opacity=".6" /><path d="M0 6l12-10" stroke={f} strokeWidth="4" strokeLinecap="round" /></g>;
    default: return <circle r="5" fill={f} />;
  }
}

export default function Scatter({ kinds, fill, detail = "#0A2554", count = 34, spread = 46, label, className }:
  { kinds: Kind[]; fill?: string; detail?: string; count?: number; spread?: number; label: string; className?: string }) {
  return (
    <svg viewBox="-330 -330 660 660" role="img" aria-label={label} className={className}>
      {Array.from({ length: count }, (_, i) => {
        const k = kinds[i % kinds.length];
        const a = (i + 1) * 2.39996, r = Math.sqrt(i + 1) * spread;
        const s = k === "grain" ? 0.5 + rnd(i) * 1.3 : 0.55 + (i / count) * 0.9;
        const rot = (a * 180) / Math.PI + rnd(i + 9) * 50;
        return <g key={i} transform={`translate(${(Math.cos(a) * r).toFixed(1)} ${(Math.sin(a) * r).toFixed(1)}) rotate(${rot.toFixed(0)}) scale(${s.toFixed(2)})`}><One k={k} f={fill ?? KF[k]} d={detail} /></g>;
      })}
    </svg>
  );
}

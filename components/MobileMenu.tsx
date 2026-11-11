"use client";
import { useState } from "react";
export default function MobileMenu({ links }: { links: [string, string][] }) {
  const [o, setO] = useState(false);
  return (
    <>
      <button className="burger" aria-expanded={o} aria-label="Menu" onClick={() => setO(!o)}><span /><span /></button>
      <div className={"drawer" + (o ? " open" : "")} onClick={() => setO(false)}>
        {links.map(([h, l]) => <a key={h} href={h}>{l}</a>)}
      </div>
    </>
  );
}

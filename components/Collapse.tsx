"use client";
import { useId, useState } from "react";

export default function Collapse({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={`collapse ${className}${open ? " open" : ""}`}>
      <button type="button" className="c-btn" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
        <span>{label}</span><i aria-hidden="true" />
      </button>
      <div id={id} className="c-body"><div className="c-in" inert={!open}>{children}</div></div>
    </div>
  );
}

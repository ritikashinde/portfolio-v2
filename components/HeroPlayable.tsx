"use client";

import { useState } from "react";
import DissolveCanvas from "./DissolveCanvas";
import GameModal from "./GameModal";

export default function HeroPlayable() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer outline-none"
        aria-label="Open the robot game"
      >
        <DissolveCanvas onReady={() => setReady(true)} />
      </button>

      <div
        className={`font-mono text-[10px] tracking-[0.12em] text-muted transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        · press to play ·
      </div>

      {open && (
        <GameModal onClose={() => setOpen(false)} />
      )}
    </div>
  );
}
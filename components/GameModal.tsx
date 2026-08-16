"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import RobotGame from "./RobotThing";

export default function GameModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#16130F]/[0.88] p-5"
      onClick={onClose}
    >
      <div
        className="relative w-[650px] max-w-full"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 border-0 border-b border-[#EDE9E0]/25 bg-transparent pb-[2px] font-mono text-[11px] tracking-[0.05em] text-[#EDE9E0] hover:border-[#B8FF3C] hover:text-[#B8FF3C] transition-colors"
        >
          close ×
        </button>

        <RobotGame />
      </div>
    </div>,
    document.body
  );
}
"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["home", "about", "journey", "work", "beyond", "creative"];

export default function TopBar() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SECTIONS.indexOf(entry.target.id);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: 0.5 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
  <div className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-[6vw] py-6 font-mono text-[11px] tracking-[0.08em] text-white mix-blend-difference">
    <div>RITIKA SHINDE</div>

    <div className="flex items-center">
  {/* SYMBOLS */}
  <div className="flex items-center gap-4 mr-8">
    {/* Mail */}
    <a
      href="mailto:ritikashinde98@gmail.com"
      aria-label="Email"
      className="text-white hover:text-lime transition-colors"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m3 6 9 7 9-7" />
      </svg>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/ritikashinde"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="text-white hover:text-lime transition-colors"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.25c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
      />
    </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/ritika-shinde-1b7a24259/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-white hover:text-lime transition-colors"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2.75 9.5h4.46V21H2.75V9.5ZM9.5 9.5h4.28v1.57h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V21h-4.46v-4.78c0-1.14-.02-2.61-1.59-2.61-1.59 0-1.83 1.24-1.83 2.53V21H9.5V9.5Z"
        />
      </svg>
    </a>

    {/* Medium */}
    <a
      href="https://medium.com/@ritikashinde98"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Medium"
      className="text-white hover:text-lime transition-colors"
    >
      <svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M2.01 6.38c.04-.4-.12-.8-.43-1.08L.2 3.93V3.5h7.2l5.56 12.2L17.84 3.5H24v.43l-1.18 1.13c-.1.08-.15.24-.13.38v13.12c-.02.14.03.3.13.38L24 20.07v.43h-6.73v-.43l1.22-1.16c.12-.12.12-.15.12-.38V8.04l-5.52 12.42h-.75L5.91 8.04v8.83c-.05.3.05.6.26.81l1.59 1.93v.43H2.01v-.43l1.59-1.93c.21-.21.31-.51.26-.81V6.38Z" />
</svg>
    </a>
  </div>

  {/* EXISTING COUNTER — DON'T CHANGE */}
  <div className="flex gap-1.5">
    <span className="text-rust font-heavy">
      {String(active).padStart(2, "0")}
    </span>
    <span>／</span>
    <span>{String(SECTIONS.length - 1).padStart(2, "0")}</span>
  </div>
</div>
  </div>
);
}

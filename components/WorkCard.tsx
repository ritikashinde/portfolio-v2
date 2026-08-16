"use client";

import { useEffect, useRef, useState } from "react";

export default function WorkCard({
  num,
  cryptic,
  realName,
  description,
  image,
  stack,
  href,
}: {
  num: string;
  cryptic: string;
  realName: string;
  description?: string;
  image?: string;
  stack: string;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setResolved(true);
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative py-10 md:py-12 border-t border-line last:border-b"
    >
      {/* Noise / dissolve effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-[1300ms]"
        style={{
          opacity: resolved ? 0 : 1,
          backgroundImage:
            "repeating-conic-gradient(from 0deg, rgba(22,19,15,0.05) 0deg 2deg, transparent 2deg 6deg)",
        }}
      />

      {/* Project heading */}
      <div className="relative grid grid-cols-1 md:grid-cols-[80px_1fr_220px] gap-6 md:gap-8 items-start">
        <div className="font-heavy text-[13px] text-muted">
          {num}
        </div>

        <div>
          <div className="font-display italic text-2xl md:text-[32px] leading-snug">
            {cryptic}
          </div>

          <span className="block mt-2.5 font-mono text-[11px] uppercase tracking-[0.06em] text-rust">
            {realName}
          </span>
        </div>

        <div className="font-mono text-[11px] text-muted md:text-right">
          {stack}
          <br />

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-foreground border-b border-line hover:border-rust hover:text-rust transition-colors"
          >
            repo →
          </a>
        </div>
      </div>

      {/* Project image + description */}
      <div className="relative md:ml-[104px] md:mr-[244px] mt-8">
        {image && (
  <div
    className={`overflow-hidden border border-line ${
  num === "001"
    ? "w-full"
    : num === "003"
      ? "w-full md:w-[55%]"
      : "w-full md:w-[72%]"
}`}
  >
    <img
      src={image}
      alt={realName}
      className="block w-full h-auto"
    />
  </div>
)}

        {description && (
  <p className="font-sans text-sm md:text-[16px] leading-relaxed text-muted max-w-none mt-6">
    {description}
          </p>
        )}
      </div>
    </div>
  );
}
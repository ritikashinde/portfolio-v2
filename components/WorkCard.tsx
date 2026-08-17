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
  creativeTech,
}: {
  num: string;
  cryptic: string;
  realName: string;
  description?: string;
  image?: string;
  stack: string;
  href: string;
  creativeTech?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const imageLeft = Number(num) % 2 === 0;

  return (
    <article
      ref={ref}
      className={`
        relative
        border-t border-line
        last:border-b
        transition-all duration-700 ease-out
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }
      `}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">

        {/* LEFT HALF */}
        {imageLeft && (
          <div
  className={`flex flex-col py-12 md:py-16 md:pr-16 border-b md:border-b-0 md:border-r border-line ${
    creativeTech && !image
      ? "justify-end"
      : "justify-center"
  }`}
>
            {/* NORMAL PROJECT IMAGE */}
            {image && (
              <div className="w-full max-w-[620px] overflow-hidden rounded-[10px] border border-line">
                <img
                  src={image}
                  alt={realName}
                  className="
                    block
                    w-full
                    h-auto
                    transition-transform
                    duration-700
                    ease-out
                    hover:scale-[1.015]
                  "
                />
              </div>
            )}

            {/* CREATIVE TECH */}
            {!image && creativeTech && (
              <div className="max-w-[330px]">

                <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-muted">
                  <span className="text-foreground">
                    Not everything I make is ML.
                  </span>{" "}
                  Sometimes I explore what happens when code becomes image,
                  motion, interaction, or atmosphere.
                </p>

                <a
                  href="#creative"
                  className="
                    inline-block
                    mt-5
                    font-mono
                    text-[11px]
                    tracking-[0.08em]
                    text-foreground
                    border-b border-line
                    hover:border-rust
                    hover:text-rust
                    transition-colors
                  "
                >
                  CREATIVE TECH →
                </a>

              </div>
            )}

          </div>
        )}

        {/* INFORMATION */}
        <div
          className={`
            flex
            flex-col
            justify-center
            py-14
            md:py-16
            ${imageLeft ? "md:pl-10" : "md:pr-10"}
          `}
        >
          {/* Number */}
          <div className="font-heavy text-[13px] text-muted mb-8">
            {num}
          </div>

          {/* Main title */}
          <h2 className="font-display italic text-2xl md:text-[34px] leading-[1.15] max-w-[650px]">
            {cryptic}
          </h2>

          {/* Project name */}
          <span className="block mt-3 font-mono text-[11px] uppercase tracking-[0.06em] text-rust">
            {realName}
          </span>

          {/* Description */}
          {description && (
            <p className="font-sans text-sm md:text-[16px] leading-relaxed text-muted max-w-[620px] mt-7 line-clamp-3">
              {description}
            </p>
          )}

          {/* Bottom metadata */}
          <div className="mt-8 pt-5 border-t border-line max-w-[620px]">
            <div className="font-mono text-[11px] text-muted">
              {stack}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-3
                font-mono
                text-[11px]
                text-foreground
                border-b border-line
                hover:border-rust
                hover:text-rust
                transition-colors
              "
            >
              repo →
            </a>
          </div>
        </div>

        {/* RIGHT HALF — ODD PROJECTS */}
        {!imageLeft && image && (
          <div className="flex items-center justify-center py-12 md:py-16 md:pl-10 md:order-2 border-t md:border-t-0">
            <div className="w-full max-w-[620px] overflow-hidden rounded-[10px] border border-line">
              <img
                src={image}
                alt={realName}
                className="
                  block
                  w-full
                  h-auto
                  transition-transform
                  duration-700
                  ease-out
                  hover:scale-[1.015]
                "
              />
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
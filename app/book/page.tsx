"use client";

import Link from "next/link";

export default function BookPage() {
  const letters = [
    { char: "W", top: "18%", left: "10%" },
    { char: "S", top: "16%", left: "30%" },
    { char: "e", top: "14%", left: "63%" },
    { char: "M", top: "18%", left: "77%" },
    { char: "h", top: "34%", left: "18%" },
    { char: "a", top: "31%", left: "88%" },
    { char: "e", top: "58%", left: "13%" },
    { char: "n", top: "78%", left: "28%" },
    { char: "e", top: "74%", left: "68%" },
    { char: "n", top: "81%", left: "88%" },
    { char: "h", top: "57%", left: "92%" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/SAR.jpeg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* READABILITY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35" />

      {/* DISPERSED LETTERS */}
      <div className="absolute inset-0 pointer-events-none">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="absolute font-display italic text-white/30 text-2xl md:text-3xl"
            style={{
              top: letter.top,
              left: letter.left,
            }}
          >
            {letter.char}
          </span>
        ))}
      </div>

      {/* TOP BAR */}
      <div className="absolute top-0 left-0 right-0 z-20 px-[6vw] py-8 flex items-center justify-between">

        {/* SAME FONT AS A BOOK IN PROGRESS */}
        <Link
          href="/"
          className="
            font-mono
            text-[11px]
            md:text-[12px]
            tracking-[0.12em]
            text-white
            hover:text-white/70
            transition-colors
          "
        >
          RITIKA SHINDE
        </Link>

        <Link
          href="/"
          className="
            font-mono
            text-[10px]
            tracking-[0.12em]
            text-white/80
            hover:text-white
            transition-colors
          "
        >
          ← BACK
        </Link>
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 text-center">

        <div className="flex flex-col items-center max-w-[900px]">

          {/* ABOVE TITLE */}
          <div className="
            font-mono
            text-[9px]
            md:text-[10px]
            tracking-[0.18em]
            text-white/90
            mb-7
            uppercase
          ">
            A BOOK IN PROGRESS
          </div>

          {/* BOOK TITLE */}
          <h1
            className="
              font-mono
              font-medium
              text-[24px]
              sm:text-[28px]
              md:text-[32px]
              lg:text-[36px]
              leading-[1.15]
              tracking-[0.02em]
              text-white
            "
          >
            When Machines See What We Can&apos;t
          </h1>

          {/* FELLOWSHIP */}
          <div className="mt-10">

            <div className="
              font-mono
              text-[9px]
              md:text-[10px]
              tracking-[0.18em]
              text-white/90
              uppercase
              mb-3
            ">
              INDIAN SCIENCE BOOK FELLOWSHIP
            </div>

            <div className="
              font-mono
              text-[11px]
              md:text-[12px]
              tracking-[0.04em]
              text-white/95
            ">
              Short Grantee · FAST
            </div>

          </div>

          {/* BELOW TITLE */}
          <div className="
            mt-10
            font-mono
            text-[9px]
            md:text-[10px]
            tracking-[0.2em]
            text-white/90
            uppercase
          ">
            CURRENTLY WRITING
          </div>

        </div>
      </div>

    </main>
  );
}
"use client";

import Link from "next/link";

export default function NuviPage() {
  return (
    <main className="min-h-screen bg-[#EDE9E0] text-[#16130F]">

      {/* =====================================================
          TOP BAR
         ===================================================== */}
      <nav className="flex items-center justify-between px-[6vw] py-8">

        <Link
          href="/"
          className="
            font-mono
            text-[11px]
            tracking-[0.08em]
            hover:text-rust
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
            text-muted
            hover:text-foreground
            transition-colors
          "
        >
          ← BACK
        </Link>

      </nav>


      {/* =====================================================
          HERO
         ===================================================== */}
      <section className="px-[6vw] pt-[100px] pb-[150px]">

        <div className="flex items-baseline gap-3 font-mono text-[10px] tracking-[0.1em] mb-10">
          <span className="font-heavy text-rust">
            PET PROJECT
          </span>

          <span className="text-muted">
            CURRENTLY BUILDING
          </span>
        </div>


        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-end">

          {/* LEFT */}
          <div>

            <h1
              className="
                font-display
                italic
                text-[64px]
                sm:text-[80px]
                md:text-[110px]
                leading-[0.85]
                tracking-[-0.04em]
              "
            >
              Nuvi
            </h1>

            <p
              className="
                mt-10
                max-w-[620px]
                text-[18px]
                md:text-[21px]
                leading-[1.55]
                text-muted
              "
            >
              A tiny desktop companion for learning any tech concepts —
              quietly living on your screen while you learn, revise,
              and build.
            </p>

          </div>


          {/* RIGHT — STATUS */}
          <div className="border-l border-line pl-7 pb-2">

            <div className="font-mono text-[9px] tracking-[0.14em] text-rust uppercase mb-4">
              STATUS
            </div>

            <div className="font-display italic text-[24px]">
              In development.
            </div>

            <p className="text-muted text-[13px] leading-relaxed mt-3 max-w-[300px]">
              The first version is being built around one question:
              can a tiny character make learning feel more natural?
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          THE IDEA — BROWN SECTION
         ===================================================== */}
      <section
        className="
          bg-[#7C4A2D]
          text-[#EDE9E0]
          px-[6vw]
          py-[140px]
        "
      >

        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-16">

          {/* LABEL */}
          <div className="font-mono text-[10px] tracking-[0.12em] text-white/60 uppercase">
            01 — THE IDEA
          </div>


          {/* CONTENT */}
          <div>

            <h2
              className="
                font-display
                italic
                text-[40px]
                md:text-[58px]
                leading-[1]
                max-w-[850px]
              "
            >
              Wallpaper + Nuvi + quiet learning.
            </h2>

            <p
              className="
                text-white/65
                text-[16px]
                leading-relaxed
                max-w-[650px]
                mt-8
              "
            >
              Nuvi is designed to stay on the desktop home screen and
              nowhere else. She does not interrupt what you are doing.
              She simply exists there — until you decide to interact.
            </p>

            <p
              className="
                text-white/65
                text-[16px]
                leading-relaxed
                max-w-[650px]
                mt-5
              "
            >
              The idea is simple: turn revision into something that feels
              less like opening another application and more like having
              a small presence around while you learn.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          THE INTERACTION
         ===================================================== */}
      <section className="px-[6vw] py-[140px]">

        <div className="flex items-baseline gap-3 font-mono text-[10px] tracking-[0.1em] mb-12">

          <span className="font-heavy text-rust">
            02
          </span>

          <span className="text-muted uppercase">
            The interaction
          </span>

        </div>


        <div className="grid md:grid-cols-2 gap-8">

          {/* LEARNING CARD */}
          <div className="border border-line p-8 md:p-10">

            <div className="font-mono text-[9px] tracking-[0.12em] text-rust uppercase mb-8">
              TODAY&apos;S CONCEPT
            </div>

            <h3 className="font-display italic text-[32px]">
              Batch Normalization
            </h3>

            <div className="mt-8">

              <button
                className="
                  font-mono
                  text-[10px]
                  tracking-[0.1em]
                  border
                  border-line
                  px-4
                  py-2
                  hover:border-rust
                  hover:text-rust
                  transition-colors
                "
              >
                LEARN →
              </button>

            </div>

          </div>


          {/* QUIZ CARD */}
          <div className="border border-line p-8 md:p-10">

            <div className="font-mono text-[9px] tracking-[0.12em] text-rust uppercase mb-8">
              QUICK REVISION
            </div>

            <h3 className="font-display italic text-[32px]">
              What is precision in machine learning?
            </h3>

            <div className="mt-8">

              <button
                className="
                  font-mono
                  text-[10px]
                  tracking-[0.1em]
                  border
                  border-line
                  px-4
                  py-2
                  hover:border-rust
                  hover:text-rust
                  transition-colors
                "
              >
                REVEAL ANSWER →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          THE RULE
         ===================================================== */}
      <section className="px-[6vw] py-[160px] text-center">

        <div className="font-mono text-[9px] tracking-[0.15em] text-rust uppercase mb-7">
          THE RULE
        </div>

        <h2
          className="
            font-display
            italic
            text-[38px]
            md:text-[60px]
            leading-[1]
            max-w-[900px]
            mx-auto
          "
        >
          If she feels like another app,
          <br />
          something went wrong.
        </h2>

      </section>

     {/* =====================================================
          CONTRIBUTIONS
         ===================================================== */}
      <section className="px-[6vw] pb-[120px] text-center">

        <p className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
          Nuvi is open for contributions.
        </p>

        <a
          href="mailto:ritikashinde98@gmail.com"
          className="
            inline-block
            mt-4
            font-display
            italic
            text-[24px]
            md:text-[28px]
            hover:text-rust
            transition-colors
          "
        >
          Say hi →
        </a>

      </section>

      {/* =====================================================
          FOOTER
         ===================================================== */}
      <footer className="px-[6vw] py-10 border-t border-line flex justify-between">

        <span className="font-mono text-[9px] text-muted tracking-[0.1em]">
          NUVI — 2026
        </span>

        <Link
          href="/"
          className="
            font-mono
            text-[9px]
            tracking-[0.1em]
            hover:text-rust
            transition-colors
          "
        >
          RITIKA SHINDE →
        </Link>

      </footer>

    </main>
  );
}
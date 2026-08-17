"use client";

import Image from "next/image";

const skills = [
  "PyTorch",
  "Computer Vision",
  "Diffusion Models",
  "Agentic AI",
  "Remote Sensing",
  "Robotics",
];

export default function MacBookAbout() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-[6vw] py-[150px] bg-[#E5E0D6]"
    >
      {/* Section number */}
      <div className="font-heavy text-[11px] text-rust tracking-[0.08em] mb-7">
        01
      </div>

      {/* MACBOOK */}
      {/* MACBOOK */}
<div
  className="
    relative
    mx-auto
    w-full
    max-w-[1200px]
    transition-transform
    duration-700
    ease-out
    hover:-translate-y-2
    hover:rotate-[0.25deg]
  "
>
        {/* Display lid */}
        <div
          className="
            relative
            rounded-[22px]
            bg-[#B8B8B6]
            p-[5px]
            shadow-[0_30px_60px_rgba(0,0,0,0.14)]
          "
        >

          {/* Camera / notch */}
          <div className="absolute top-[5px] left-1/2 -translate-x-1/2 z-20">
            <div className="w-[64px] h-[6px] bg-[#111] rounded-b-[7px]" />
          </div>

          {/* SCREEN */}
          <div className="relative overflow-hidden rounded-[18px] bg-[#F1EEE7]">

            {/* macOS-style window/tab bar */}
            <div
              className="
                relative
                h-[38px]
                flex
                items-center
                px-4
                bg-[#D8D8D6]
                border-b
                border-black/[0.08]
              "
            >

              {/* macOS traffic lights */}
              <div className="flex items-center gap-[7px]">
                <span
                  className="w-[11px] h-[11px] rounded-full"
                  style={{ backgroundColor: "#FF5F57" }}
                />

                <span
                  className="w-[11px] h-[11px] rounded-full"
                  style={{ backgroundColor: "#FEBC2E" }}
                />

                <span
                  className="w-[11px] h-[11px] rounded-full"
                  style={{ backgroundColor: "#28C840" }}
                />
              </div>

              {/* Empty / minimal center area.
                  No name here — avoids repeating the hero identity. */}
            </div>

            {/* =====================================================
                ORIGINAL ABOUT CONTENT — KEEPING THIS INTACT
               ===================================================== */}

            <div className="px-[6vw] py-[70px]">
              <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">

                {/* LEFT — ORIGINAL TEXT */}
                <div>
                  <div
                    className="
                      font-display
                      italic
                      text-2xl
                      md:text-4xl
                      leading-[1.3]
                      max-w-[480px]
                    "
                  >
                    I spend my days learning and training neural networks.
                    Sometimes, the fine-tuning happens on a manuscript.
                  </div>
                </div>

                {/* RIGHT — ORIGINAL INFORMATION */}
                <div>

                  {/* Information table */}
                  <div className="border-l border-line pl-7">
                    {[
                      [
                        "Field",
                        "Machine Learning / Computer Vision / Generative AI",
                      ],
                      [
                        "Focus",
                        "Diffusion Models, Remote Sensing, Agentic AI",
                      ],
                      [
                        "Trained in",
                        "Automation & Robotics",
                      ],
                      [
                        "Also does",
                        "Writing, generative visuals",
                      ],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="
                          flex
                          justify-between
                          gap-5
                          py-2.5
                          border-b
                          border-line
                          font-mono
                          text-xs
                          text-muted
                        "
                      >
                        <span className="text-foreground">
                          {label}
                        </span>

                        <span>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          font-mono
                          text-[10.5px]
                          px-2.5
                          py-1.5
                          border
                          border-line
                          text-muted
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Photo */}
                  <div className="hidden md:block mt-10">
                    <Image
                      src="/ritikas.jpeg"
                      alt="Ritika Shinde"
                      width={220}
                      height={280}
                      className="
  grayscale-[30%]
  contrast-[1.05]
  object-cover
  rounded-[5px]
"
                    />
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            MACBOOK BASE
           ===================================================== */}

        <div className="relative mx-auto w-[92%]">

          {/* Hinge */}
          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              -top-[1px]
              w-[190px]
              h-[7px]
              bg-[#A9A9A7]
              rounded-b-[5px]
            "
          />

          {/* Aluminum base */}
          <div
            className="
              h-[18px]
              bg-gradient-to-b
from-[#D2D2D0]
to-[#A9A9A7]
              rounded-b-[7px]
              shadow-[0_10px_18px_rgba(0,0,0,0.12)]
            "
          />

          {/* Front lip / trackpad hint */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              w-[24%]
              h-[5px]
              bg-[#BEBEBC]
              rounded-t-[4px]
            "
          />
        </div>

        {/* Ground shadow */}
        <div
          className="
            mx-auto
            w-[70%]
            h-[25px]
            bg-black/[0.08]
            blur-2xl
            rounded-full
          "
        />

      </div>
    </section>
  );
}
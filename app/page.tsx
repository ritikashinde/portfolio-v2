import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import TopBar from "@/components/TopBar";
import WorkCard from "@/components/WorkCard";
import DissolveCanvas from "@/components/DissolveCanvas";
import HeroPlayable from "@/components/HeroPlayable";
import MacBookAbout from "@/components/MacBookAbout";



export default function Home() {
  const skills = [
    "PyTorch",
    "Computer Vision",
    "Diffusion Models",
    "Agentic AI",
    "Remote Sensing",
    "Robotics",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <TopBar />

      {/* HERO */}
<section
  id="home"
  className="relative min-h-screen flex flex-col justify-center px-[6vw] overflow-hidden"
>
  {/* TOPOGRAPHIC BACKGROUND */}
<div
  className="
    absolute
    inset-0
    pointer-events-none
    opacity-[0.28]
    bg-[url('/topography.svg')]
    bg-repeat
    bg-center
    bg-cover
  "
/>

  {/* CONTENT */}
  <div className="relative z-10">

    <div className="font-display italic font-normal text-[30px] sm:text-[42px] md:text-[56px] lg:text-[64px] leading-[1.12] max-w-[900px]">
      The eye that isn&apos;t yours{" "}
      <span className="text-rust">still sees</span> —
      it just needs the noise cleared first.
    </div>

    <div className="mt-14 flex items-baseline gap-4">
      <div className="font-heavy text-sm tracking-[0.05em]">
        RITIKA SHINDE
      </div>

      <div className="font-mono text-[11px] text-muted">
        — Machine Learning, Data, Creative Tech
      </div>
    </div>

  </div>

  {/* PLAYABLE */}
  <div className="hidden lg:block absolute right-[6vw] top-1/2 -translate-y-1/2 opacity-90 z-10">
    <HeroPlayable />
  </div>

  {/* KEEP GOING */}
  <div className="absolute bottom-10 left-[6vw] font-mono text-[10px] text-muted tracking-[0.1em] z-10">
    ↓ keep going
  </div>
</section>

      {/* MARQUEE */}
      <div className="border-t border-b border-line overflow-hidden whitespace-nowrap py-5">
        <div className="marquee-track inline-block font-heavy text-[20px] sm:text-[28px] md:text-[38px]">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              <span className="mr-10">WHAT THE MACHINE CANNOT SEE</span>
              <span className="mr-10 text-rust">WHAT THE MACHINE CANNOT SEE</span>
              <span className="mr-10">WHAT THE MACHINE CANNOT SEE</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <MacBookAbout />
      {/* JOURNEY */}
<section id="journey" className="px-[6vw] py-[100px]">
  <div className="flex items-baseline gap-3 font-mono text-[11px] tracking-[0.08em] mb-7">
    <span className="font-heavy text-rust">02</span>
    <span className="text-muted uppercase">experience</span>
  </div>

  {/* DURVA AUTOMATION — JAN 2026 → JUL 2026 */}
  <FadeIn>
    <div className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-8 py-9 border-t border-line transition-transform duration-700 ease-out hover:translate-x-1">

      <div className="font-heavy text-[17px] leading-tight">
        <span className="block">JAN</span>
        <span className="block">2026</span>
        <span className="block text-muted text-[12px] my-1">—</span>
        <span className="block">JUL</span>
        <span className="block">2026</span>
      </div>

      <div>
        <div className="font-display italic text-2xl mb-1.5">
          Learned what automation looks like in the real world
        </div>

        <div className="font-mono text-[11px] text-rust mb-2.5">
          AUTOMATION ENGINEER INTERN — DURVA AUTOMATION
        </div>

        <div className="text-muted text-[15px] leading-relaxed max-w-[520px]">
          Worked with food automation machinery and industrial control
          systems, gaining hands-on experience with automation beyond the
          simulation.
        </div>
      </div>
    </div>
  </FadeIn>

  {/* IIT HYDERABAD — JUN 2025 → JAN 2026 */}
  <FadeIn>
    <div className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-8 py-9 border-t border-line transition-transform duration-700 ease-out hover:translate-x-1">

      <div className="font-heavy text-[17px] leading-tight">
        <span className="block">JUN</span>
        <span className="block">2025</span>
        <span className="block text-muted text-[12px] my-1">—</span>
        <span className="block">JAN</span>
        <span className="block">2026</span>
      </div>

      <div>
        <div className="font-display italic text-2xl mb-1.5">
          Taught a model to see through weather
        </div>

        <div className="font-mono text-[11px] text-rust mb-2.5">
          RESEARCH INTERN — IIT HYDERABAD
        </div>

        <div className="text-muted text-[15px] leading-relaxed max-w-[520px]">
          Built diffusion pipelines reconstructing cloud-free optical imagery
          from SAR and optical data. Most of what follows started here.
        </div>
      </div>
    </div>
  </FadeIn>

  {/* EARTH5R — 2024 */}
  <FadeIn>
    <div className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-8 py-9 border-t border-b border-line transition-transform duration-700 ease-out hover:translate-x-1">

      <div className="font-heavy text-[22px]">
        2024
      </div>

      <div>
        <div className="font-display italic text-2xl mb-1.5">
          Wrote about machines, for people
        </div>

        <div className="font-mono text-[11px] text-rust mb-2.5">
          AI/ML CONTENT WRITER — EARTH5R
        </div>

        <div className="text-muted text-[15px] leading-relaxed max-w-[520px]">
          Translated AI, ML, and environmental research into language that
          didn&apos;t need a PhD to land.
        </div>
      </div>
    </div>
  </FadeIn>
</section>

{/* PET PROJECTS */}
<section id="pet-projects" className="px-[6vw] py-[100px]">
  <div className="flex items-baseline gap-3 font-mono text-[11px] tracking-[0.08em] mb-7">
    <span className="font-heavy text-rust">03</span>
    <span className="text-muted uppercase">pet projects</span>
  </div>

  <div className="w-full">

  <div
    className="
      group
      relative
      w-full
      border
      border-black/10
      bg-[#F1EEE7]
      px-6
      md:px-8
      py-5
      md:py-6
      transition-all
      duration-300
      hover:border-rust/50
      hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]
    "
  >

    <div className="flex flex-col md:flex-row md:items-center gap-5">

      {/* LEFT — APP IDENTITY */}
      <div className="flex items-center gap-4 shrink-0">

        {/* Nuvi app icon */}
        <div
          className="
            w-11
            h-11
            rounded-[11px]
            bg-rust
            flex
            items-center
            justify-center
            text-white
            font-display
            italic
            text-xl
            shadow-[0_3px_8px_rgba(0,0,0,0.12)]
          "
        >
          N
        </div>

        <div>
          <div className="font-sans text-[13px] font-semibold">
            Nuvi
          </div>

          <div className="font-mono text-[9px] tracking-[0.1em] text-muted uppercase mt-1">
            Pet Project · In Progress
          </div>
        </div>

      </div>

      {/* MIDDLE — NOTIFICATION MESSAGE */}
      <div className="flex-1 md:pl-8">

        <div className="font-display italic text-[20px] md:text-[24px] leading-tight">
          A little companion for learning ML.
        </div>

        <div className="font-sans text-[13px] text-muted mt-1.5">
          Currently being built for the desktop.
        </div>

      </div>

      {/* RIGHT — ACTION */}
      <div className="shrink-0 md:ml-auto">

        <a
          href="/nuvi"
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            border
            border-black/15
            bg-white/50
            font-mono
            text-[9px]
            tracking-[0.1em]
            uppercase
            transition-all
            duration-300
            group-hover:border-rust
            group-hover:text-rust
            hover:bg-rust
            hover:text-white
          "
        >
          READ MORE
          <span className="text-[11px]">→</span>
        </a>

      </div>

    </div>

  </div>

</div>
</section>
      {/* WORK */}
<section id="work" className="px-[6vw] py-[60px]">
  <div className="flex items-baseline gap-3 font-mono text-[11px] tracking-[0.08em] mb-7">
    <span className="font-heavy text-rust">04</span>
    <span className="text-muted uppercase">projects</span>
  </div>

  <div>
    <WorkCard
      num="001"
      cryptic="Clouds part. The ground was always there."
      realName="ClearSightSAR — cloud-free satellite reconstruction"
      description="I worked on reconstructing cloud-free optical satellite imagery from SAR and partially obscured optical data. I built a conditional diffusion pipeline that learns to infer what is hidden beneath clouds using radar information, rather than simply filling in missing pixels."
      image="/projects/clearsight.png"
      stack="PyTorch · Diffusion · Remote Sensing"
      href="https://github.com/ritikashinde/ClearSightSAR"
    />

    <WorkCard
      num="002"
      cryptic="Give the small business a second brain."
      realName="SME GenAI Agent — multi-agent business intelligence"
      description="I built a multi-agent AI system that lets small businesses interact with their data through natural language. Different agents handle different responsibilities, turning spreadsheets and reports into analysis and business insights."
      image="/projects/sme-agent.png"
      stack="LangChain · Llama 3 · Agentic AI"
      href="https://github.com/SME-GenAI-Agent/GenAI-Agent-for-SME-MSE-Business-insights"
    />

    <WorkCard
      num="003"
      cryptic="Language becomes a hand that moves things."
      realName="VLM Manipulation System — embodied AI pipeline"
      description="I connected vision, language, and robot control into a perception-to-action pipeline for object manipulation. Using OpenVLA and PyBullet, I explored how a vision-language model's understanding could become physical action."
      image="/projects/vlm-manipulation.png"
      stack="OpenVLA · PyBullet · Robotics"
      href="https://github.com/ritikashinde/VLM-Manipulation-System"
    />

    <WorkCard
      num="004"
      cryptic="Every model is only as honest as its data."
      realName="DataJanitor — automated data cleaning environment"
      description="I built DataJanitor to automate common data-cleaning tasks, from finding inconsistencies to preparing datasets for analysis and machine learning. The goal was to make the journey from raw data to trustworthy data more systematic."
      stack="Python · Automation · Data"
      href="https://github.com/ritikashinde/datajanitor-env"
       creativeTech
    />
  </div>
</section>

{/* BEYOND CODE */}
<section
  id="beyond"
  className="
    group
    mx-[3vw]
    bg-[#7C4A2D]
    px-[3vw]
    py-[100px]
  "
>
  <div className="flex items-baseline gap-3 font-mono text-[11px] tracking-[0.08em] mb-10">
    <span className="font-heavy text-white">05</span>
    <span className="text-white/70 uppercase">beyond code</span>
  </div>

  <div className="grid md:grid-cols-2 gap-px bg-white/20">

    {/* POETRY */}
    <FadeIn>
      <div
  className="
    bg-background
    p-10
    h-full
    transition-transform
    duration-700
    ease-out
    group-hover:-translate-y-1
  "
>
        <div className="font-mono text-[10px] text-rust tracking-[0.1em]">
          POETRY
        </div>

        <h3 className="font-display italic text-[28px] mt-3 mb-3.5">
          Dream Eater
        </h3>

        <p className="text-muted text-[15px] leading-relaxed max-w-[400px]">
          A published collection on existence, memory, and imagination —
          the residue no reconstruction model has learned to predict.
        </p>

        <a
          href="https://www.amazon.in/Dream-Eater-Poetic-Interpretation-Existence/dp/9369538437"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            mt-4
            font-mono
            text-[11px]
            border-b border-line
            hover:border-rust
            hover:text-rust
            transition-colors
          "
        >
          view on amazon →
        </a>

        <div className="mt-6 max-w-[160px]">
          <Image
            src="/book-cover.jpeg"
            alt="Dream Eater book cover"
            width={160}
            height={213}
            className="object-cover"
          />
        </div>
      </div>
    </FadeIn>

    {/* FELLOWSHIP */}
    <FadeIn>
      <div className="bg-background
    p-10
    h-full
    transition-transform
    duration-700
    ease-out
    group-hover:translate-y-1">
        <div className="font-mono text-[10px] text-rust tracking-[0.1em]">
          FELLOWSHIP
        </div>

        <h3 className="font-display italic text-[28px] mt-3 mb-3.5">
          When Machines See What We Can&apos;t
        </h3>

        <p className="text-muted text-[15px] leading-relaxed max-w-[400px]">
          Writing a narrative nonfiction book on Indian space technologies —
          SAR, hyperspectral imaging, small-satellite constellations — under a
          grant from the Indian Science Book Fellowship.
        </p>

        <a
          href="/book"
          className="
            inline-block
            mt-4
            font-mono
            text-[11px]
            border-b border-line
            hover:border-rust
            hover:text-rust
            transition-colors
          "
        >
          ENTER BOOK →
        </a>
      </div>
    </FadeIn>

  </div>
</section>

      {/* CREATIVE TECH */}
      <section id="creative" className="px-[6vw] py-[150px]">
        <div className="flex items-baseline gap-3 font-mono text-[11px] tracking-[0.08em] mb-7">
          <span className="font-heavy text-rust">06</span>
          <span className="text-muted uppercase">creative tech</span>
        </div>
        <div className="flex gap-0.5 overflow-x-auto pb-3">
          {[
            { src: "/td1.gif", name: "Audio Reactive Grid Space" },
            { src: "/td2.gif", name: "Black Hole Simulation" },
            { src: "/td3.gif", name: "Ray Pop" },
            { src: "/td4.gif", name: "Audio Reactive Particle System" },
          ].map((td) => (
            <div
              key={td.src}
              className="group relative min-w-[280px] aspect-[4/3] flex-shrink-0 overflow-hidden"
            >
              <img
                src={td.src}
                alt={td.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 z-10">
                <div className="font-display italic text-base text-white drop-shadow">
                  {td.name}
                </div>
                <div className="font-mono text-[10px] text-lime mt-1 drop-shadow">
                  TOUCHDESIGNER
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-[6vw] py-20 border-t border-line text-center">
        <div className="font-heavy leading-[1.15] text-[24px] sm:text-[36px] md:text-[50px]">
          <span className="block opacity-90">still resolving.</span>
          <span className="block opacity-50">still resolving.</span>
          <span className="block opacity-25">still resolving.</span>
        </div>
        <div className="mt-12 font-mono text-xs">
          <a
            href="mailto:ritikashinde98@gmail.com"
            className="mx-2.5 border-b border-line hover:border-rust hover:text-rust transition-colors"
          >
            say hello
          </a>
        </div>
        <div className="mt-10 font-mono text-[10px] text-muted tracking-[0.04em]">
    <div>Built and Designed by Ritika Shinde· </div>
    <div className="mt-1.5">All rights reserved.©</div>
  </div>
      </footer>
    </main>
  );
}

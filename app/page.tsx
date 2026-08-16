import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import TopBar from "@/components/TopBar";
import WorkCard from "@/components/WorkCard";
import DissolveCanvas from "@/components/DissolveCanvas";
import HeroPlayable from "@/components/HeroPlayable";

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
      <section id="home" className="min-h-screen flex flex-col justify-center px-[6vw] relative">
        <div className="font-display italic font-normal text-[30px] sm:text-[42px] md:text-[56px] lg:text-[64px] leading-[1.12] max-w-[900px]">
          The eye that isn&apos;t yours <span className="text-rust">still sees</span> —
          it just needs the noise cleared first.
        </div>

        <div className="mt-14 flex items-baseline gap-4">
          <div className="font-heavy text-sm tracking-[0.05em]">RITIKA SHINDE</div>
          <div className="font-mono text-[11px] text-muted">
            — Machine Learning, Data, Creative Tech
          </div>
        </div>

        <div className="hidden lg:block absolute right-[6vw] top-1/2 -translate-y-1/2 opacity-90">
          <HeroPlayable />
        </div>

        <div className="absolute bottom-10 left-[6vw] font-mono text-[10px] text-muted tracking-[0.1em]">
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
      <section id="about" className="px-[6vw] py-[150px]">
        <div className="font-heavy text-[11px] text-rust tracking-[0.08em] mb-7">01</div>
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <FadeIn>
            <div className="font-display italic text-2xl md:text-4xl leading-[1.3] max-w-[480px]">
              I spend my days learning and training neural networks. Sometimes, the fine-tuning happens on a manuscript.
            </div>
          </FadeIn>
          <FadeIn>
            <div>
              <div className="border-l border-line pl-7">
                {[
                  ["Field", "Machine Learning / Computer Vision / Generative AI"],
                  ["Focus", "Diffusion Models, Remote Sensing, Agentic AI"],
                  ["Trained in", "Automation & Robotics"],
                  ["Also does", "Writing, generative visuals"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-5 py-2.5 border-b border-line font-mono text-xs text-muted"
                  >
                    <span className="text-foreground">{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10.5px] px-2.5 py-1.5 border border-line text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="hidden md:block mt-10">
                <Image
                  src="/ritikas.jpeg"
                  alt="Ritika Shinde"
                  width={220}
                  height={280}
                  className="grayscale-[30%] contrast-[1.05] object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="px-[6vw] py-[150px]">
        <div className="flex items-baseline gap-3 font-mono text-[11px] tracking-[0.08em] mb-7">
  <span className="font-heavy text-rust">02</span>
  <span className="text-muted uppercase">experience</span>
</div>

        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-8 py-9 border-t border-line">
            <div className="font-heavy text-[22px]">2024</div>
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

        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-8 py-9 border-t border-b border-line">
            <div className="font-heavy text-[22px]">2025</div>
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
      </section>

      {/* WORK */}
      <section id="work" className="px-[6vw] py-[150px]">
        <div className="flex items-baseline gap-3 font-mono text-[11px] tracking-[0.08em] mb-7">
  <span className="font-heavy text-rust">03</span>
  <span className="text-muted uppercase">projects</span>
</div>

        <div>
  <WorkCard
    num="001"
    cryptic="Clouds part. The ground was always there."
    realName="ClearSightSAR — cloud-free satellite reconstruction"
    description="I worked on reconstructing cloud-free optical satellite imagery from SAR and partially obscured optical data. I built a conditional diffusion pipeline that learns to use radar information to infer what is hidden beneath clouds, rather than simply filling in missing pixels. The work involved working with satellite datasets, latent-space representations, a VAE, and a UNet-based denoising process. I also explored how cloud masks and additional conditioning could make the reconstruction more spatially aware. The project became my way of asking a slightly strange question: if a satellite can't see the ground, can another kind of vision help it look anyway?"
    image="/projects/clearsight.png"
    stack="PyTorch · Diffusion · Remote Sensing"
    href="https://github.com/ritikashinde/ClearSightSAR"
  />

  <WorkCard
  num="002"
  cryptic="Give the small business a second brain."
  realName="SME GenAI Agent — multi-agent business intelligence"
 description="I built a multi-agent AI system designed to give small businesses a more useful way to interact with their data. Instead of expecting someone to manually dig through spreadsheets and reports, the system lets them ask questions in natural language and get back analysis and business insights. Different agents take on different responsibilities. The goal was simple: make the data feel less like a pile of files and more like something you can actually talk to."
  image="/projects/sme-agent.png"
  stack="LangChain · Llama 3 · Agentic AI"
  href="https://github.com/SME-GenAI-Agent/GenAI-Agent-for-SME-MSE-Business-insights"
/>

  <WorkCard
  num="003"
  cryptic="Language becomes a hand that moves things."
  realName="VLM Manipulation System — embodied AI pipeline"
  description="I connected vision, language, and robot control into a perception-to-action pipeline for object manipulation. The system takes a natural-language instruction and combines it with visual understanding to determine what the robot needs to do. I worked with OpenVLA and PyBullet to explore how a vision-language model's reasoning could eventually become a physical action rather than stopping at a text response. The pipeline moves from understanding the scene and instruction to selecting an action inside a simulated robotic environment. Basically, I wanted to see what happens when language stops being something a model says and starts becoming something a robot does."
  image="/projects/vlm-manipulation.png"
  stack="OpenVLA · PyBullet · Robotics"
  href="https://github.com/ritikashinde/VLM-Manipulation-System"
/>

  <WorkCard
    num="004"
    cryptic="Every model is only as honest as its data."
    realName="DataJanitor — automated data cleaning environment"
    description="I built DataJanitor around a problem that tends to get ignored until it breaks everything downstream: messy data. The project automates parts of the process of finding inconsistencies, cleaning datasets, and preparing them for analysis or machine learning. Instead of repeatedly writing the same preprocessing steps for every dataset, the idea was to create an environment where common data-cleaning work could be handled systematically. I focused on making the workflow practical enough to move from raw data toward something a model can actually trust. Because a surprisingly large part of machine learning is still just asking a dataset why it decided to contain three different versions of the same column."
    
    stack="Python · Automation · Data"
    href="https://github.com/ritikashinde/datajanitor-env"
  />
</div>
      </section>

      {/* BEYOND CODE */}
      <section id="beyond" className="px-[6vw] py-[150px]">
        <div className="flex items-baseline gap-3 font-mono text-[11px] tracking-[0.08em] mb-7">
          <span className="font-heavy text-rust">04</span>
          <span className="text-muted uppercase">beyond code</span>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-line">
          <FadeIn>
            <div className="bg-background p-10 h-full">
              <div className="font-mono text-[10px] text-rust tracking-[0.1em]">POETRY</div>
              <h3 className="font-display italic text-[28px] mt-3 mb-3.5">Dream Eater</h3>
              <p className="text-muted text-[15px] leading-relaxed max-w-[400px]">
                A published collection on existence, memory, and imagination — the
                residue no reconstruction model has learned to predict.
              </p>
              <a
                href="https://www.amazon.in/Dream-Eater-Poetic-Interpretation-Existence/dp/9369538437"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 font-mono text-[11px] border-b border-line hover:border-rust hover:text-rust transition-colors"
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
          <FadeIn>
            <div className="bg-background p-10 h-full">
              <div className="font-mono text-[10px] text-rust tracking-[0.1em]">FELLOWSHIP</div>
              <h3 className="font-display italic text-[28px] mt-3 mb-3.5">
                When Machines See What We Can&apos;t
              </h3>
              <p className="text-muted text-[15px] leading-relaxed max-w-[400px]">
                Writing a narrative nonfiction book on Indian space technologies —
                SAR, hyperspectral imaging, small-satellite constellations — under a
                grant from the Indian Science Book Fellowship.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CREATIVE TECH */}
      <section id="creative" className="px-[6vw] py-[150px]">
        <div className="flex items-baseline gap-3 font-mono text-[11px] tracking-[0.08em] mb-7">
          <span className="font-heavy text-rust">05</span>
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

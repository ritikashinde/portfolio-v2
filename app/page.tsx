import Image from "next/image";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FadeIn from "@/components/FadeIn";
export default function Home() {
  const skills = [
    "Machine Learning",
    "Computer Vision",
    "Generative AI",
    "Diffusion Models",
    "Agentic AI",
    "PyTorch",
    "Robotics",
    "Remote Sensing",
  ];

  return (
    <main className="grid-bg min-h-screen bg-black text-white">
      {/* NAVBAR */}
<nav
  className="
fixed
top-6
left-1/2
z-50
w-[95%]
max-w-7xl
-translate-x-1/2
rounded-full
border
border-white/10
bg-black/50
px-6
py-4
backdrop-blur-xl
shadow-2xl
shadow-black/20
"
>
  <div className="flex items-center justify-between">

    {/* LEFT */}
    <div className="hidden gap-6 text-sm md:flex">

      <a href="#home" className="text-zinc-400 hover:text-white">
        Home
      </a>

      <a href="#about" className="text-zinc-400 hover:text-white">
        About
      </a>

      <a href="#journey" className="text-zinc-400 hover:text-white">
        Journey
      </a>

      <a href="#work" className="text-zinc-400 hover:text-white">
        Projects
      </a>

      <a href="#beyond" className="text-zinc-400 hover:text-white">
        Beyond Code
      </a>

      <a href="#creative" className="text-zinc-400 hover:text-white">
        Creative Tech
      </a>

    </div>

    {/* RIGHT */}
<div className="flex items-center gap-5 text-lg">

  <a
    href="mailto:ritikashinde98@gmail.com"
    className="text-zinc-400 transition hover:text-white"
    aria-label="Email"
  >
    <MdEmail />
  </a>

  <a
    href="https://github.com/ritikashinde"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-400 transition hover:text-white"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/ritika-shinde-1b7a24259/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-400 transition hover:text-white"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://medium.com/@ritikashinde98"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-400 transition hover:text-white"
    aria-label="Medium"
  >
    <FaMedium />
  </a>

</div>

  </div>
</nav>
      {/* HERO */}
      <section
  id="home"
  className="flex min-h-screen flex-col justify-center px-8 pt-32 md:px-20"
>
        <h1 className="text-6xl font-bold leading-[0.9] tracking-tight md:text-8xl">
          RITIKA
          <br />
          SHINDE
        </h1>

        <div className="mt-8 text-xl text-zinc-300">
          <p>Machine Learning Engineer</p>
          <p className="mt-1">Researcher • Writer</p>
        </div>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Building intelligent systems through machine learning,
          computer vision, and generative AI.
        </p>

        <a
          href="mailto:ritikashinde98@gmail.com"
          className="mt-8 w-fit rounded-full border border-zinc-700 px-6 py-3 text-sm transition hover:border-white hover:bg-white hover:text-black"
        >
          Say Hello
        </a>
      </section>

      {/* ABOUT */}
      <FadeIn>
       <section
  id="about"
  className="px-8 py-24 md:px-20"
>
  <div className="mx-auto max-w-6xl">

    <h2 className="mb-12 text-4xl font-bold">
      About Me
    </h2>

    <div className="grid gap-16 md:grid-cols-[1.3fr_0.8fr] items-center">

      {/* Text */}
      <div>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
          I am an Automation & Robotics graduate focused on
          machine learning, computer vision, and generative AI.

          My work spans research-driven systems, multimodal
          learning, intelligent automation, and agentic AI
          applications. I enjoy building technology at the
          intersection of engineering, creativity, and
          scientific exploration.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Photo */}
      <div className="flex justify-center md:justify-end">
        <Image
          src="/ritikas.jpeg"
          alt="Ritika Shinde"
          width={300}
          height={400}
          className="
            rounded-3xl
            border
            border-zinc-800
            object-cover
            shadow-2xl
            shadow-black/40
          "
          priority
        />
      </div>

    </div>

  </div>
</section>
</FadeIn>

      {/* JOURNEY */}
      <FadeIn>
      <section
  id="journey"
  className="px-8 py-24 md:px-20"
>
  <div className="mx-auto max-w-6xl">

    <h2 className="mb-16 text-4xl font-bold">
      Journey
    </h2>

    <div className="relative max-w-4xl">

      <div className="absolute left-2 top-0 h-full w-px bg-zinc-800" />

      {/* Earth5R */}
      <div className="relative mb-24 pl-12">

        <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-cyan-400" />

        <p className="text-sm text-cyan-400">
          2024
        </p>

        <h3 className="mt-2 text-2xl font-semibold">
          AI/ML Content Writer
        </h3>

        <p className="text-zinc-500">
          Earth5R
        </p>

        <p className="mt-3 max-w-2xl text-zinc-400">
          Created technical content on artificial intelligence,
          machine learning, sustainability, and emerging
          environmental technologies.
        </p>

      </div>

      {/* IIT Hyderabad */}
      <div className="relative pl-12">

        <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-cyan-400" />

        <p className="text-sm text-cyan-400">
          2025
        </p>

        <h3 className="mt-2 text-2xl font-semibold">
          Research Intern
        </h3>

        <p className="text-zinc-500">
          IIT Hyderabad
        </p>

        <p className="mt-3 max-w-2xl text-zinc-400">
          Built diffusion-based pipelines for generating
          cloud-free satellite imagery using SAR and
          optical data for remote sensing applications.
        </p>

      </div>

    </div>

  </div>
</section>
</FadeIn>
      {/* SELECTED WORK */}
      <FadeIn>
      <section
  id="work"
  className="px-8 py-24 md:px-20"
>
        <h2 className="mb-16 text-4xl font-bold">
          Selected Work
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {/* ClearSightSAR */}
          <div
  className="
    rounded-3xl
    border
    border-zinc-800
    p-8
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-cyan-400
    hover:shadow-xl
    hover:shadow-cyan-500/5
  ">

            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                ClearSightSAR
              </h3>

              <a
                href="https://github.com/ritikashinde/ClearSightSAR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white"
              >
                GitHub
              </a>
            </div>

            <p className="mt-3 text-cyan-400">
              Research Project
            </p>

            <p className="mt-4 text-zinc-400">
              Generating cloud-free optical satellite imagery
              using diffusion models and multimodal Earth
              observation data.
            </p>

            <p className="mt-8 text-sm text-zinc-500">
              PyTorch • Diffusion Models • Remote Sensing
            </p>
          </div>

          {/* SME Agent */}
          <div className="rounded-3xl border border-zinc-800 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/5">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                SME GenAI Agent
              </h3>

              <a
                href="https://github.com/SME-GenAI-Agent/GenAI-Agent-for-SME-MSE-Business-insights"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white"
              >
                GitHub
              </a>
            </div>

            <p className="mt-3 text-cyan-400">
              Multi-Agent AI System
            </p>

            <p className="mt-4 text-zinc-400">
              AI-powered business intelligence platform
              for SME/MSME organizations using LLM agents.
            </p>

            <p className="mt-8 text-sm text-zinc-500">
              LangChain • Llama 3 • Generative AI
            </p>
          </div>

          {/* VLM */}
          <div className="rounded-3xl border border-zinc-800 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/5">
            <h3 className="text-2xl font-semibold">
              Vision-Language Manipulation System
            </h3>

            <p className="mt-3 text-cyan-400">
              Vision-Language Robotics
            </p>

            <p className="mt-4 text-zinc-400">
              Translating visual inputs and natural language
              instructions into robotic actions.
            </p>

            <p className="mt-8 text-sm text-zinc-500">
              VLMs • Computer Vision • Robotics
            </p>
          </div>

          {/* DataJanitor */}
          <div className="rounded-3xl border border-zinc-800 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/5">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                DataJanitor
              </h3>

              <a
                href="https://github.com/ritikashinde/datajanitor-env"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white"
              >
                GitHub
              </a>
            </div>

            <p className="mt-3 text-cyan-400">
              Data Preparation Automation
            </p>

            <p className="mt-4 text-zinc-400">
              Environment for automating data cleaning,
              validation, and preprocessing workflows.
            </p>

            <p className="mt-8 text-sm text-zinc-500">
              Python • Automation • Data Engineering
            </p>
          </div>

        </div>
      </section>
      </FadeIn>

      {/* BEYOND CODE */}
      <FadeIn>
      <section id="beyond" className="px-8 py-16 md:px-20">
        <h2 className="mb-16 text-4xl font-bold">
          Beyond Code
        </h2>

        <div className="space-y-12 max-w-3xl">

          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] items-start">

            {/* LEFT: TEXT */}
            <div>
              <h3 className="text-2xl font-semibold">
                Dream Eater
              </h3>

              <p className="mt-2 text-zinc-400">
                Published poetry collection exploring existence,
                memory, imagination, and the human experience.
              </p>

              <a
                href="https://www.amazon.in/Dream-Eater-Poetic-Interpretation-Existence/dp/9369538437"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full border border-zinc-700 px-5 py-2 text-sm transition hover:border-white hover:bg-white hover:text-black"
              >
                View on Amazon
              </a>
            </div>

            {/* RIGHT: LOCAL STATIC IMAGE PREVIEW */}
            <a
              href="https://www.amazon.in/Dream-Eater-Poetic-Interpretation-Existence/dp/9369538437"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-600">

                {/* Local static image from your public folder */}
                <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black shadow-lg">
                  <img
                    src="/book-cover.jpeg"
                    alt="Dream Eater Book Cover"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <p className="mt-4 text-sm text-zinc-500 group-hover:text-zinc-300 transition">
                  Click to view on Amazon
                </p>

              </div>
            </a>

          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              Indian Science Book Fellowship 2026 
            </h3>

            <p className="mt-2 text-zinc-400">
              Shortlisted for the fellowship program supporting
              science communication and research-driven writing.
            </p>
          </div>

        </div>
      </section>
      </FadeIn>
{/* CREATIVE TECHNOLOGY */}
<FadeIn>
<section
  id="creative"
  className="px-8 py-24 md:px-20"
>
  <h2 className="mb-4 text-4xl font-bold">
    Creative Technology
  </h2>

  <p className="mb-12 max-w-2xl text-zinc-400">
    TouchDesigner experiments exploring motion systems,
    generative visuals, and real-time interactive graphics.
  </p>

  <div className="grid gap-6 md:grid-cols-3">

    {/* 1 */}
    <div className="
group
overflow-hidden
rounded-3xl
border
border-zinc-800
transition-all
duration-300
hover:-translate-y-1
hover:border-cyan-400
hover:shadow-xl
hover:shadow-cyan-500/5
">

      {/* GIF */}
      <div className="aspect-square w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black shadow-lg group-hover:shadow-cyan-500/10">
        <img
          src="/td1.gif"
          alt="Audio Reactive Grid Space"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* TEXT */}
      <div className="p-4">
        <p className="text-sm text-zinc-200">
          Audio Reactive Grid Space
        </p>
        <p className="text-xs text-zinc-500">
          TouchDesigner
        </p>
      </div>

    </div>

    {/* 2 */}
    <div className="
group
overflow-hidden
rounded-3xl
border
border-zinc-800
transition-all
duration-300
hover:-translate-y-1
hover:border-cyan-400
hover:shadow-xl
hover:shadow-cyan-500/5
">

      <div className="aspect-square w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black shadow-lg group-hover:shadow-cyan-500/10">
        <img
          src="/td2.gif"
          alt="Black Hole Simulation"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <p className="text-sm text-zinc-200">
          Black Hole Simulation
        </p>
        <p className="text-xs text-zinc-500">
          TouchDesigner
        </p>
      </div>

    </div>

    {/* 3 */}
    <div className="
group
overflow-hidden
rounded-3xl
border
border-zinc-800
transition-all
duration-300
hover:-translate-y-1
hover:border-cyan-400
hover:shadow-xl
hover:shadow-cyan-500/5
">

      <div className="aspect-square w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black shadow-lg group-hover:shadow-cyan-500/10">
        <img
          src="/td3.gif"
          alt="Ray Pop"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <p className="text-sm text-zinc-200">
          Ray Pop
        </p>
        <p className="text-xs text-zinc-500">
          TouchDesigner
        </p>
      </div>

    </div>

  </div>
</section>
</FadeIn>

{/* FOOTER */}
      <footer className="border-t border-zinc-900 px-8 py-12 md:px-20 text-center text-sm text-zinc-500">
  <p>Built and designed by Ritika Shinde.</p>

  <p className="mt-2 text-zinc-600">
    Machine Learning • Research • Creative Technology
  </p>
</footer>
    </main>
  );
}
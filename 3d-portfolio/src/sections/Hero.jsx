import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const textParticles = Array.from({ length: 32 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${10 + ((index * 17) % 76)}%`,
  size: `${2 + (index % 4)}px`,
  delay: `${(index % 9) * 0.25}s`,
  duration: `${4 + (index % 5) * 0.55}s`,
}));

const HeroTextParticles = () => {
  return (
    <span aria-hidden="true" className="hero-text-particles">
      {textParticles.map((particle) => (
        <span
          key={particle.id}
          className="hero-text-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </span>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-reveal",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    },
    { scope: heroRef }
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#030712] pt-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(124,58,237,0.16),transparent_34%)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 md:gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <header className="max-w-3xl">
          <p className="hero-reveal mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            MERN Stack Developer
          </p>

          <div className="hero-text hero-reveal relative isolate overflow-visible">
            <HeroTextParticles />

            <h1 className="relative z-10 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">Turning</span>

              <span className="my-2 flex min-h-[1.2em] flex-wrap items-center gap-3 text-cyan-300 sm:gap-4">
                <span className="hero-word-mask">
                  
                  <span className="hero-word-track">
  {words.map((word, index) => (
    <span key={index} className="hero-word-item">
      <img
        src={word.imgPath}
        alt=""
        className="size-8 rounded-full bg-white/90 p-1.5 sm:size-10"
      />
      <span>{word.text}</span>
    </span>
  ))}

  {/* duplicate first word for smooth infinite loop */}
  {words[0] && (
    <span className="hero-word-item" aria-hidden="true">
      <img
        src={words[0].imgPath}
        alt=""
        className="size-8 rounded-full bg-white/90 p-1.5 sm:size-10"
      />
      <span>{words[0].text}</span>
    </span>
  )}
</span>
                </span>
              </span>

              <span className="block">Into Polished Web Applications.</span>
            </h1>
          </div>

          <p className="hero-reveal mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Hi, I’m Aisha. I build responsive full-stack web applications with
            React, Node.js, Express, MongoDB, clean UI, and reliable user
            experiences.
          </p>

          <div className="hero-reveal mt-8 flex flex-wrap items-center gap-4">
            <Button text="See My Work" targetId="work" />

            <a
              href="#contact"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:bg-white/10 hover:text-white md:text-base"
            >
              Let’s Connect
            </a>
          </div>
        </header>

        <div className="hero-reveal relative order-2 mx-auto mt-8 h-[300px] w-full max-w-[420px] sm:h-[360px] md:h-[430px] lg:order-none lg:mt-0 lg:h-[560px] lg:max-w-none">
          <HeroExperience />
        </div>
      </div>
    </section>
  );
};

export default Hero;
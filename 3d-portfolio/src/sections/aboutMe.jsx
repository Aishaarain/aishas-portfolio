import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-reveal",
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden bg-[#030712] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_85%_60%,rgba(124,58,237,0.10),transparent_34%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="about-reveal flex justify-center">
  <div className="relative w-full max-w-[430px]">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[90px]" />

    {/* Gradient Circle */}
    <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-500/20" />

    {/* Decorative Ring */}
    <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15" />

    {/* Image Card */}
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111827]/70 backdrop-blur-md shadow-[0_40px_120px_rgba(0,0,0,0.55)]">

      <img
        src="/images/me3.PNG"
        alt="Aisha Arain"
        className="w-full object-cover"
      />

    </div>

    {/* Floating Badge */}
    <div className="absolute -bottom-6 right-0 rounded-2xl border border-cyan-400/20 bg-[#0F172A]/90 px-5 py-3 backdrop-blur-xl shadow-xl">
      <p className="text-xs uppercase tracking-widest text-cyan-300">
        Full Stack
      </p>
      <p className="font-semibold text-white">
        MERN Developer
      </p>
    </div>

  </div>
</div>

        <div className="space-y-6">
          <p className="about-reveal inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            About me
          </p>

          <h2 className="about-reveal text-3xl font-bold tracking-tight text-white md:text-5xl">
           Building full-stack MERN applications with smart AI-powered features.
          </h2>

          <p className="about-reveal text-base leading-8 text-white/65 md:text-lg">
            I’m Aisha Arain, a final-year Computer Science student and MERN developer. I build responsive full-stack web applications using React, Node.js, Express, MongoDB, Tailwind CSS, and AI APIs.

I’m focused on creating clean, practical, and intelligent web products — from dashboards and learning platforms to AI-powered tools.

          </p>

          <p className="about-reveal text-base leading-8 text-white/65 md:text-lg">
            I enjoy turning ideas into real products. I keep improving through courses, fellowships, and hands-on project building.
          </p>

          <div className="about-reveal grid gap-3 sm:grid-cols-2">
            {[
              "MERN stack development",
              "REST APIs and auth flows",
              "Responsive UI with Tailwind",
              "Git, teamwork, and deployment",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white/70">
                <span className="mr-2 text-cyan-300">✦</span>{item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

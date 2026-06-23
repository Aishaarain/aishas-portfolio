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
        <div className="about-reveal">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
            <img src="/images/me3.PNG" alt="Aisha Arain" className="aspect-[4/5] w-full rounded-2xl object-cover" />
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

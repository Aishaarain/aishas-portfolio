import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", detail: "Component-driven interfaces", icon: "/images/logos/react.png" },
  { name: "Node.js", detail: "Backend APIs and services", icon: "/images/logos/node.png" },
  { name: "Express.js", detail: "REST APIs and middleware", icon: "/images/code.svg" },
  { name: "MongoDB", detail: "Document database design", icon: "/images/devices.png" },
  { name: "Tailwind CSS", detail: "Responsive modern styling", icon: "/images/designs.svg" },
  { name: "Git & GitHub", detail: "Version control workflow", icon: "/images/logos/git.svg" },
];

const TechStack = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".skill-card",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
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
    <section id="skills" ref={sectionRef} className="section-padding bg-[#030712] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TitleHeader title="Skills & Technologies" sub="What I work with" />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="skill-card group rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
            >
              <div className="flex items-start gap-4">
                <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                  <img src={skill.icon} alt="" className="max-h-8 max-w-8 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/55">{skill.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

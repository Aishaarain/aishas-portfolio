import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".experience-card",
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section id="experience" ref={sectionRef} className="bg-[#030712] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TitleHeader title="Experience" sub="My career overview" />

        <div className="relative mt-14 space-y-6 before:absolute before:left-6 before:top-0 before:hidden before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-300/40 before:to-transparent md:before:block">
          {expCards.map((card) => (
            <article key={card.title} className="experience-card relative md:pl-16">
              <div className="absolute left-[13px] top-8 hidden size-6 rounded-full border border-cyan-300/40 bg-[#030712] md:block" />

              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition hover:border-cyan-300/25 hover:bg-white/[0.055] md:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <img src={card.logoPath} alt="" className="max-h-10 max-w-10 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white md:text-2xl">{card.title}</h3>
                      <p className="mt-2 text-sm font-medium text-cyan-200">{card.date}</p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 grid gap-3 text-sm leading-6 text-white/62 md:text-base">
                  {card.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

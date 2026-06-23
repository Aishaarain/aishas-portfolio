import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cert-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
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
    <section id="certifications" ref={sectionRef} className="bg-[#030712] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TitleHeader title="Certifications" sub="Verified credentials" />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            [certifications.length + "+", "Certificates"],
            ["4", "Platforms"],
            ["10+", "Skills covered"],
          ].map(([number, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-center">
              <div className="text-3xl font-bold text-cyan-200">{number}</div>
              <div className="mt-1 text-sm text-white/50">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="cert-card flex min-h-[290px] flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
            >
              <div className="mb-4 h-px w-full bg-gradient-to-r from-cyan-300/50 to-transparent" />
              <h3 className="text-lg font-semibold leading-snug text-white">{cert.title}</h3>
              <p className="mt-3 text-sm font-medium text-cyan-200">{cert.issuer}</p>
              <p className="mt-1 text-sm text-white/45">Issued {cert.issueDate}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/62">
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
              >
                View Certificate <span aria-hidden>↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);
const MOVIE_APP_URL = "https://pair-programing-movie-app.vercel.app/";
const STUDY_BUDDY_URL = "https://aipowered-study-buddy.vercel.app/";
const FREELANCE_CRM_URL = "https://cliently-crm-freelance.vercel.app/";

const projects = [
  {
    title: "Movie Explorer Platform",
    description:
      "A responsive movie discovery app with trending movies, real-time search, and detailed movie pages.",
    image: "/images/project1.png",
    link: MOVIE_APP_URL,
    tech: ["React", "Tailwind CSS", "API"],
  },
  {
    title: "Study Buddy",
    description:
      "A smart study companion app that helps students organize tasks, track study sessions, and improve productivity.",
    image: "/images/study-buddy.png",
    link: STUDY_BUDDY_URL,
    tech: ["React", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Freelance CRM",
    description:
      "A client management dashboard for freelancers to track projects, manage clients, invoices, and workflow efficiently.",
    image: "/images/freelance-crm.png",
    link: FREELANCE_CRM_URL,
    tech: ["React", "Tailwind CSS", "Express", "NodeJS"],
  },
];
const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".project-card",
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
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
    <section id="work" ref={sectionRef} className="bg-[#030712] py-24 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <TitleHeader title="Selected Projects" sub="Responsive web applications" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card group rounded-3xl border border-white/10 bg-white/[0.035] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08111f]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 rounded-full border border-cyan-300/25 bg-[#030712]/70 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur-md transition hover:bg-cyan-300 hover:text-slate-950"
                >
                  View Demo
                </a>
              </div>

              <div className="p-2 pt-5">
                <h2 className="text-xl font-semibold leading-snug text-white">{project.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/58">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-cyan-100/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;

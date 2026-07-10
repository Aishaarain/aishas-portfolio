import React from "react";

export default function DeveloperBanner({
  photoSrc = "/images/me1.png",
  title = "DEVELOPER",
}) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#030712]
        py-16
        sm:py-20
        md:py-28
        lg:py-36
        min-h-[520px]
        sm:min-h-[620px]
        md:min-h-[760px]
        lg:min-h-[900px]
        flex
        items-center
        justify-center
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,.12),transparent_35%)]" />

      {/* Stars */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(255,255,255,.8) 1px, transparent 2px),
            radial-gradient(circle at 80% 15%, rgba(255,255,255,.6) 1px, transparent 2px),
            radial-gradient(circle at 65% 70%, rgba(34,211,238,.6) 1px, transparent 2px),
            radial-gradient(circle at 30% 80%, rgba(124,58,237,.6) 1px, transparent 2px)
          `,
        }}
      />

      <div className="relative w-full max-w-7xl px-4 sm:px-6">

        {/* Small Heading */}
        <p
          className="
            mb-6
            text-center
            uppercase
            font-semibold
            text-cyan-400
            tracking-[6px]
            sm:tracking-[10px]
            md:tracking-[12px]
            text-[11px]
            sm:text-xs
            md:text-sm
          "
        >
          MERN STACK
        </p>

        {/* Main Banner */}
        <div
          className="
            relative
            flex
            items-center
            justify-center
            h-[260px]
            sm:h-[340px]
            md:h-[500px]
            lg:h-[620px]
          "
        >
          {/* Filled Text */}
          <h1
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              font-black
              uppercase
              leading-none
              tracking-[-0.06em]
              text-[#d9d9d9]
              select-none
            "
            style={{
              fontSize: "clamp(3rem,18vw,17rem)",
            }}
          >
            {title}
          </h1>

          {/* Transparent PNG */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              z-10
            "
          >
            <img
              src={photoSrc}
              alt="Aisha Arain"
              className="
                w-[110px]
                sm:w-[170px]
                md:w-[250px]
                lg:w-[340px]
                xl:w-[420px]
                object-contain
                drop-shadow-[0_35px_60px_rgba(0,0,0,.45)]
                transition-all
                duration-500
                hover:scale-105
              "
            />
          </div>

          {/* Outline Text */}
          <h1
            aria-hidden="true"
            className="
              absolute
              inset-0
              z-20
              flex
              items-center
              justify-center
              font-black
              uppercase
              leading-none
              tracking-[-0.06em]
              text-transparent
              pointer-events-none
              select-none
            "
            style={{
              fontSize: "clamp(3rem,18vw,17rem)",
              WebkitTextStroke: "2px rgba(255,255,255,.16)",
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}

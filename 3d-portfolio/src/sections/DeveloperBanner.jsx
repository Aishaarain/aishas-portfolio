import React from "react";

export default function DeveloperBanner({
  photoSrc = "/images/me2.png",
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
        min-h-[560px]
        sm:min-h-[640px]
        md:min-h-[780px]
        lg:min-h-[920px]
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

      {/*
        Photo anchored to the SECTION (not the text row) so it can grow
        freely. Width uses a fluid clamp() so it scales smoothly across
        every screen size instead of jumping at breakpoints. It's also
        nudged up with translateY so the head clears the top of the
        letters instead of sitting mid-height inside them.
      */}
      <div
        className="
          absolute
          left-1/2
          bottom-0
          z-30
          pointer-events-none
          -translate-x-1/2
          translate-y-[6%]
          sm:translate-y-[4%]
          md:translate-y-[2%]
        "
        style={{
          width: "clamp(260px, 55vw, 760px)",
        }}
      >
        <img
          src={photoSrc}
          alt="Aisha Arain"
          className="
            w-full
            object-contain
            drop-shadow-[0_35px_60px_rgba(0,0,0,.55)]
            transition-transform
            duration-500
            pointer-events-auto
            hover:scale-105
          "
          style={{
            transform: "scale(1.18)",
            transformOrigin: "bottom center",
          }}
        />
      </div>
    </section>
  );
}

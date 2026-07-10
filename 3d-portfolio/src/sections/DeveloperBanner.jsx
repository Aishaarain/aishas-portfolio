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
      py-24
      md:py-36
      min-h-[700px]
      md:min-h-[900px]
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

      <div className="relative w-full max-w-7xl px-6">

        <p className="mb-8 text-center uppercase tracking-[12px] text-cyan-400 font-semibold text-sm">
          MERN STACK 
        </p>

       <div
  className="
    relative
    flex
    items-center
    justify-center

    h-[240px]
    sm:h-[320px]
    md:h-[430px]
    lg:h-[520px]
    xl:h-[620px]
  "
>
          {/* Filled Text */}
          <h1
  aria-hidden="true"
  className="
    absolute inset-0 z-20
    flex items-center justify-center
    font-black uppercase
    leading-[0.8]
    tracking-[-0.06em]
    text-transparent
    pointer-events-none
    select-none
    whitespace-nowrap

    text-[4.2rem]
    sm:text-[6rem]
    md:text-[8rem]
    lg:text-[10rem]
    xl:text-[13rem]
    2xl:text-[15rem]
  "
  style={{
    WebkitTextStroke: "2px rgba(255,255,255,.16)",
  }}
>
  {title}
</h1>

          {/* Transparent PNG */}
          <div
            className="
            absolute
            z-10
            bottom-0
            left-1/2
            -translate-x-1/2
            h-full
            flex
            items-end
            justify-center
            "
          >
           <img
  src={photoSrc}
  alt="Aisha Arain"
  className="
    h-[90%]
    sm:h-[95%]
    md:h-full
    w-auto
    object-contain
    object-bottom
    drop-shadow-[0_40px_60px_rgba(0,0,0,.45)]
    transition-all
    duration-500
    hover:scale-105
  "
/>
          </div>

          {/* Outline Text */}
         <h1
  className="
    absolute inset-0
    flex items-center justify-center
    font-black uppercase
    leading-[0.8]
    tracking-[-0.06em]
    text-[#d9d9d9]
    select-none
    whitespace-nowrap

    text-[4.2rem]
    sm:text-[6rem]
    md:text-[8rem]
    lg:text-[10rem]
    xl:text-[13rem]
    2xl:text-[15rem]
  "
>
  {title}
</h1>

        </div>
      </div>
    </section>
  );
}

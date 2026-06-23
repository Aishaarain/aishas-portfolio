const Button = ({ text, className, targetId = "work" }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) return;

    const offset = window.innerHeight * 0.1;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={`${className ?? ""} group inline-flex items-center justify-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 shadow-[0_12px_40px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-300 hover:text-slate-950 md:text-base`}
    >
      <span>{text}</span>
      <span className="grid size-8 place-items-center rounded-full bg-white/10 transition group-hover:bg-slate-950/10">
        <img src="/images/arrow-down.svg" alt="" className="size-4 transition group-hover:translate-y-0.5" />
      </span>
    </a>
  );
};

export default Button;

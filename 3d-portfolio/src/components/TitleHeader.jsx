const TitleHeader = ({ title, sub }) => {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
      {sub && (
        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
          {sub}
        </div>
      )}

      {title && (
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
      )}
    </div>
  );
};

export default TitleHeader;

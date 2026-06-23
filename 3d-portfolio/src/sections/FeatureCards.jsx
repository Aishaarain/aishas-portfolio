import { abilities } from "../constants";

const FeatureCards = () => (
  <section className="bg-[#030712] px-4 py-16 text-white sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
      {abilities.map(({ imgPath, title, desc }) => (
        <article
          key={title}
          className="rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
        >
          <div className="grid size-14 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
            <img src={imgPath} alt="" className="size-7" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/58">{desc}</p>
        </article>
      ))}
    </div>
  </section>
);

export default FeatureCards;

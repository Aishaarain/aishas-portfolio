import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => (
  <div className="flex-none flex-center marquee-item rounded-2xl border border-white/10 bg-white/[0.035] p-4">
    <img src={icon.imgPath} alt={icon.name ?? "technology logo"} className="max-h-14 object-contain opacity-75" />
  </div>
);

const LogoShowcase = () => (
  <section className="relative bg-[#030712] py-10">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-32">
      <div className="marquee-box gap-5 md:gap-8">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`dup-${index}`} icon={icon} />
        ))}
      </div>
    </div>
  </section>
);

export default LogoShowcase;

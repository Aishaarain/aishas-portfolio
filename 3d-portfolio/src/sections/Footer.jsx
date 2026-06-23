import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#030712] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
        <a href="#hero" className="text-sm font-semibold text-white/70 transition hover:text-cyan-200">
          Back to top
        </a>

        <div className="flex gap-3">
          {socialImgs.map((socialImg) => (
            <a
              key={socialImg.name}
              href={socialImg.Url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.035] transition hover:border-cyan-300/35 hover:bg-cyan-300/10"
            >
              <img src={socialImg.imgPath} alt={socialImg.name} className="size-5" />
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-white/45 md:text-right">
          © {new Date().getFullYear()} Aisha Arain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

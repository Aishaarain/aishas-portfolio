import { lazy, Suspense } from "react";

import Hero from "./sections/Hero";
import Navbar from "./components/NavBar";

const AboutMe = lazy(() => import("./sections/aboutMe"));
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Certifications = lazy(() => import("./sections/certification"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));
import DeveloperBanner from "./sections/DeveloperBanner";
const SectionFallback = () => <div className="min-h-24 bg-[#030712]" />;

const App = () => (
  <>
    <Navbar />
      <DeveloperBanner />
    <Hero />
    <Suspense fallback={<SectionFallback />}>
      <AboutMe />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Certifications />
      <Contact />
      <Footer />
    </Suspense>
  </>
);

export default App;

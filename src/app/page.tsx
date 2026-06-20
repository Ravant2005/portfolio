import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Ventures } from "@/components/sections/ventures";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";
import { Recommendations } from "@/components/sections/recommendations";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { CursorInk } from "@/components/origami/cursor-ink";
import { ScrollProgress } from "@/components/origami/scroll-progress";
import { IntroLoader } from "@/components/origami/intro-loader";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-paper">
      <IntroLoader />
      <ScrollProgress />
      <CursorInk />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Ventures />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Recommendations />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

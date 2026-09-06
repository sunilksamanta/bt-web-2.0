import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { OpenSource } from "@/components/sections/OpenSource";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Efficiency } from "@/components/sections/Efficiency";
import { Team } from "@/components/sections/Team";
import { Clients } from "@/components/sections/Clients";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd, buildHomeGraph } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd graph={buildHomeGraph()} />
      <a className="sr-only" href="#about">Skip to content</a>
      <div className="shell">
        <Hero />
        <main>
          <About />
          <Work />
          <OpenSource />
          <Process />
          <Services />
          <Efficiency />
          <Team />
          <Clients />
          <Faq />
        </main>
        <Contact />
      </div>
    </>
  );
}

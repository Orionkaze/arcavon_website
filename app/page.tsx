import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeOffer from "@/components/WhatWeOffer";
import OurGames from "@/components/OurGames";
import Community from "@/components/Community";

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <WhoWeAre />
      <WhatWeOffer />
      <OurGames />
      <Community />
    </main>
  );
}

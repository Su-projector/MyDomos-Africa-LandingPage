import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyItMatters } from "@/components/sections/WhyItMatters";
import { Investors } from "@/components/sections/Investors";
import { Waitlist } from "@/components/sections/Waitlist";
import { BuildWithUs } from "@/components/sections/BuildWithUs";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-auto">
        <Hero />
        <Problem />
        <Platform />
        <HowItWorks />
        <WhyItMatters />
        <Investors />
        <Waitlist />
        <BuildWithUs />
      </main>
      <Footer />
    </>
  );
}

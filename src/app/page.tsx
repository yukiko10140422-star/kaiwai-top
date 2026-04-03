import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Flow from "@/components/Flow";
import ResultPreview from "@/components/ResultPreview";
import MidCTA from "@/components/MidCTA";
import GrowthPath from "@/components/GrowthPath";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";

export default function Home() {
  return (
    <>
      <div className="scroll-progress" />
      <div className="grain" />
      <ScrollEffects />
      <Nav />
      <main>
        <Hero />
        <Flow />
        <ResultPreview />
        <MidCTA />
        <GrowthPath />
<Features />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

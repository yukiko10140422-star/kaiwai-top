import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Flow from "@/components/Flow";
import ResultPreview from "@/components/ResultPreview";
import Categories from "@/components/Categories";
import GrowthPath from "@/components/GrowthPath";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MobileFixedCTA from "@/components/MobileFixedCTA";
import MidCTA from "@/components/MidCTA";
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
        <Categories />
        <MidCTA />
        <GrowthPath />
        <Features />
        <MidCTA />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <MobileFixedCTA />
      <Footer />
    </>
  );
}

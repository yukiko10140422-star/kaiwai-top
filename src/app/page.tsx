import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Flow from "@/components/Flow";
import Categories from "@/components/Categories";
import GrowthPath from "@/components/GrowthPath";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MobileFixedCTA from "@/components/MobileFixedCTA";
import ScrollEffects from "@/components/ScrollEffects";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <div className="scroll-progress" />
      <div className="grain" />
      <ScrollEffects />
      <Nav />
      <main>
        <div className="container-inner">
          <Hero />
          <Flow />
          <Divider />
        </div>
        <Categories />
        <GrowthPath />
        <div className="container-inner">
          <Divider />
          <Features />
          <Divider />
          <Testimonials />
          <Divider />
          <FAQ />
          <CTA />
        </div>
      </main>
      <MobileFixedCTA />
      <Footer />
    </>
  );
}

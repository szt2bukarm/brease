import Image from "next/image";
import Hero from "../components/hero/Hero";
import BothWorlds from "@/components/bothworlds/BothWorlds";
import Implementations from "@/components/implementations/Implementations";
import ImplemetationsWrapper from "@/components/implementations/ImplementationsWrapper";
import BreaseAI from "@/components/breaseAI/BreaseAI";
import Fullstack from "@/components/fullstack/Fullstack";
import FeatureRequest from "@/components/featurerequest/FeatureRequest";
import Showcase from "@/components/showcase/Showcase";
import JoinBeta from "@/components/joinbeta/JoinBeta";
import BreaseKit from "@/components/breasekit/BreaseKit";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <BothWorlds />
      <ImplemetationsWrapper />
      <BreaseAI />
      <Fullstack />
      <FeatureRequest />
      <Showcase />
      <JoinBeta />
      <BreaseKit />
    </main>
    <Footer />
    </>
  );
}

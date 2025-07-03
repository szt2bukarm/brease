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

export default function Home() {
  return (
    <main>
      <Hero />
      <BothWorlds />
      <ImplemetationsWrapper />
      <BreaseAI />
      <Fullstack />
      <FeatureRequest />
      <Showcase />
      <JoinBeta />
    </main>
  );
}

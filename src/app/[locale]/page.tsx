import Benefits from "@/components/sections/Benefits";
import Zohub from "@/components/sections/Zohub";
import StepByStep from "@/components/sections/StepByStep";
import JoinUs from "@/components/sections/JoinUs";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

export default async function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Zohub />
      <StepByStep />
      <JoinUs />
      <Footer />
    </>
  );
}

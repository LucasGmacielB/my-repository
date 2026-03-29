import { Conhecimentos } from "./components/pages/home/conhecimentos";
import { HeroSection } from "./components/pages/home/hero-section";
import { Projetos } from "./components/pages/home/projetos";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <Conhecimentos/>
    <Projetos/>
    </>
  );
}

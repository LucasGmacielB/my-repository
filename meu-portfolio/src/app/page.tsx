import { Contatos } from "./components/contatos";
import { Conhecimentos } from "./components/pages/home/conhecimentos";
import { Perfil } from "./components/pages/home/hero-section";
import { Projetos } from "./components/pages/home/projetos";


export default function Home() {
  return (
    <>
    <Perfil/>
    <Conhecimentos/>
    <Projetos/>
    <Contatos/>
    </>
  );
}

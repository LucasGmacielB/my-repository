import { Introducao } from "../components/pages/projetos/introducao";
import { ListaProjetos } from "../components/pages/projetos/lista";

export const metadata = {
  title: 'Projetos'

}

export default function Projetos () {
    return(
        <>
            <Introducao/>
            <ListaProjetos/>
        </>
    )
}
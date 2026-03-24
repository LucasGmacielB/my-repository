import { Titulo } from "@/app/components/titulo"
import { ConhecimentoTec } from "./conhecimentosTec"
import { TbBrandNextjs } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { FaReact, FaFigma } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

const MOCK_CO = [
    {
        icon: <FaJava/>,
        nome: 'Java',
        dataComeco: '1 ano de experiência' 
    },
    {
        icon: <FaReact/>,
        nome: 'React',
        dataComeco: '1 ano de experiência' 
    },
    {
        icon: <FaFigma/>,
        nome: 'Figma',
        dataComeco: '1 ano de experiência' 
    },
    {
        icon: <GrMysql/>,
        nome: 'MySQL',
        dataComeco: '1 ano de experiência' 
    },
    {
        icon: <TbBrandNextjs/>,
        nome: 'Next.js',
        dataComeco: '1 ano de experiência' 
    }
]

export const Conhecimentos = () => {
    return(
        <section className="container py-16">
            <Titulo title="Conhecimentos" subtitle="competências"/>
            <div className="flex flex-row gap-10 mt-[100px]">
                {MOCK_CO.map(con => (
                    <ConhecimentoTec tec={{
                        icon:con.icon,
                        nome: con.nome,
                        dataComeco: con.dataComeco
                    }}/>
                ))}
                
            </div>
        </section>
    )
}
import { Titulo } from "@/app/components/titulo"
import { ConhecimentoTec } from "./conhecimentosTec"
import { TbBrandNextjs } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { FaReact, FaFigma } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

const conhecimentos = [
    {
        categoria: "Backend",
        tecs: [
            { icon: <FaJava/>, nome: 'Java',},
            { icon: <GrMysql/>, nome: 'MySQL',},
            { icon: <TbBrandNextjs/>, nome: 'Next.js'},
            { icon: <TbBrandNextjs/>, nome: 'Next.js'},
            { icon: <TbBrandNextjs/>, nome: 'Next.js'}
        ]
    },
    {
        categoria: "Frontend",
        tecs: [
            { icon: <FaReact/>, nome: 'React',},
            { icon: <TbBrandNextjs/>, nome: 'Next.js'},
            { icon: <TbBrandNextjs/>, nome: 'Next.js'},
            { icon: <TbBrandNextjs/>, nome: 'Next.js'},

        ]
    },
    {
        categoria: "Design",
        tecs: [
            { icon: <FaFigma/>, nome: 'Figma'},
            { icon: <FaFigma/>, nome: 'Figma'},
            { icon: <FaFigma/>, nome: 'Figma'},
            { icon: <FaFigma/>, nome: 'Figma'},
            { icon: <FaFigma/>, nome: 'Figma'},
        ]
    },
    {
        categoria: "Ferramentas",
        tecs: [
            { icon: <FaFigma/>, nome: 'Figma'},
            { icon: <FaFigma/>, nome: 'Figma'},
            { icon: <FaFigma/>, nome: 'Figma'},
            { icon: <FaFigma/>, nome: 'Figma'},
            { icon: <FaFigma/>, nome: 'Figma'},
        ]
    },
    {
        categoria: "Ferramentas",
        tecs: [
            { icon: <FaFigma/>, nome: 'Figma'},
            { icon: <FaFigma/>, nome: 'Figma'},
            { icon: <FaFigma/>, nome: 'Figma'},
            { icon: <FaFigma/>, nome: 'Figma'},
            { icon: <FaFigma/>, nome: 'Figma'},
        ]
    }
]

export const Conhecimentos = () => {
    return(
        <section className="container py-16">
            <Titulo title="Conhecimentos" subtitle="competências" className="container py-16"/>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {conhecimentos.map((conhecimento, index) => (
                    <div key={index} className="border border-gray-800 rounded-xl p-6">
                        <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-4">{conhecimento.categoria}</h3>
                        <div className="flex flex-col">
                            {conhecimento.tecs.map((tec, i) => (
                                <ConhecimentoTec key={i} tec={tec}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
'use client'

import { Divisoria } from "@/app/components/linha-divisoria/linha"
import { Titulo } from "@/app/components/titulo"
import { CardsProjetos } from "./cardsProjetos"
import { HiArrowNarrowRight } from "react-icons/hi"
import Link from "next/link"
import { motion } from "framer-motion"

const projetos = [
    {
        imagem: "/images/javaProjeto.jpg",
        nomeProjeto: "Sistema de gestão para academias",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iusto ex ratione ullam, nam est, laborum qui in porro ea ad odio voluptatum aperiam. Voluptas nisi soluta inventore reprehenderit quos.",
        tecs: ["Java"],
        repositorio: "https://github.com/LucasGmacielB/Sistema-de-gestao-de-academias",
        projetoOnline: "/"
    },
    {
        imagem: "/images/Portfolio.png",
        nomeProjeto: "Meu Portfolio",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iusto ex ratione ullam, nam est, laborum qui in porro ea ad odio voluptatum aperiam. Voluptas nisi soluta inventore reprehenderit quos.",
        tecs: ["React", "Next.js", "TypeScript", "Tailwind"],
        repositorio: "https://github.com/LucasGmacielB/my-repository"
    },
]

export const Projetos = () => {
    return(
        <section className="container py-16">
            <Titulo title="Meus Projetos" subtitle="destaques"/>
            <Divisoria className="mb-16"/>
            <div>
                {projetos.map((p, index) => (
                    <>
                        <CardsProjetos
                            key={index} 
                            imagem={p.imagem} 
                            nomeProjeto={p.nomeProjeto} 
                            descricao={p.descricao} 
                            tecs={p.tecs} 
                            repositorio={p.repositorio}
                            projetoOline={p.projetoOnline}
                        />
                        {index < projetos.length - 1 && <Divisoria className="my-16"/>}
                    </>
                ))}
                <Divisoria className="my-16"/>
            </div>
            <motion.div
                className="flex items-center justify-end gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <p>Deseja ver mais projetos?</p>
                <Link href="/projects">
                    <button className="flex items-center justify-center gap-2 h-[35px] w-[170px] bg-gray-800/30 rounded-md px-4 hover:bg-gray-700/50 hover:text-blue-300 transition-colors">
                        <p>Ver projetos</p>
                        <HiArrowNarrowRight />
                    </button>
                </Link>
            </motion.div>
            
        </section>
    )
}
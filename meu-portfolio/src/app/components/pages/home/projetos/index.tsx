'use client'

import { Divisoria } from "@/app/components/linha-divisoria/linha"
import { Titulo } from "@/app/components/titulo"
import { CardsProjetos } from "./cardsProjetos"
import { HiArrowNarrowRight } from "react-icons/hi"
import Link from "next/link"
import { motion } from "framer-motion"

const projetos = [
    {
        imagem: "/images/projetos/javaProjeto.jpg",
        nomeProjeto: "Sistema de gestão para academias",
        descricao: "Sistema de gerenciamento de academia em Java, com cadastro de alunos e planos e registro de pagamentos, aplicando conceitos de POO e organização em camadas (model, repository e service).",
        tecs: ["Java"],
        repositorio: "https://github.com/LucasGmacielB/Sistema-de-gestao-de-academias",
        projetoOnline: ""
    },
    {
        imagem: "/images/projetos/Portfolio.png",
        nomeProjeto: "Meu Portfolio",
        descricao: "Projeto de portfólio desenvolvido com React, Next.js, Tailwind CSS e TypeScript, criado para apresentar meus projetos mais relevantes de forma organizada, com foco em performance e uma interface simples e responsiva.",
        tecs: ["React", "Next.js", "TypeScript", "Tailwind"],
        repositorio: "https://github.com/LucasGmacielB/my-repository",
        projetoOnline: ""
    }
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
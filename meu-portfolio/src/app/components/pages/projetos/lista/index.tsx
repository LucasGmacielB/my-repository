'use client'

import { motion } from "framer-motion"
import { CardProjeto } from "./cardProjeto"

const projetos = [
    {
        imagem: "/images/projetos/Portfolio.png",
        descricaoImagem: "portfolio",
        nomeProjeto: "Meu portfolio",
        descricaoProjeto: "Portfólio desenvolvido com React, Next.js, Tailwind CSS e TypeScript para apresentar meus projetos de forma organizada, com foco em performance e responsividade.",
        tecnologias: "React, NextJs, TypeScript, Tailwind",
        repositorio: "https://github.com/LucasGmacielB/my-repository"
    },
    {
        imagem: "/images/projetos/javaProjeto.jpg",
        descricaoImagem: "portfolio",
        nomeProjeto: "Sistema para gestão de academias",
        descricaoProjeto: "Sistema de gerenciamento de academia em Java, com cadastro de alunos, planos e pagamentos, aplicando POO e organização em camadas.",
        tecnologias: "Java, POO",
        repositorio: "https://github.com/LucasGmacielB/Sistema-de-gestao-de-academias",
    },
    {
        imagem: "/images/projetos/moneyControl.jpg",
        descricaoImagem: "Money Control",
        nomeProjeto: "MoneyControl",
        descricaoProjeto: "Aplicativo mobile de controle financeiro desenvolvido com Java no Android Studio, utilizando Room (SQLite) para persistência de dados.",
        tecnologias: "Android estudio, Java",
        repositorio: "https://github.com/LucasGmacielB/MoneyControl",
        projetoOnline: "https://drive.google.com/file/d/1RH6uIMRFcG_SmVjnc4B6b01HPvCHUP4v/view"
    },
    {
        imagem: "/images/projetos/vivaLeve.png",
        descricaoImagem: "Viva leve",
        nomeProjeto: "Viva leve",
        descricaoProjeto: "Projeto de site institucional desenvolvido para a disciplina de Introdução à Programação para Web, com foco em bem-estar e saúde.",
        tecnologias: "HTML, CSS, JavaScript",
        repositorio: "https://github.com/LucasGmacielB/viva-leve-site",
        projetoOnline: "https://viva-leve-site.vercel.app/index.html"
    }

]

export const ListaProjetos = () => {
    return(
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
            {projetos.map((p, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                >
                    <CardProjeto
                        imagem={p.imagem}
                        descricaoImagem={p.descricaoImagem}
                        nomeProjeto={p.nomeProjeto}
                        descricaoProjeto={p.descricaoProjeto}
                        tecnologias={p.tecnologias}
                        repositorio={p.repositorio}
                        projetoOnline={p.projetoOnline}
                    />
                </motion.div>
            ))}
        </section>
    )
}
'use client'

import { Titulo } from "@/app/components/titulo"
import { ConhecimentoTec } from "./conhecimentosTec"
import { TbBrandNextjs } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { FaReact, FaFigma, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql, SiRender, SiSpring } from "react-icons/si";
import { PiFileSqlDuotone } from "react-icons/pi";
import { RiSupabaseLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const conhecimentos = [
    {
        categoria: "Back-end",
        tecs: [
            { icon: <FaJava/>, nome: 'Java',},
            { icon: <PiFileSqlDuotone />, nome: 'SQL'},
            { icon: <FaNodeJs />, nome: 'NodeJs'},
            { icon: <SiSpring />, nome: 'Spring boot'},
        ]
    },
    {
        categoria: "Front-end",
        tecs: [
            { icon: <FaReact/>, nome: 'React',},
            { icon: <TbBrandNextjs/>, nome: 'Next.js'},
            { icon: <RiTailwindCssFill />, nome: 'Tailwind'},
            { icon: <FaHtml5 />, nome: 'HTML'},
            { icon: <FaCss3Alt />, nome: 'CSS'},

        ]
    },
    {
        categoria: "Ferramentas e Tecnologias",
        tecs: [
            { icon: <FaGitAlt />, nome: 'Git'},
            { icon: <FaGithub />, nome: 'GitHub'},
            { icon: <IoLogoVercel />, nome: 'Vercel'},
            { icon: <SiRender />, nome: 'Render'},
            { icon: <FaFigma/>, nome: 'Figma'},
        ]
    },
    {
        categoria: "Banco de dados",
        tecs: [
            { icon: <GrMysql/>, nome: 'MySQL',},
            { icon: <SiPostgresql />, nome: 'PostegreSQL'},
            { icon: <RiSupabaseLine />, nome: 'Supabase'}
        ]
    }
]

export const Conhecimentos = () => {
    return(
        <section className="container py-16">
            <Titulo title="Conhecimentos" subtitle="competências" className="container py-16"/>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {conhecimentos.map((conhecimento, index) => (
                    <motion.div
                        key={index}
                        className="border border-gray-800 rounded-xl p-6"
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                    >
                        <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-4">{conhecimento.categoria}</h3>
                        <motion.div className="flex flex-col">
                        {conhecimento.tecs.map((tec, i) => (
                            <ConhecimentoTec key={i} tec={tec}/>
                        ))}
                    </motion.div>
                </motion.div>
                ))}
            </div>
        </section>
    ) 
}
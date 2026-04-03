'use client'

import { LinkProjetos } from "@/app/components/linkProjetos/linkProjetos"
import { Techs } from "@/app/components/techs"
import { motion } from "framer-motion"
import Link from "next/link"
import { HiArrowNarrowRight, HiOutlineStatusOnline } from "react-icons/hi"
import { TbBrandGithub } from "react-icons/tb"

type cardProps = {
    imagem: string
    nomeProjeto: string
    descricao: string
    tecs: string[]
    repositorio:string
    projetoOline?: string

}

export const CardsProjetos = ({imagem, nomeProjeto, descricao, tecs, repositorio, projetoOline}: cardProps) => {
    return(
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <motion.div
                className="w-full max-w-[400px] h-[284px]"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <img src={imagem} alt="" className="w-full h-full rounded-lg object-cover"/>
            </motion.div>

            <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                <h3 className="font-medium text-lg text-gray-50 flex items-center">{nomeProjeto}</h3>
                <p className="text-gray-400 mt-6">{descricao}</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 mt-6 lg:max-w-[340px]">
                    {tecs.map((tec, index) => (
                        <Techs key={index} nome={tec}/>
                    ))}
                </div>
                <div className="flex">
                    <Link href={repositorio} className="overflow-hidden" target="_blank">
                        <LinkProjetos
                            tipo="Repositório"
                            icon={<TbBrandGithub/>}
                        />
                    </Link>
                    {projetoOline && (
                        <Link href={projetoOline} className="overflow-hidden ml-2" target="_blank">
                            <LinkProjetos
                                tipo="Projeto Online"
                                icon={<HiOutlineStatusOnline />}
                            />
                        </Link>
                    )}
                </div>
                
               
            </motion.div>
        </div>
    )
}
'use client'

import { Techs } from "@/app/components/techs"
import Image from "next/image"
import { IoMdDownload } from "react-icons/io";
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb';
import { delay, motion } from 'framer-motion';

const CONTACTS = [
    {
        url:"https://github.com/LucasGmacielB",
        icon: <TbBrandGithub/>
    },
    {
        url:"www.linkedin.com/in/lucas-g-maciel-62b203351",
        icon: <TbBrandLinkedin/>
    },
    {
        url:"https://wa.me/5581993254458",
        icon: <TbBrandWhatsapp/>
    }
]

const tecnologias = [
    {
        nome: "Java"
    },
    {
        nome: "SQL"
    },
    {
        nome: "Phyton"
    },
    {
        nome: "Spring Boot"
    },
    {
        nome: "React.js"
    },
]

export const Perfil = () => {
    return(
        <section className="w-full lg:h-[800px] bg-[url('/images/fundo3.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[150px]">
            <div className="container flex itens-start justify-between flex-col-reverse lg:flex-row">
                <motion.div 
                    className="w-full lg:max-w-[530px]"
                    initial={{ opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                >
                    <p className="font-mono text-blue-500 mt-3">Olá, tubo bem? Meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Lucas Gabriel</h2>

                    <div className="text-gray-400 my-6 text-sm sm:text-base">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate fuga optio, facilis neque earum molestias veritatis aut at esse culpa saepe perspiciatis ipsa dolorem provident! Unde quasi laborum mollitia commodi!</p>
                    </div>

                    <div className=" flex flex-wrap gap-y-4 gap-x-3 lg:max-w-[340px]">
                        {tecnologias.map((p, i) => (
                            <Techs 
                                nome={p.nome}
                                initial={{opacity: 0, scale: 0}}
                                whileInView={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0}}
                                transition={{duration: 0.5, delay: i * 0.1}}
                            />
                        ))}
                    </div>

                    <div className="flex items-center text-gray-600  mt-6 sm:mt-10 gap-5">

                        <a href="/cv.pdf" target="_blank" className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium text-blue-400 border border-blue-500/30 bg-blue-500/20 hover:bg-blue-500/30 transition-all">
                            <p>Baixar CV</p>
                            <IoMdDownload />
                        </a>
                        
                        <div className="flex gap-1 text-3xl">
                            {CONTACTS.map(contact =>(
                                <a href={contact.url} target="_blank" className="hover:text-gray-100 transition-colors">{contact.icon}</a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 200, scale: 0.5}}
                    whileInView={{opacity: 1, y: 0, scale: 1}}
                    exit={{opacity: 0, y: 200, scale: 0.5}}
                    transition={{duration: 0.5}}
                >
                    <Image
                        width={420}
                        height={404}
                        src="/images/fotoPerfil.png"
                        alt="foto de perfil"
                        className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] shadow-2xl rounded-lg"
                    />
                </motion.div>
            </div>


        </section>
    )
}
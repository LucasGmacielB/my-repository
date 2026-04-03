import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb"
import { FaInstagram } from "react-icons/fa";
import { Titulo } from "../titulo"
import { BotaoSocial } from "./botaoSocial"

export const Contatos = () => {
    const texto = "text-blue-500 mb-2 mt-8"

    return(
        <section className="py-16 flex flex-col items-center justify-center bg-gray-950">
            <Titulo title="Vamos conversar?" subtitle="contatos" className="mb-10"/>
            <div className="w-full max-w-[360px] mx-auto bg-gray-600/35 rounded-lg ">
                <div className="m-3">
                    <h3 className="text-blue-500 mb-2">ENDEREÇO</h3>
                    <p>Recife, Pernanbuco, Brasil</p>
                    <h3 className={texto}>E-MAIL</h3>
                    <p>lucas.macielbarros0@gmail.com</p>
                    <h3 className={texto}>SOCIAL</h3>
                </div> 
                <div className="grid grid-cols-3 m-3 gap-y-3">
                        <BotaoSocial link="https://www.linkedin.com/in/lucas-g-maciel-62b203351" nome="LinkedIn" icon={<TbBrandLinkedin/>}/>
                        <BotaoSocial link="https://github.com/LucasGmacielB" nome="GitHub" icon={<TbBrandGithub/>}/>
                        <BotaoSocial link="https://wa.me/5581993254458" nome="WhatsApp" icon={<TbBrandWhatsapp/>}/>
                        <BotaoSocial link="https://www.instagram.com/_lucasgb._" nome="Instagram" icon={<FaInstagram/>}/>
                </div>
            </div>
        </section>
    )
}
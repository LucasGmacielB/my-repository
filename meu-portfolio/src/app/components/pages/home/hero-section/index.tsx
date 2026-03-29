import { Techs } from "@/app/components/techs"
import Image from "next/image"
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp, TbBrandGmail } from 'react-icons/tb';

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
    },
    {
        url:"mailto:lucas.macielbarros01@gmail.com",
        icon: <TbBrandGmail/>
    }
]

export const HeroSection = () => {
    return(
        <section className="w-full lg:h-[730px] bg-[url('/images/fundo3.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[150px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-blue-500 mt-3">Olá, tubo bem? Meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Lucas Gabriel</h2>

                    <div className="text-gray-400 my-6 text-sm sm:text-base">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate fuga optio, facilis neque earum molestias veritatis aut at esse culpa saepe perspiciatis ipsa dolorem provident! Unde quasi laborum mollitia commodi!</p>
                    </div>

                    <div className=" flex flex-wrap gap-y-4 gap-x-3 lg:max-w-[340px]">
                        <Techs nome="Java"/>
                        <Techs nome="SQL"/>
                        <Techs nome="Phyton"/>
                        <Techs nome="Spring Boot"/>
                        <Techs nome="React.js"/>
                    </div>

                    <div className="flex items-center text-gray-600  mt-6 sm:mt-10 gap-5">

                        <div className="bg-blue-500/50 text-gray-50 p-3 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                            <p>Contatos</p>
                        </div>
                        
                        <div className="flex gap-1 text-3xl">
                            {CONTACTS.map(contact =>(
                                <a href={contact.url} target="_blank" className="hover:text-gray-100 transition-colors">{contact.icon}</a>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <Image
                        width={420}
                        height={404}
                        src="/images/fotoPerfil.png"
                        alt="foto de perfil"
                        className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] shadow-2xl rounded-lg"
                    />
                </div>
            </div>


        </section>
    )
}
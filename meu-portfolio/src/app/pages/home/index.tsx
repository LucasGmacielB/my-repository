import { Techs } from "@/app/components/header/techs"
import Image from "next/image"

export const HeroSection = () => {
    return(
        <section className="w-full h-[730px] bg-[url('/images/fundo3.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[200px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-blue-500">Olá, tubo bem? Meu nome é</p>
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

                    <div>
                        contatos
                    </div>
                </div>

                <div>
                    <Image
                        width={420}
                        height={404}
                        src="/images/logo.jpg"
                        alt="foto de perfil"
                    />
                </div>
            </div>


        </section>
    )
}
import { Techs } from "@/app/components/techs"
import Link from "next/link"
import { HiArrowNarrowRight } from "react-icons/hi"

type cardProps = {
    imagem: string
    nomeProjeto: string
    descricao: string
    tecs: string[]
    link:string

}

export const CardsProjetos = ({imagem, nomeProjeto, descricao, tecs, link}: cardProps) => {
    return(
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full max-w-[400px] h-[284px]">
                <img src={imagem} alt="" className="w-full h-full rounded-lg object-cover"/>
            </div >
            <div className="flex-1">
                <h3 className="font-medium text-lg text-gray-50 flex items-center">{nomeProjeto}</h3>
                <p className="text-gray-400 mt-6">{descricao}</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 mt-6 lg:max-w-[340px]">
                    {tecs.map((tec, index) => (
                        <Techs key={index} nome={tec}/>
                    ))}
                </div>

                <Link href={link} className="inline-flex" target="_blank">
                    <button className="flex items-center justify-center gap-2 h-[40px] w-[140px] bg-gray-800/30 rounded-md px-4 hover:bg-gray-700/50 hover:text-blue-500 transition-colors">
                        <p>Ver projeto</p>
                        <HiArrowNarrowRight />
                    </button>
                </Link>
                       
            </div>
            
        </div>
    )
}
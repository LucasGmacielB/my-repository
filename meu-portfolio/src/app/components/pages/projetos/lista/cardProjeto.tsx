import { LinkProjetos } from "@/app/components/linkProjetos/linkProjetos"
import Image from "next/image"
import Link from "next/link"
import { HiOutlineStatusOnline } from "react-icons/hi"
import { TbBrandGithub } from "react-icons/tb"


type cardsProps = {
    imagem: string
    descricaoImagem: string
    nomeProjeto: string
    descricaoProjeto: string
    tecnologias: string
    repositorio: string
    projetoOnline?: string
}

export const CardProjeto = ({imagem, descricaoImagem, nomeProjeto, descricaoProjeto, tecnologias, repositorio, projetoOnline}: cardsProps) => {
    const estilo = "bg-blue-500/50 rounded-lg p-1 flex items-center gap-2 border-2 border-blue-600 hover:bg-blue-600  transition-all"
    return(
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-blue-500 opacity-80 hover:opacity-100 transition-all group">
            <div className="w-full h-48 overflow-hidden">
                <Image
                    width={380}
                    height={200}
                    src={imagem}
                    alt={descricaoImagem}
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
                />
            </div>
            <div className="flex flex-col p-8">
                <strong className="font-medium text-gray-50/85 group-hover:text-blue-500 transition-colors">{nomeProjeto}</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">{descricaoProjeto}</p>
                <span className="text-gray-300 text-sm font-medium block mt-2 truncate">{tecnologias}</span>

                <div className="mt-4 flex">
                    <Link href={repositorio} className="overflow-hidden" target="_blank">
                        <LinkProjetos
                            tipo="Repositório"
                            icon={<TbBrandGithub/>}
                        />
                    </Link>
                    {projetoOnline && (
                        <Link href={projetoOnline} className="overflow-hidden ml-2.5" target="_blank">
                            <LinkProjetos
                                tipo="Projeto Online"
                                icon={<HiOutlineStatusOnline />}
                            />
                        </Link>
                    )}
                </div>
            </div>
            
        </div>
    )
}
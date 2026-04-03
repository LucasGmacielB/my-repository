import Link from "next/link"
import { ReactNode } from "react"

type SocialProps = {
    link: string
    nome: String
    icon: ReactNode
}

export const BotaoSocial = ({ link, nome, icon }: SocialProps) => {
    return(
        <div>
            <Link href={link} className="inline-flex" target="_blank">
                <button className="cursor-pointer bg-blue-600/40 rounded-lg hover:bg-blue-600/65 transition-all">
                    <div  className="flex items-center m-1 gap-1">
                        <p className="text-2xl">{icon}</p> 
                    {nome}
                    </div>
                </button>
            </Link>
        </div>
    )
}
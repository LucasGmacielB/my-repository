import { ReactNode } from "react"

type ConhecimentoTecProps = {
    tec: {
        icon: ReactNode
        nome: string
        dataComeco?: string
    }
}

export const ConhecimentoTec = ({ tec }: ConhecimentoTecProps) => {
    return(
        <div className="bg-gray-700/20 rounded-lg p-5 text-gray-500 hover:text-blue-500 hover:bg-gray-700/30 transition-all">
            <div className="flex items-center justify-between">
                <p>{tec.nome}</p>
                {tec.icon}
            </div>
            <div className="mt-[3px]">
                {tec.dataComeco}
            </div>
        </div>
    )
}
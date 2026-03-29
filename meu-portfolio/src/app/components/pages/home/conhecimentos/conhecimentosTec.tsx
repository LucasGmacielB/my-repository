import { ReactNode } from "react"

type ConhecimentoTecProps = {
    tec: {
        icon: ReactNode
        nome: string
    }
}

export const ConhecimentoTec = ({ tec }: ConhecimentoTecProps) => {
    return(
        <div className="flex items-center gap-3 py-3 border-b border-gray-800 donw:border-0">
            <span className="text-blue-400 text-lg">{tec.icon}</span>
            <div>
                <p className="text-gray-300 text-sm font-medium">{tec.nome}</p>
            </div>
        </div>
    )
}
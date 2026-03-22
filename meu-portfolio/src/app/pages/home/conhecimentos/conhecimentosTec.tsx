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
        <div className="bg-gray-700">
            <div className="flex">
                <p>{tec.nome}</p>
                {tec.icon}
            </div>
            <div>
                {tec.dataComeco}
            </div>
        </div>
    )
}
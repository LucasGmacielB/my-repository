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
        <div className="bg-gray-700 w-[190px] h-[80px] rounded-lg ">
            <div className="flex justify-between">
                <p>{tec.nome}</p>
                {tec.icon}
            </div>
            <div className="flex justify-center mt-[10px]">
                {tec.dataComeco}
            </div>
        </div>
    )
}
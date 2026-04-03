import { cn } from "@/app/lib/utils"
import { ReactNode } from "react"

type LinkProps = {
    tipo: string
    icon: ReactNode
    className?: string
}

export const LinkProjetos = ({ tipo, icon, className }: LinkProps) => {
    return(
        <div>
            <button className={cn("bg-blue-500/50 rounded-lg p-1 flex items-center gap-2 border-2 border-blue-600 hover:bg-blue-600  transition-all",{className})}>
                {tipo}
                {icon}
            </button>
        </div>

    )
}
import { cn } from "@/app/lib/utils"

type TituloSecao = {
    title:string
    subtitle:string
    className?:string
}

export const Titulo = ({title, subtitle, className}: TituloSecao) => {
    return(
        <div className={cn('flex flex-col gap-4', className)}>
            <span className="font-mono text-sm text-blue-500">{`<${subtitle}/>`}</span>
            <h3 className="text-3xl font-medium">{title}</h3>
        </div>
    )
}
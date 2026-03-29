import { cn } from "@/app/lib/utils"

type divisoriaProps = {
    className?: string
}

export const Divisoria = ({ className }: divisoriaProps) => {
    return(
        <div className={cn('w-full my-8 border-b border-b-gray-700', className)}/>
    )
}
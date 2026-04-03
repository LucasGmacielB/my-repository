import { motion } from "framer-motion"
import { ReactNode } from "react"

type ConhecimentoTecProps = {
    tec: {
        icon: ReactNode
        nome: string
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export const ConhecimentoTec = ({ tec }: ConhecimentoTecProps) => {
    return(
        <motion.div variants={itemVariants} className="flex items-center gap-3 py-3 border-b border-gray-800">
            <span className="text-blue-400 text-lg">{tec.icon}</span>
            <div>
                <p className="text-gray-300 text-sm font-medium">{tec.nome}</p>
            </div>
        </motion.div>
    )
}
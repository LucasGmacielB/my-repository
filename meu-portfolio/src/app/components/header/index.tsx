'use client'

import Link from "next/link"
import { NavItem } from "./nav-item"
import { motion } from "framer-motion"


const NAV_ITENS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projetos',
        href: '/projects'
    }
]

export const Header = () => {
    return (
        <motion.header 
            className="absolute top-0 w-full z-10 h-24 flex items-center"
            initial={{top: -100}}
            animate={{top: 0}}
            transition={{duration: 0.5}}
        >
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <img src="/images/logo.png" alt="logo" width={58} height={49}/>
                </Link>
                <nav className="flex items-center gap-4 sm:gap-10">
                    {NAV_ITENS.map(item => (
                        <NavItem label={item.label} href={item.href} key={item.label}/>
                    ))}
                </nav>
            </div>
        </motion.header>
    )
}
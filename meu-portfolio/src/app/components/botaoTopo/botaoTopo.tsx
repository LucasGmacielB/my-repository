'use client'

import { useState, useEffect } from "react"
import { HiArrowNarrowUp } from "react-icons/hi"

export const BotaoTopo = () => {
    const [visivel, setVisivel] = useState(false)

    useEffect(() => {
    const handleScroll = () => {
        setVisivel(window.scrollY > window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!visivel) return null

    return(
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 hover:bg-blue-500/30 transition-all"
        >
            <HiArrowNarrowUp className="text-xl"/>
        </button>
    )
}
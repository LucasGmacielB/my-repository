'use client'
import { motion } from 'framer-motion';
import { Component, ComponentProps } from 'react';

type nomeTechs = ComponentProps<typeof motion.span> & {
    nome : string;
}

export const Techs = ({ nome, ...props } : nomeTechs) => {
    return(
        <motion.span className="text-blue-500 bg-blue-900/75 text-sm py-1 px-3 rounded-lg" {...props}>
            {nome}
        </motion.span>
    )
}
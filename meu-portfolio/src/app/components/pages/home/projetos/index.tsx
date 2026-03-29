import { Divisoria } from "@/app/components/linha-divisoria/linha"
import { Titulo } from "@/app/components/titulo"
import { CardsProjetos } from "./cardsProjetos"
import { HiArrowNarrowRight } from "react-icons/hi"
import Link from "next/link"

const projetos = [
    {
        imagem: "/images/fotoPerfil.png",
        nomeProjeto: "Projeto Java",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iusto ex ratione ullam, nam est, laborum qui in porro ea ad odio voluptatum aperiam. Voluptas nisi soluta inventore reprehenderit quos.",
        tecs: ["Java", "Spring", "MySQL"],
        link: "/"
    },
    {
        imagem: "/images/fundo.jpg",
        nomeProjeto: "Meu Portfolio",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iusto ex ratione ullam, nam est, laborum qui in porro ea ad odio voluptatum aperiam. Voluptas nisi soluta inventore reprehenderit quos.",
        tecs: ["Next.js", "TypeScript", "Tailwind"],
        link: "/"
    },
]

export const Projetos = () => {
    return(
        <section className="container py-16">
            <Titulo title="Meus Projetos" subtitle="destaques"/>
            <Divisoria className="mb-16"/>
            <div>
                {projetos.map((p, index) => (
                    <>
                        <CardsProjetos key={index} imagem={p.imagem} nomeProjeto={p.nomeProjeto} descricao={p.descricao} tecs={p.tecs} link={p.link}/>
                        {index < projetos.length - 1 && <Divisoria className="my-16"/>}
                    </>
                ))}
                <Divisoria className="my-16"/>
            </div>
            <div className="flex items-center justify-end gap-3">
                <p>Deseja ver mais projetos?</p>
                <Link href="/projetos">
                    <button className="flex items-center justify-center gap-2 h-[35px] w-[170px] bg-gray-800/30 rounded-md px-4 hover:bg-gray-700/50 hover:text-blue-300 transition-colors">
                        <p>Ver projetos</p>
                        <HiArrowNarrowRight />
                    </button>
                </Link>
            </div>
            
        </section>
    )
}
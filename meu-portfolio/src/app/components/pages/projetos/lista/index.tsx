import { CardProjeto } from "./cardProjeto"

const projetos = [
    {
        imagem: "/images/Portfolio.png",
        descricaoImagem: "portfolio",
        nomeProjeto: "Meu portfolio",
        descricaoProjeto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ratione mollitia accusantium ea, nobis voluptatibus aut sunt nesciunt exercitationem totam tempore molestias nulla facilis nam molestiae eveniet minima aperiam at?",
        tecnologias: "React, NextJs, TypeScript, Tailwind",
        repositorio: "/"
    },
    {
        imagem: "/images/Portfolio.png",
        descricaoImagem: "portfolio",
        nomeProjeto: "Meu portfolio",
        descricaoProjeto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ratione mollitia accusantium ea, nobis voluptatibus aut sunt nesciunt exercitationem totam tempore molestias nulla facilis nam molestiae eveniet minima aperiam at?",
        tecnologias: "React, NextJs, TypeScript, Tailwind",
        repositorio: "/",
        projetoOnline: "/"
    },
    {
        imagem: "/images/Portfolio.png",
        descricaoImagem: "portfolio",
        nomeProjeto: "Meu portfolio",
        descricaoProjeto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ratione mollitia accusantium ea, nobis voluptatibus aut sunt nesciunt exercitationem totam tempore molestias nulla facilis nam molestiae eveniet minima aperiam at?",
        tecnologias: "React, NextJs, TypeScript, Tailwind",
        repositorio: "/"
    },
    {
        imagem: "/images/Portfolio.png",
        descricaoImagem: "portfolio",
        nomeProjeto: "Meu portfolio",
        descricaoProjeto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ratione mollitia accusantium ea, nobis voluptatibus aut sunt nesciunt exercitationem totam tempore molestias nulla facilis nam molestiae eveniet minima aperiam at?",
        tecnologias: "React, NextJs, TypeScript, Tailwind",
        repositorio: "/"
    }

]

export const ListaProjetos = () => {
    return(
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
            {projetos.map(p => (
                <CardProjeto
                    imagem={p.imagem}
                    descricaoImagem={p.descricaoImagem}
                    nomeProjeto={p.nomeProjeto}
                    descricaoProjeto={p.descricaoProjeto}
                    tecnologias={p.tecnologias}
                    repositorio={p.repositorio}
                    projetoOnline={p.projetoOnline}
                />
            ))}
        </section>
    )
}
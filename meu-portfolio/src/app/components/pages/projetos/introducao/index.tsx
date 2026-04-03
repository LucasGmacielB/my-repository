import { Titulo } from "@/app/components/titulo"

export const Introducao = () => {
    return(
        <section className="w-full h-[450px] lg:h-[630] bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
            <Titulo
                title="Meus Projetos"
                subtitle="projetos"
                className="text-center itens-center [&>h3]:text-4xl"
            />
            <div>
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                    Aqui você pode ver todos os projetos que desenvolvi, com uma visão mais completa do que venho estudando e construindo ao longo do tempo. Cada projeto representa um passo da minha evolução, mostrando as tecnologias que tenho explorado, as soluções que busquei e como venho aprimorando minhas habilidades na prática.
                </p>
            </div>
        </section>
    )
}
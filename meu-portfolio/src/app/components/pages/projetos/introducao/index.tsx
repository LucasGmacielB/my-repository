import { Titulo } from "@/app/components/titulo"

export const Introducao = () => {
    return(
        <section className="w-full h-[450px] lg:h-[630] bg-[url('/images/fundo3.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
            <Titulo
                title="Meus Projetos"
                subtitle="projetos"
                className="text-center itens-center [&>h3]:text-4xl"
            />
            <div>
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione error maxime sit repudiandae in sed aliquid reprehenderit labore, molestiae ducimus dolores porro at asperiores provident! Itaque tenetur accusantium omnis molestiae.
                </p>
            </div>
        </section>
    )
}
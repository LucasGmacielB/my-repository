type nomeTechs = {
    nome : string;
}

export const Techs = ({ nome } : nomeTechs) => {
    return(
        <span className="text-blue-500 bg-blue-900/75 text-sm py-1 px-3 rounded-lg">
            {nome}
        </span>
    )
}
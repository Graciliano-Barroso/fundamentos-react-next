export interface TituloProps {
    principal: string
    secundario?: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-zinc-300">{props.principal}</h1>
            {props.secundario && <h1 className="text-sm font-bold text-zinc-600">{props.secundario}</h1>}
            
            <hr className="border-zinc-800 mt-2" />
        </div>
    )
}
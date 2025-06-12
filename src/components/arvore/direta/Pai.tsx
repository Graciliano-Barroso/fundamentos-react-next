import Filho from "./Filho"

export interface PaiProps {
  nome: string
  sobrenome: string
  filhos: string[]
}

export default function Pai(props: PaiProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold">
        Pai: {props.nome} {props.sobrenome}
      </h3>
      <div className="py-6">
        <h5 className="text-zinc-500 text-lg py-2.5">Lista de Filhos</h5>
        {props.filhos.map((filho) => (
          <Filho 
            key={filho}
            nome={filho}
            sobrenome={props.sobrenome}
          />
        ))}
        <Filho nome="Aquiles" sobrenome={props.sobrenome} />
        <Filho nome="Binho" sobrenome={props.sobrenome} />
        <Filho nome="Eduardo" sobrenome={props.sobrenome} />
      </div>
    </div>
  )
}

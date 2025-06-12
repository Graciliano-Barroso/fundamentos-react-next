"use client";
export interface FilhoProps {
   opcoes: string[];
   opçãoSelecionada: (opcao: string) => void;
}

export default function Filho(props: FilhoProps) {
   return (
      <div className="flex flex-col gap-3">
         {props.opcoes.map(opcao => {
            return (
               <button key={opcao} className="botao azul" onClick={() => props.opçãoSelecionada?.(opcao)}>
                  {opcao}
               </button>
            );
         })}
      </div>
   );
}

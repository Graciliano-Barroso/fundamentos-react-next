"use client";

import useContador from "@/data/hook/useContador";

export default function LadoDireito() {
   const { incrementar, decrementar } = useContador();

   return (
      <div className="flex-1 flex flex-col gap-10 bg-blue-800 p-8 rounded-xl items-center">
         <span className="text-3xl font-bold">Ações</span>
         <div className="flex gap-5">
            <button className="botao verde" onClick={incrementar}>
               Incremento
            </button>
            <button className="botao vermelho" onClick={decrementar}>
               Decremento
            </button>
         </div>
      </div>
   );
}

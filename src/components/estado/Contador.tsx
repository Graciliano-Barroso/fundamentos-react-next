"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export interface ContadorProps {
    valorInicial?: number;
}

export default function Contador(props: ContadorProps) {
   const [numero, alterarNumero] = useState(props.valorInicial ?? 0);

   function incrementar() {
      alterarNumero(numero + 1);
   }

   function decrementar() {
      alterarNumero(numero - 1);
   }

   return (
      <div>
         <h2 className="text-xl font-bold text-center">Contador</h2>
         <div className="flex flex-col items-center justify-center gap-5">
            <span className="text-6xl font-semibold">{numero}</span>
            <div className="flex gap-3">
               <button onClick={incrementar}>
                  <IconPlus />
               </button>
               <button onClick={decrementar}>
                  <IconMinus />
               </button>
            </div>
         </div>
      </div>
   );
}

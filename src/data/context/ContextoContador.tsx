"use client";
import { createContext, useState } from "react";

// Contexto -> Dados
export interface ContextoContadorProps {
    contador: number;
    incrementar: () => void;
    decrementar: () => void;
}

const ContextoContador = createContext<ContextoContadorProps>({} as any);

// Provedor -> Distribuir os Dados
export function ProvedorContador(props: any) {

    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1);
    }

    function decrementar() {
        setContador(contador - 1);
    }

   return (
      <div className="border-4 border-purple-500 p-4">
         <ContextoContador.Provider value={{
            contador,
            incrementar,
            decrementar
         }}>
            {props.children}
         </ContextoContador.Provider>
      </div>
   );
}

export default ContextoContador;

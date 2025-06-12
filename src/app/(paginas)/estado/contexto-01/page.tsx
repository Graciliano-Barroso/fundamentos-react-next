"use client";
import LadoDireito from "@/components/estado/contexto-01/LadoDireito";
import LadoEsquerdo from "@/components/estado/contexto-01/LadoEsquerdo";
import Titulo from "@/components/templates/Titulo";
import { useState } from "react";

export default function EstadoBasico04() {
   const [nome, setNome] = useState<string>("Pedro");
   return (
      <div className="flex flex-col gap-7">
         <Titulo
            principal="Usando Context API #01"
            secundario="Exemplo de gerenciamento de estado com React"
         />
         <div className="flex gap-5">
            <LadoEsquerdo />
            <LadoDireito />
         </div>
      </div>
   );
}

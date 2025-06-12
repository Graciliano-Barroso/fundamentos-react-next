"use client";
import UsandoAPIs from "@/components/estado/UsandoAPIs";
import Titulo from "@/components/templates/Titulo";
import { useState } from "react";

export default function EstadoBasico04() {
   const [nome, setNome] = useState<string>("Pedro");
   return (
      <div className="flex flex-col gap-7">
         <Titulo
            principal="Usando UseEffect #02"
            secundario="Exemplo de gerenciamento de estado com React"
         />
         <div className="flex flex-col gap-10">
            <UsandoAPIs />
         </div>
      </div>
   );
}

"use client";
import ChuckNorrisJoke from "@/components/estado/ChuckNorisJoke";
import Titulo from "@/components/templates/Titulo";
import { useState } from "react";

export default function EstadoBasico03() {
   const [nome, setNome] = useState<string>("Pedro");
   return (
      <div className="flex flex-col gap-7">
         <Titulo
            principal="Usando UseEffect #01"
            secundario="Exemplo de gerenciamento de estado com React"
         />
         <div className="flex flex-col gap-10">
            <ChuckNorrisJoke />
         </div>
      </div>
   );
}

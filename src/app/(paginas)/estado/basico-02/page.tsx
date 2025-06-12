"use client";
import Formulario from "@/components/estado/Formulario";
import Titulo from "@/components/templates/Titulo";
import { useState } from "react";

export default function EstadoBasico02() {
   const [nome, setNome] = useState<string>("Pedro");
   return (
      <div className="flex flex-col gap-7">
         <Titulo
            principal="Usando Estado #02"
            secundario="Exemplo de gerenciamento de estado com React"
         />
         <div className="flex flex-col gap-10">
            <Formulario />
         </div>
      </div>
   );
}

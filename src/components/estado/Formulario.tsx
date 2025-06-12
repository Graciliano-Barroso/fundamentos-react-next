"use client";
import { useState } from "react";

export default function Formulario() {
   let nomeUsuario: string = "Pedro";
   const [nome, setNome] = useState<string>(nomeUsuario);
   return (
      <div className="flex flex-col gap-4 ">
         <label>
            {nome} | {nomeUsuario}
         </label>
         <input
            type="text"
            value={nome}
            className="input border px-2 py-1 text-sm w-70 rounded"
            placeholder="Informe seu nome"
            onChange={e => {
               nomeUsuario = e.target.value;
               setNome(e.target.value);
               console.log(nomeUsuario);
            }}
            autoFocus
         />
         <button
            className="botao azul px-3 py-1 w-70"
            onClick={() => setNome("Léia")}
         >
            Alterar
         </button>
      </div>
   );
}

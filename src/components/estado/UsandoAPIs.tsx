"use client";
import { useEffect, useState } from "react";

export default function UsandoAPIs() {
   const [url, setUrl] = useState<string>("");
   const [dados, setDados] = useState<any>(null);

   async function buscarDados() {
      try {
         new URL(url); // Verifica se a URL é válida
      } catch {
         setDados({ error: "URL inválida" });
         return;
      }

      try {
         const response = await fetch(url);
         const data = await response.json();
         setDados(data);
      } catch {
         setDados({ error: "Erro ao buscar dados da API" });
      }
   }

   useEffect(() => {
      buscarDados();
   }, [url]);

   return (
      <div className="flex flex-col gap-7 items-start">
         <input
            type="text"
            className="input "
            value={url}
            size={70}
            onChange={e => setUrl(e.target.value)}
            placeholder="Digite uma URL de API"
         />
         <pre>
            <code>{JSON.stringify(dados, null, 2)}</code>
         </pre>
         <button
            className="botao azul"
            onClick={buscarDados}
            disabled={!url.trim()}
         >
            Executar
         </button>
      </div>
   );
}

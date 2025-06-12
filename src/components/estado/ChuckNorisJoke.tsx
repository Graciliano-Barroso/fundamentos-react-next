"use client";
import useChuckNorris from "@/data/hook/useChuckNoris";

export default function ChuckNorrisJoke() {
   const { piada, buscarPiada } = useChuckNorris();

   return (
      <div className="flex flex-col gap-7 items-start">
         <span className="text-2xl">{piada}</span>
         <button onClick={buscarPiada} className="botao azul">
            Obter Piada
         </button>
      </div>
   );
}

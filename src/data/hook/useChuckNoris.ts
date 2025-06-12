"use client";
import { useEffect, useState } from "react";

export default function useChuckNorris() {
   const [piada, setPiada] = useState<string>("Carregando...");

   async function buscarPiada() {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setPiada(data.value);
   }

   useEffect(() => {
      buscarPiada();
   }, []);

   return {
      piada,
      buscarPiada,
   };
}

"use client";
import Titulo from "@/components/templates/Titulo";

export default function ExemploBotao() {
    function executar(texto: string) {
        alert(`A função foi executada com texto ${texto}!!!`)
    }

    return (
        <div>
            <Titulo
                principal="Exemplo de Botão"
                secundario="Como utilizar botão com o React"
            />
            <div className="flex gap-3 py-7">
                <button className="botao azul" onClick={() => executar("Bom dia")}>Executar</button>
                <button className="botao azul" onClick={() => executar("Boa tarde")}>Executar</button>
            </div>
        </div>
    )
}
import Pai from "@/components/arvore/direta/Pai";
import Titulo from "@/components/templates/Titulo";

export default function ComunicacaoDireta() {
    return (
        <div className="flex flex-col gap-7">
            <Titulo 
                principal="Comunicação Direta"
                secundario="Exemplo de Comunicação Direta entre componentes"
            />
            <Pai nome="Timóteo" sobrenome="Assunsão"
            filhos={["Ana", "Léia", "Noeme", "Liene", "Thais"]} />
        </div>
    )
}
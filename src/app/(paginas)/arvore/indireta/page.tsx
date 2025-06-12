import Pai from "@/components/arvore/indireta/Pai";
import Titulo from "@/components/templates/Titulo";

export default function ComunicacaoIndireta() {
    return (
        <div>
            <Titulo
                principal="Comunicação Indireta"
                secundario="Exemplo de Comunicação Indireta entre componentes"
            />
            <div className="flex py-7">
                <Pai />
            </div>
        </div>
    )
}
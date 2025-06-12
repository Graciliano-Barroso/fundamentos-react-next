import Contador from "@/components/estado/Contador";
import Titulo from "@/components/templates/Titulo";

export default function EstadoBasico() {
    return (
        <div className="flex flex-col gap-7">
            <Titulo 
                principal="Usando Estado #01"
                secundario="Exemplo de gerenciamento de estado com React"
            />
            <div className="flex flex-col gap-10">
                <Contador valorInicial={1000} />
                <Contador valorInicial={10000} />
                <Contador valorInicial={-550} />
            </div>
            
        </div>
    )
}
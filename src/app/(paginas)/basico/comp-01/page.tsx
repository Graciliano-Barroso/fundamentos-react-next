import Aprovado from "@/components/exercicios/Aprovado";

export default function CriandoComponentes01() {

    const listaDeAprovados = [
        "Rebeca",
        "Guilherme",
        "Maria",
        "Tiago",
        "Pedro"
    ]

    return (
        <div className="container">
            <div className="exercicio">
                <h1>Criando Componentes #01</h1>
                <div className="conteudo">
                    <div className="flex flex-col gap-3">
                        {listaDeAprovados.map(nome => {
                            return <Aprovado key={nome} nome={nome} />
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
}
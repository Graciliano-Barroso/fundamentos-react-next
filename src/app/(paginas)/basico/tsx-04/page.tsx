export default function ExemploJSX04() {

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
                            return (
                                <div key={nome} className="flex justify-between bg-black p-3 rounded md">
                                    <span className="text-red-500">{nome}</span>
                                    <div className="flex gap-2">
                                        <button className="bg-blue-500 p-2 text-md rounded-md">Editar</button>
                                        <button className="bg-red-500 p-2 text-md rounded-md">Excluir</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
}
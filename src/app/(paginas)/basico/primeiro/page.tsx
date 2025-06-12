export default function PrimeiroComponente() {
  return (
    <div className="flex flex-col gap-3 p-8">
      <h1 className="text-3xl font-bold">Primeiro Componente</h1>
      <p className="text-sm text-zinc-400">Subtitulo da nossa página</p>
      <div>
        <span>Conteúdo</span>
      </div>
      <button className="botao vermelho">Salvar</button>
    </div>
  );
}
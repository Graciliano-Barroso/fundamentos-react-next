import Link from "next/link";

export default function Teste() {
    return (
        <div>
            <div>Página Produtos</div>
            <Link href="/produtos">Navegar para Produtos</Link>
        </div>
    );
  }
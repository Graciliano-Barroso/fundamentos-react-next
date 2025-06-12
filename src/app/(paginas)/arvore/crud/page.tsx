import CadastroUsuario from "@/components/arvore/crud/CadastroUsuario";
import Titulo from "@/components/templates/Titulo";

export default function Cadastro() {
    return (
        <div className="flex flex-col gap-7">
            <Titulo 
                principal="Cadastro de Usuários"
                secundario="Criação, alteração, consulta e exclusão de usuários"
            />
            <CadastroUsuario />
        </div>
    );
}
"use client";
import todosOsUsuarios from "../../../data/constants/usuarios";
import { useState } from "react";
import Usuario from "@/data/model/Usuario";
import ListaUsuarios from "./ListaUsuarios";
import { FormUsuario } from "./FormUsuario";
import Id from "@/data/model/id";

export default function CadastroUsuario() {
   const [usuarioAtual, setUsuarioAtual] = useState<Partial<Usuario> | null>(
      null,
   );
   const [usuarios, setUsuarios] = useState<Usuario[]>(todosOsUsuarios);

   function selecionarUsuario(usuario: Partial<Usuario>) {
      setUsuarioAtual(usuario);
   }

   function salvarUsuario() {
      const usuarioExistente = usuarios.find((u) => u.id === usuarioAtual?.id);
      if (usuarioExistente) {
         const novosUsuarios = usuarios.map((u) => {
            return u.id === usuarioAtual?.id ? usuarioAtual : u;
         });
         setUsuarios(novosUsuarios as Usuario[]);
      } else {
         setUsuarios([...usuarios, usuarioAtual as Usuario]);
      }
      setUsuarioAtual(null);
   }

   function removerUsuario(usuario: Usuario) {
      const todosMenosUsuarioInformado = usuarios.filter(
         u => u.id !== usuario.id,
      );
      setUsuarios(todosMenosUsuarioInformado);
   }

   function cancelar() {
      setUsuarioAtual(null);
   }

   return (
      <div className="flex flex-col gap-5">
         <button
            className="botao verde self-end"
            onClick={() => selecionarUsuario({ id: Id.novo() })}
         >
            Novo Usuário
         </button>
         {usuarioAtual ? (
            <FormUsuario
               usuario={usuarioAtual}
               alterarUsuario={setUsuarioAtual}
               salvar={salvarUsuario}
               cancelar={cancelar}
            />
         ) : (
            <ListaUsuarios
               usuarios={usuarios}
               selecionarUsuario={selecionarUsuario}
               removerUsuario={removerUsuario}
            />
         )}
      </div>
   );
}

"use client";
import Usuario from "@/data/model/Usuario";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

export default interface FormUsuarioProps {
   usuario: Partial<Usuario>;
   alterarUsuario?: (usuario: Partial<Usuario>) => void;
   salvar: (usuario: Partial<Usuario>) => void;
   cancelar?: () => void;
}

export function FormUsuario(props: FormUsuarioProps) {
   const { usuario, alterarUsuario, salvar, cancelar } = props;
   const [showPassword, setShowPassword] = useState(false);

   return (
      <div className="flex flex-col gap-4">
         <div className="flex flex-col gap-1">
            <label>Nome</label>
            <input
               type="text"
               value={usuario.nome ?? ""}
               onChange={e => {
                  if (alterarUsuario) {
                     alterarUsuario({ ...usuario, nome: e.target.value });
                  }
               }}
               className="input"
            />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
               <label>E-mail</label>
               <input
                  type="text"
                  value={usuario.email ?? ""}
                  onChange={e => {
                     if (alterarUsuario) {
                        alterarUsuario({ ...usuario, email: e.target.value });
                     }
                  }}
                  className="input"
               />
            </div>
            <div className="flex flex-col gap-1">
               <label>Senha</label>
               <div className="relative">
                  <input
                     type={showPassword ? "text" : "password"}
                     value={usuario.senha ?? ""}
                     onChange={e => {
                        if (alterarUsuario) {
                           alterarUsuario({ ...usuario, senha: e.target.value });
                        }
                     }}
                     className="input w-full"
                  />
                  <button
                     type="button"
                     onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-blue-500"
                  >
                     {showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                  </button>
               </div>
            </div>
            <div className="flex gap-2">
               <button className="botao azul" onClick={() => salvar(usuario)}>Salvar</button>
               <button className="botao cinza" onClick={cancelar}>
                  Cancelar
               </button>
            </div>
         </div>
      </div>
   );
}

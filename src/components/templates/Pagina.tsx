import {
   IconArrowDown,
   IconArrowsDownUp,
   IconCode,
   IconComponents,
   IconDatabase,
   IconForms,
   IconHome,
   IconNumbers,
   IconReload,
   IconSquare1,
   IconUsers,
} from "@tabler/icons-react";
import AreaLateral from "./AreaLateral";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Rodape from "./Rodape";
import MenuLabel from "./MenuLabel";

export interface PaginaProps {
   children: any;
}

export default function Pagina(props: PaginaProps) {
   return (
      <div className="flex flex-col min-h-screen">
         <Cabecalho />
         <div className="flex flex-1">
            <AreaLateral>
               <Menu>
                  <MenuLabel>Componentes</MenuLabel>
                  <MenuItem icone={IconHome} link="/" texto="Início" />
                  <MenuItem
                     icone={IconSquare1}
                     link="/basico/primeiro"
                     texto="Primeiro Componente"
                  />
                  <MenuItem
                     icone={IconCode}
                     link="/basico/tsx-01"
                     texto="Entendendo JSX #01"
                  />
                  <MenuItem
                     icone={IconCode}
                     link="/basico/tsx-02"
                     texto="Entendendo JSX #02"
                  />
                  <MenuItem
                     icone={IconCode}
                     link="/basico/tsx-03"
                     texto="Entendendo JSX #03"
                  />
                  <MenuItem
                     icone={IconCode}
                     link="/basico/tsx-04"
                     texto="Entendendo JSX #04"
                  />
                  <MenuItem
                     icone={IconComponents}
                     link="/basico/comp-01"
                     texto="Componentes #01"
                  />
                  <MenuItem
                     icone={IconComponents}
                     link="/basico/comp-02"
                     texto="Componentes #02"
                  />
                  <MenuItem
                     icone={IconComponents}
                     link="/basico/botao"
                     texto="Usando Botão "
                  />

                  <MenuLabel>Árvore de componentes</MenuLabel>
                  <MenuItem
                     icone={IconArrowDown}
                     link="/arvore/direta"
                     texto="Comunicação Direta"
                  />
                  <MenuItem
                     icone={IconArrowsDownUp}
                     link="/arvore/indireta"
                     texto="Comunicação Indireta"
                  />
                  <MenuItem
                     icone={IconUsers}
                     link="/arvore/crud"
                     texto="Cadastro de Usuários"
                  />

                  <MenuLabel>Gerenciamento de Estado</MenuLabel>
                  <MenuItem
                     icone={IconNumbers}
                     link="/estado/basico-01"
                     texto="Usando Estado #01"
                  />
                  <MenuItem
                     icone={IconForms}
                     link="/estado/basico-02"
                     texto="Usando Estado #02"
                  />
                  <MenuItem
                     icone={IconReload}
                     link="/estado/basico-03"
                     texto="Usando UseEffect #01"
                  />
                  <MenuItem
                     icone={IconReload}
                     link="/estado/basico-04"
                     texto="Usando UseEffect #02"
                  />
                  <MenuItem
                     icone={IconDatabase }
                     link="/estado/contexto-01"
                     texto="Usando Context API #01"
                  />
               </Menu>
            </AreaLateral>
            <main className="p-6 flex-1">{props.children}</main>
         </div>

         <Rodape />
      </div>
   );
}

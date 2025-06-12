import { ProvedorContador } from "@/data/context/ContextoContador";

export default function Layout(props: any) {
   return (
         <ProvedorContador>{props.children}</ProvedorContador>
   );
}

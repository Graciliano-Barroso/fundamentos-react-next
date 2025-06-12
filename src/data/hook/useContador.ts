import { useContext } from "react";
import ContextoContador from "../context/ContextoContador";

export default function useContador() {
    return useContext(ContextoContador);
}
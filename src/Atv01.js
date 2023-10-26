import React from "react";
import Relogio from './Relogio';
import Letreiro from "./Letreiro";
import { Link} from "react-router-dom";

export default function Atv01(){
    return (
        <>
            <h1>Atividade 01</h1>
            <Relogio />
            <Letreiro />
            
            <Link to="/">retorna a página principal</Link>
        </>
    );
}

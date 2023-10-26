import React,{useState} from "react";
import { Link} from "react-router-dom";
import Button from "./Button";


export default function Mulher(){
const [contador, setC] = useState(0);
    function Mais(){

      setC(contador+1);
    }

    function Menos(){
       setC(contador-1);
    }
    return (
        <>
            <h1>Mulher</h1>
            <p>{contador}</p>
            < Button contador={contador} onClick={Mais} valor={"mais"} />
            < Button contador={contador} onClick={Menos} valor={"menos"} />    
            <br/><br/>        
            <Link to="/">retorna a página principal</Link>
        </>
    );
}
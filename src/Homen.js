import React,{useState} from "react";
import { Link} from "react-router-dom";
import Button from "./Button";
import mulher from './mulher.png';


export default function Homem(){
    const [contador, setC] = useState(0);
    function Mais(){

      setC(contador+1);
    }

    function Menos(){
       setC(contador-1);
    }
    return (
        <>
            <img src={mulher} />
            <h1>Homem</h1>
            <p>{contador}</p>
            < Button contador={contador} onClick={Mais} valor={"mais"} />
            < Button contador={contador} onClick={Menos} valor={"menos"} />    
            <br/><br/>        
        
        </>
    );
}
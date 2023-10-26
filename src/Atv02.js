import React,{useState} from "react";
import { Link} from "react-router-dom";
import Button from "./Button";
import mulher from './mulher.png';
import homem from './homem.png';
//import { Button } from 'reactstrap';


export default function Atv02(props){
const [contador, setC] = useState(0);
const [contadorH, setCH] = useState(0);
    function MaisH(){

      setCH(contadorH+1);
      setC(contador+1);
    }
    function MenosH(){

        setCH(contadorH-1);
        setC(contador-1);
      }
    const [contadorM, setCM] = useState(0);
    function MaisM(){

      setCM(contadorM+1);
      setC(contador+1);
    }
    function MenosM(){

        setCM(contadorM-1);
        setC(contador-1);
      }
    return (
        <>
            <h1>Atividade 02</h1>
            <p>{contador}</p>
            <div className="pessoas">
                
                <h1>homem</h1>
                <img src={homem} />
                <h1>{contadorH}</h1>
                <Button botao={"+"} onClick={MaisH} />
                <Button botao={"-"} onClick={MenosH} />     
            
                <h1>mulher</h1>
                <img src={mulher} />
                <h1>{contadorM}</h1>
                <Button botao={"+"} onClick={MaisM} />
                <Button botao={"-"} onClick={MenosM} />    
            </div>
            
            <br/><br/>        
            <Link to="/">retorna a página principal</Link>
        </>
    );
}
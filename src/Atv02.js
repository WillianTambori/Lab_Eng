import React,{useState} from "react";
import { Link} from "react-router-dom";
import Button from "./Button";
import mulher from './mulher.png';
import homem from './homem.png';



export default function Atv02(props){
const [contador, setC] = useState(0);
const [contadorH, setCH] = useState(0);
const [contadorM, setCM] = useState(0);
    function MaisH(){

      setCH(contadorH+1);
      setC(contador+1);
    }
    function MenosH(){

        setCH(contadorH-1);
        setC(contador-1);
      }
    function MaisM(){

      setCM(contadorM+1);
      setC(contador+1);
    }
    function MenosM(){

        setCM(contadorM-1);
        setC(contador-1);
      }
    function Resetar(){
      setCM(0);
      setC(0);
      setCH(0);

    }
    return (
        <>
            

            <h1>Atividade 02</h1>
            <h1>Total</h1>
            <h1>{contador}</h1>
            
            
              
            <br/>
            <div id="ladoLado">
                <div id="Centralizado">
                <img src={homem} />
                <Button botao={"mais"} conteudo={"+"} onClick={MaisH} />
                <Button botao={"menos"} conteudo={"-"} onClick={MenosH} />     
                <h1>Homem</h1>
                <h1>{contadorH}</h1>
                </div>
              <Button botao={"resetar"} conteudo={"Resetar"} onClick={Resetar} />

                <div id="Centralizado">
                <img src={mulher} />
                <br/>
                <Button botao={"mais"} conteudo={"+"} onClick={MaisM} />
                <Button botao={"menos"} conteudo={"-"}onClick={MenosM} />    
                <h1>Mulher</h1>
                <h1>{contadorM}</h1>
                </div>
            </div>
          
            
            <br/><br/>        
            <Link to="/">retorna a página principal</Link>
        </>
    );
}
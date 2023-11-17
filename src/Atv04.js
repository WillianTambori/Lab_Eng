import React,{useState} from "react";
import { Link} from "react-router-dom";
import Button from "./Button";
import Calculadora from "./Calculadora";

export default function Atv04(){
    const [Na, setNa] = useState(0);
    const [Nb, setNb] = useState(0);
    const [Cal, setCal] = useState("C");
    const [ Ponto, setPonto] = useState(0);

    function Calculo(v){
        if(v === "."){
            return setPonto(Ponto +1)
        }
        if(v === "C"){
            return (setNa(0),setNb(0),setCal("C"),setPonto(false));
        }
        if(Cal === "C"){
            if(Number.isInteger(v)){
                if(Ponto > 0){
                    setPonto(Ponto+1);
                    return setNa(Na+(v/(10**Ponto)));
                }
                return setNa((Na*10)+v);

            }
            return(setCal(v),setPonto(0));
        }
        if(Number.isInteger(v)){
            if(Ponto > 0){
                setPonto(Ponto+1);
                return setNb(Nb+(v/(10**Ponto)));
            }
            return setNb((Nb*10)+v);
        }
        if(!Number.isInteger(v)){
            if(v === "+/-"){
                if(Cal === "+"){
                    return setCal("-");
                }else{
                    return setCal("+");
                }
            };
            switch(Cal){
                case "+":
                setNa(Na + Nb);
                break;

                case "%":
                setNa(Na * (Nb/100));
                break;
        
                case "÷":
                setNa(Na / Nb);
                break;
        
                case "x":
                setNa(Na * Nb);
                break;
        
                case "-":
                setNa(Na - Nb);
                break;
                default:
            }          
            return( setCal(v),setNb(0),setPonto(0));
        }
    }
    return(

        <>
        <h1>Calculadora</h1>
        <div className="Calculadora">
            <Calculadora Na={Na} Nb={Nb} Cal={Cal} />
            <Button botao="Btc" conteudo={"C"} onClick={()=> Calculo("C")} />
            <Button botao="Btc" conteudo={"+/-"} onClick={()=> Calculo("+/-")}/>
            <Button botao="Btc" conteudo={"%"} onClick={()=> Calculo("%")}/>
            <Button botao="Bta" conteudo={"÷"} onClick={()=> Calculo("÷")}/>
            <Button botao="Bt" conteudo={"7"} onClick={()=> Calculo(7)}/>
            <Button botao="Bt"conteudo={"8"} onClick={()=> Calculo(8)}/>
            <Button botao="Bt"conteudo={"9"} onClick={()=> Calculo(9)}/>
            <Button botao="Bta" conteudo={"x"} onClick={()=> Calculo("x")}/>
            <Button botao="Bt" conteudo={"4"} onClick={()=> Calculo(4)}/>
            <Button botao="Bt" conteudo={"5"} onClick={()=> Calculo(5)}/>
            <Button botao="Bt" conteudo={"6"} onClick={()=> Calculo(6)}/>
            <Button botao="Bta" conteudo={"-"} onClick={()=> Calculo("-")}/>
            <Button botao="Bt" conteudo={"1"} onClick={()=> Calculo(1)}/>
            <Button botao="Bt" conteudo={"2"} onClick={()=> Calculo(2)}/>
            <Button botao="Bt" conteudo={"3"} onClick={()=> Calculo(3)}/>
            <Button botao="Bta" conteudo={"+"} onClick={()=> Calculo("+")}/>
            <Button botao="Btz" conteudo={"0"} onClick={()=> Calculo(0)}/>
            <Button botao="Bt" conteudo={"."} onClick={()=> Calculo(".")}/>
            <Button botao="Bta" conteudo={"="}onClick={()=> Calculo("=")}/>


        </div>
        <br/><br/>        
            <Link to="/">retorna a página principal</Link>

        </>
    )
}


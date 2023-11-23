import React,{useState} from "react";
import { Link} from "react-router-dom";
import Card from "./Card";
import Button from "./Button";



export default function Atv05(){
    const [ind, setInd] = useState(20);
    const [acerto, setAcerto] = useState(0);
    const [jog, setJog] = useState(0);
    const id= "card";
    const [baralho, setBaralho] = useState([0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7]);
    const [baralhoB, setBaralhoB] = useState([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]);
    const cartas = baralhoB.map((carta,indice)=> <Card imagem={carta} id={id} onClick={()=>Mostrar(indice)} /> )
    
    
    function Baralhar(){
        const baralhar = baralho;
        baralhar.sort(()=> Math.random() - 0.5);
        setBaralho(baralhar);
    }
    function Mostrar(v){
        if(jog === 0){
            Baralhar();
        }
        setJog(jog+1);
        const A = baralho;
        const B = baralhoB;
        B[v] = A[v];
        if(acerto === 8){
            window.alert("vc ganhou");
            window.location.reload();
        }
        setBaralhoB(B);
        if(A[ind] === B[v] && ind !== v){
            return (setInd(20),setAcerto(acerto+1));
            
        }
        
        if(ind === 20){
            return setInd(v);
        }else{
            
            setTimeout(function(){
                B[ind]=8;
                B[v]=8},250)
            
        }   
        return(setInd(20));
        
    }
       
    return(

        <>
        
        <div className="memoria">
        <h1 id="memo" >Jogo da memoria</h1>
        <Button botao={"Bcard"} conteudo={"BARALHAR"} onClick={Baralhar} />
        <div> {cartas} </div>
        </div>
        <br/><br/>        
            <Link to="/">retorna a página principal</Link>
        </>
    )
}
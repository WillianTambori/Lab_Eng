import React,{useState} from "react";





export default function Button({botao,conteudo,onClick}){
   
    return(
        <>
        <button id= {botao}  onClick={onClick}>
            {conteudo}
        </button>
        </>
    );
}
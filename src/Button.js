import React,{useState} from "react";



export default function Button({botao,onClick}){
   
    return(
        <>
        <button  onClick={onClick}>
            {botao}
        </button>
        </>
    );
}
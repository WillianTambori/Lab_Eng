import React, { useEffect, useState } from 'react';


function Letreiro() {
  const [texto,setTexto] = useState("Venha estudar na Fatec");
  const [num, setNum] = useState(0);
  let array = [];

  useEffect(()=> {
    var tempo = setInterval(()=>{
        if(num < texto.length){
            setNum(num+1);
        }else{
            setNum(0);
        }
    },200);
    return ()=>clearInterval(tempo);
    },[num]);

    for(let i=0;i<=num;i++){
      array.push(texto[i]);
    }
 

  return (
      <h2>{
        texto.slice(0,num+1)
        }
      </h2>
    );

}

export default Letreiro;
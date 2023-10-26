
import React,{useEffect,useState} from "react"


export default function Relogio(){
    const[relogio,setR] = useState("");

    useEffect(()=>{
        const tempo= setInterval(()=>{
                var data = new Date();
                var horas = "0" + data.getHours();
                var minutos= "0" + data.getMinutes();
                var segundos = "0" + data.getSeconds();
                var texto = horas.slice(-2)+":" + minutos.slice(-2)+":" + segundos.slice(-2);
                setR(texto);
            },1000);
            return()=> clearInterval(tempo);

    },[]);

    return(
        <h1> 
            {relogio}
        </h1>
    )
}



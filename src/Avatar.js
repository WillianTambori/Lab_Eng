import React from "react";
import {getImageUrl} from "./Utils.js";

export default function Avatar({person ,size}){
    // const avatar = "https://i.imgur.com/7vQD0fPs.jpg"
    // const description = "Gregorio Y. Zara"

    return(
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            heigtht={size}
        />
    );
}
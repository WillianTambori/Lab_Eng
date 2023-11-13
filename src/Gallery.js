import Avatar from './Avatar.js'
import React from "react";

export default function Gallery(){
    return(
        <>
        <h1>
            Amazing scientistis</h1>
        <h1>Alan L.Hart</h1>
        <Profile />
        <Profile />
        <Profile />
        </>
    )
}
function Card({children}){
    return(
    <div className="card">
        {children}
    </div>
    );
}
function Profile(){
    return (
        <Card>
        <Avatar
        size={100}
        person={{
            name: "Katsuko Sarushashi",
            imageId:"YfeOqp2"
        }}
        />
        </Card>
    );
}
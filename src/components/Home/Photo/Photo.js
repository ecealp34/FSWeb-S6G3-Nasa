import React from "react";

import { useState, useEffect } from "react";

import "./Photo.css";


function Photo() {

    const [photoOfTheDay, setphotoOfTheDay] = useState(null);


useEffect(() => {

    console.log("")
}, []);

if (!props.photoOfTheDay) return <h3>Yükleniyor...</h3>;


return (
 
    <div>

        <img src={photoOfTheDay.url} alt={photoOfTheDay.title} />

        <div>

        <h1>{photoOfTheDay.title}</h1>
        
        <p>{photoOfTheDay.date}</p>

        <p>{photoOfTheDay.explanation}</p>

        </div>
    

    </div>
)};




export default Photo;
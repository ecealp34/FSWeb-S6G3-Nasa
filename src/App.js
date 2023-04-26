import React from "react";
import { useEffect } from "react";
import axios from "axios";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  
  useEffect(() => {
       axios
       .get("https://api.nasa.gov/planetary/apod?api_key=Nf7wEbCtFOniDBQB9Bb0Vh6hucBk7aJKM7KRLQ9G")
       .then((res) => {
        console.log("products:", res.data);
       })
    }, [])
  
    return (

    <div className="App">
    <header className = "App-header">
      <div>
     </div>
      <h1>NASA</h1>
      
      <nav>
        <a>Home</a>
        <a>About</a>
  
      </nav>
      </header>
     
      <input type="text" name="ara" class="search-btn" ></input>
      <button type="submit" class="btn">submit</button>

      <h2>Astronomy Photo Of The Day</h2>
     
      
      <p>
        <span role="img" aria-label='go!'>🚀</span>!
      </p>
      
    </div>
  );
}

export default App;

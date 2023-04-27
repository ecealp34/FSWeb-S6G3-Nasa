import React, { useEffect, useState } from "react";
import axios from "axios";
import ApodViewer from "./components/AppdViewer";
import "./App.css";
// import styled from 'styled'
import { Input } from "reactstrap";

// const Button = styled.button`
//   color: '#fff';
//   background-color: purple;
//   padding: 8px 16px;
//   border-radius: 4px
// `
function App() {
  
const [apod, setApod] = useState();
const [loaded, setLoaded] = useState(false);
// const [currentDate, setCurrentDate] = useState(new Date().toISOString().split("T")[0]);

function fetchApod(datePara) {
       axios
       .get("https://api.nasa.gov/planetary/apod?api_key=XwDXXy4QP4bA97QXio4j7FhWDjBdLJcIdq2NnJ94")
       .then((res) => {
        console.log("products:", res.data);
        setApod(res.data);
        setLoaded(true);
       })
       .catch((err) => {
        setLoaded(false);
       }) 
       .finally(() => {
        console.log("final")
       });
    }
    
    useEffect(() => {
      fetchApod();
   }, []);
    
  //   function fetchApod(datePara) { -
  //   }
  //   useEffect(() => {
  //     fetchApod(currentDate);
  //  }, [currentDate]);

  //  function dateChangeHandler(e) {
  //   console.log(e.target.value);
  //   setCurrentDate(e.target.value);
  //  }
 
    return (
    <div className="App">
      
        {!loaded && <p>Loading...<span role="img" aria-label='go!'>🚀</span>!</p>}
        {loaded &&<ApodViewer APPd={apod} />}
        
        
    </div> 
      
   
    );
   

  }




export default App;





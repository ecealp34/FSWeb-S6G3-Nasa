import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Home.css";


const Home = (props) => {
    return (
      <div className="header-div">
        <form className="search-form">
          <input
            type="text"
            placeholder="Arama"
          />
         <FontAwesomeIcon icon="fa-regular fa-calendar-days" />
         
        </form>
     
         
        
          
        </div>
      
    );
  };
  
  export default Home;
  
 
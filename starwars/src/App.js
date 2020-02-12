import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

// import styled from 'styled-components'
import Card from "./components/Card";

// const card = styled.div`
//   width: 100px;
//   Color: black;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   flex-wrap: wrap;
//   width: 200px;
//   height: 500px;


// `;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
//const [id, setId] = useState(0);
const [character, setCharacter] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
// function CharCard(){
  useEffect(() => {
       
  

     axios   
       .get(`https://swapi.co/api/people/`)
          
       .then(response => {
            setCharacter(response.data.results) 
          })
           
          .catch(error => console.log(error));
          },[]);

  console.log("render character data", character)
  
  
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Card character={character} /> 
      
    </div>
  );
}



export default App;

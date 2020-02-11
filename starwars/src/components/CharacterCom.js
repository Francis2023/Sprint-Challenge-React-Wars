import React from 'react';
import Card from "./Card"

const CharacterCom = props => {

console.log(props)

return (
   <div className = "Char">
     <h3>Character = {props.character.name}</h3>
     <img src = {props.character.films} />
   
   </div>


)

}


export default CharacterCom
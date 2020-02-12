import React from 'react';
//import Card from "./Card"
import {Col} from 'reactstrap'
const CharacterCom = props => {

console.log(props)

return (

    <Col xs="8" md="4" xl="4">

   <div className = "Char">
     <h3>Character = {props.character.name}</h3>
     <div>{props.character.birth_year} </div>
     <div>{props.character.eye_color}</div>
   </div>
    </Col>

)

}


export default CharacterCom
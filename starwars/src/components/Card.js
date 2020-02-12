import React from 'react';
//import styled from 'styled-components'
import CharacterCom from "./CharacterCom"
import {Row} from "reactstrap"

// const Carddiv = styled.div`
// width: 100px;
//   Color: black;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   flex-wrap: wrap;
//   width: 200px;
//   height: 500px;
//`
 

const Card = props => {
    
    console.log(props)


    return (
      <Row>
        {props.character.map(character => (
           <CharacterCom character = {character}  />
        ))}
      </Row>

    );


};


export default Card; 
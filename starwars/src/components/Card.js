import React from 'react';
import styled from 'styled-components'
import CharacterCom from "./CharacterCom"

const Carddiv = styled.div`
width: 100px;
  Color: black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  width: 200px;
  height: 500px;
`
 

const Card = props => {
    
    console.log(props)


    return (
      <div className="CharacterCard">
        {props.character.map(character => (
           <CharacterCom character = {character}  />
        ))}
      </div>

    );


};


export default Card; 
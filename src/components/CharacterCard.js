import React from "react";
import styled from 'styled-components';

const CardOne = styled.div `
    width: 40%;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 4px black;
`


export default function CharacterCard({character}) {
    console.log('Character Card props', character)
  return (
      <CardOne>
          <img src={character.image} alt={character.name} />
          <h1>{character.name}</h1>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.type}</p>
            <p>{character.gender}</p>
            <p>{character.origin.name}</p>
            <p>{character.location.name}</p>
      </CardOne>

  )
}

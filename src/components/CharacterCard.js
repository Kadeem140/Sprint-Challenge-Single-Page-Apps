import React from "react";

// id: 19
// name: "Antenna Rick"
// status: "unknown"
// species: "Human"
// type: "Human with antennae"
// gender: "Male"
// origin: {name: "unknown", url: ""}
// location: {name: "unknown", url: ""}
export default function CharacterCard({character}) {
    console.log('Character Card props', character)
  return (
      <div>
          <img src={character.image} alt={character.name} />
          <h1>{character.name}</h1>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.type}</p>
            <p>{character.gender}</p>
            <p>{character.origin.name}</p>
            <p>{character.location.name}</p>
      </div>

  )
}

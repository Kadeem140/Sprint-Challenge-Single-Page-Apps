import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from "./SearchForm";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char ,setChar] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res)
        setChar(res.data.results)
      })
      .catch(err=> console.log(err))
  }, []);

  return (
    <section className="character-list">

    <SearchForm />
      {char.map(character =>{
        return <CharacterCard character={character} key={character.id}/>
      })}
      
    </section>
  );
}

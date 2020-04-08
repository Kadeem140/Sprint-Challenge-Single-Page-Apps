import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';

export default function SearchForm(props) {

  const [response, setResponse] = useState(" ");

  const [searchResults, setSearchResults] = useState([])

  console.log('search', props.char)

  //fitler function in axios call
  //throw e.t.v into fliter
  //

  const changeHandler = (event) =>{
      setResponse(event.target.value);
  };
  const submitHandler = (event) => {
      event.preventDefault();
      // setResponse(event.target.value)
  }
  
  return (
    <section className="search-form">

      <form onSubmit={(e) => {
          e.preventDefault();
          const results = props.char.filter( (character) =>{
        return character.name.toLowerCase().includes(response)
       })
        props.setChar(results);
      }} >

        <input
          onChange={(e) => changeHandler(e)}
          value={response} 
          placeholder="Enter Character Name"
          name="name"
        />
        <button type="submit">Search</button>
      </form>

    </section>
  );
}

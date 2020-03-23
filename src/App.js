import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import LocationsList from "./components/LocationsList.js";
import Links from "./components/Links";


export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Links />
        <Route exact path="/" component={WelcomePage} />
        {/* <Route path ="/Home" component={}/> */}
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/locations" component={LocationsList} />

     
    </main>
  );
}

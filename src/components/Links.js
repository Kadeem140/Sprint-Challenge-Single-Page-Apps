import React from 'react';
import { Link } from 'react-router-dom';


export default function Links(){
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/locations">Locations</Link>
        </>
    )
          
    
}
import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard"
import styled from 'styled-components'
const CardContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function LocationsList() {
    const [location , setNewLocation] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/`)
        .then((Response) => {

            console.log('Location call results: ', Response.data.results)
            setNewLocation(Response.data.results)
        })
        .catch((err) => console.log(err))

    },[])

    return (

        <CardContainer>
            {location.map( (Locationitem, index) => {
                return (
                    <LocationCard item={Locationitem}  key={index}/>
                )

            })}

        </CardContainer>
    )


}

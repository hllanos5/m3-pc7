import React, { useState, useEffect } from 'react'
import { PokemonContext } from "./PokemonContext";

export default function PokemonProvider({children}) {

    const [offset, setOffset] = useState(0);

    //Llamar a 50 pokemones a la API
    const getAllPokemon = async(limit = 50)=>{
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await  fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();
        console.log(data);

    }

    useEffect(()=> {
        getAllPokemon();
    },[])


  return (
    <PokemonContext.Provider value={{ numero:0 }}> {children}</PokemonContext.Provider>
  )
}

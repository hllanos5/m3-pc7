import React, { useState, useEffect } from 'react'
import { useForm } from '../hook/useForm';
import { PokemonContext } from "./PokemonContext";

export default function PokemonProvider({children}) {
    const [allPokemon, setAllPokemon] = useState([]);
    const [globalPokemon, setGlobalPokemon] = useState([]);
    const [offset, setOffset] = useState(0);

    //Utilizar CustomHook  - Use Form
    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: ''
    })
    
    //Estados carga
    const[loading, setLoading] = useState(true);
    const[active, setActive] = useState(false);

    //Llamar a 50 pokemones a la API
    const getAllPokemon = async(limit = 50)=>{
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await  fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();
        
        const promises = data.results.map(async(pokemon)=> {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        })

        const results = await Promise.all(promises);
        setAllPokemon([...allPokemon, ...results]);
        setLoading(false);
    }

    //  Llamar todos los pokemones
    const getGlobalPokemons = async()=> {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await  fetch(`${baseURL}pokemon?limit=100000&offset=0`);
        const data = await res.json();
        
        const promises = data.results.map(async(pokemon)=> {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        })

        const results = await Promise.all(promises);
        setGlobalPokemon(results);
        setLoading(false);
    }

    //Llamar Pokemon por id
    const getPokemonById = async(id) => {
        const baseURL = 'https://pokeapi.co/api/v2/';
        const res = await  fetch(`${baseURL}pokemon/${id}`);
        const data = await res.json();
        return data;
    }

    useEffect(()=> {
        getAllPokemon();
    },[])

    useEffect(()=> {
        getGlobalPokemons();
    },[])


  return (
    <PokemonContext.Provider 
        value={{ 
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemon,
            globalPokemon,
            getPokemonById }}> 
        {children}
    </PokemonContext.Provider>
  )
}

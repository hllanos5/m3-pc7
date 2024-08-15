import React,{useContext} from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { CardPokemon } from './CardPokemon'

export function PokemonList() {

  const {allPokemon} = useContext(PokemonContext)
  
    return (
    <>
        <div className="card-listpokemon container">
            {
            allPokemon.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)
            }
        </div>
    </>
  )
}

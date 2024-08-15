import { PokemonContext } from "./PokemonContext";

export default function PokemonProvider({children}) {
  return (
    <PokemonContext.Provider value={{ numero:0 }}> {children}</PokemonContext.Provider>
  )
}

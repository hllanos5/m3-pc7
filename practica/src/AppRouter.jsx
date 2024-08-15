import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Navigation} from './components/Navigation'
import { PokemonPage, HomePage, SearchPage } from './pages'

export function AppRouter() {
  return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
        <Route path='pokemon/:id' element={<PokemonPage/>}/>
        <Route path='search' element={<SearchPage/>}/>
    </Route>
    <Route path='*' element={<Navigation to='/'/>}/>
  </Routes>)
}

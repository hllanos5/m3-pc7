import React from 'react'
import { Outlet } from 'react-router-dom'

export function Navigation() {
  return (
    <div>
      <h1>Navegacion</h1>
      <Outlet/>
    </div>
  )
}

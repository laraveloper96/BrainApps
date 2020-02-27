import React from 'react'
import AppNavigation from '@navigation/AppNavigation'
import { UsuarioProvider } from '@context/UsuarioContext'

function App(){
  return (
    <UsuarioProvider>
      <AppNavigation/>
    </UsuarioProvider>
  )
}

export default App

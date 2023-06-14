import React from "react"

import Rotas from "./rotas/rotas"
import AuthProvider from "./contexts/auth"

export default function App() {

  return (
    <div>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </div>
  )
}
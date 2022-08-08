import React, { createContext, useState } from 'react'
import Home from './Home';
export const userContext=createContext();
export default function App() {
    const [user,setUser]=useState("Kim Jong Un")
  return (
    <div>
      <userContext.Provider value={user}>
        <Home />
      </userContext.Provider>
    </div>
  )
}

import React, { createContext, useState } from 'react'
import Component1 from './Component1';
export const userContext=createContext();
export default function App() {
    const [user,setUser]=useState("Yuv Raj");
    
  return (
    <div>
    <userContext.Provider value={user}>
    <Component1 />
    </userContext.Provider>
    </div>
  )
}

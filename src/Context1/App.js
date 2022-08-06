import React, { createContext, useState,useContext } from 'react'
import MyComponent from './MyComponent';
const colorContext=createContext();
export default function App() {
  const [color,setColor]=useState("red")
  return (
    <colorContext.Provider value={color}>
   
      <MyComponent2 />

    </colorContext.Provider>
  )
}
function MyComponent2()
{
const color=useContext(colorContext)
return (
  <div>The color is {color}</div>
)
}
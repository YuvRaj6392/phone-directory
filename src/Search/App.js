import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Search from './Search'
export default function App() {
    const [input,setInput]=useState("")
    const onInputChange=(val)=>{
        setInput(val);
        console.log(` ${val}`);
    }
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Search input={input} onInputChange={onInputChange} />} />
        </Routes>
      </Router>
    </div>
  )
}

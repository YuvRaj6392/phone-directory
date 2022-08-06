import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
export default function App() {
    const [count,setName]=useState(0);
    let history=useHistory();
const updateCount=()=>{
        setName(count+1)
    }
    function toHome()
    {
history.push("/home");
    }
  return (
    <div>
      <button onClick={updateCount}>UpdateCount</button>
      <h3>count: {count}</h3>
      <button onClick={toHome}>Home</button>
      <Router>
        
      </Router>
    </div>
  )
}

import React from 'react'
import Balance from './Balance'
import Home from './Home'
export default function App() {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <div>
        <Home />
        </div>
        <div>
        <Balance />
        </div>
    </div>
  )
}

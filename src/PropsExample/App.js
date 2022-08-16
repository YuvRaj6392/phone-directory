import React, { useState } from 'react'
import User from './User'

export default function App() {
    const [state]=useState({name:"yuvraj",password:"password"})
  return (
    <div>
        <User data={state} />
    </div>
  )
}

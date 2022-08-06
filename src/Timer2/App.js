import React, { useEffect, useState } from 'react'

export default function App() {
    const[time,setTime]=useState(Date);
    useEffect(()=>{
        setTimeout(() => {
            setTime(Date)
        }, 1000);
    })
  return (
    <div>
      The time is {time}
     
    </div>
  )
}

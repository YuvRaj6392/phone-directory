import React from 'react'
import { useState,useEffect } from 'react'
export default function Timer() {
    const [tick,setTick]=useState(0);
    const [message,setMessage]=useState("")
   useEffect(()=>{
    setTimeout(() => {
        setTick(tick+1)
        if(tick>4 )
        {
            setMessage("5 seconds have passed hurry up Yuv Raj")
        }
        if(tick>8)
        {
            setMessage("")
        }
        if(tick>20)
        {
            setMessage("10 seconds have are left duh!")
        }
        if(tick>30)
        {
          setMessage("")
        }
    }, 1000);
   },[tick])
  return (
    <div>
      {tick} seconds has passed
<br />
      {message}
    </div>
  )
}

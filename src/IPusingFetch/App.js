import React, { useEffect, useState } from 'react'

export default function App() {
    const [ip,setName]=useState("");
    useEffect(()=>{
     fetch('https://api.ipify.org/?format=json').then(res=>res.json()).then(data=>setName(data.ip))
    },[])

  return (
    <div>
        Hey there Yuv Raj  this is your IP address {ip}!
    </div>
  )
}

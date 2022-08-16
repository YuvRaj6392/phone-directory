import React, { useEffect, useState } from 'react'

export default function App() {
    const[time,setTime]=useState(Date);
    let [data,setData]=useState("")
    useEffect(()=>{
        setTimeout(() => {
            setTime(Date)
        }, 1000);
    })

useEffect(()=>{
  let a=time.split("");
  let d=[];
  for(let i=16;i<=23;i++)
  {
   d.push(a[i])
  }
  setData(d)
},[time])

  return (
    
    <div>
    The time now is {data}
     
    </div>
  )
}

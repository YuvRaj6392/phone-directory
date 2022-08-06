import React, { useState } from 'react'

export default function Main() {
    const [input1,setInput1]=useState("");
    const [input2,setInput2]=useState("")
  return (
    <div>
       <div>{input1}</div>
       <br /><br />
       <input type="text" onChange={(e)=>setInput1(e.target.value)} /> <br />

       <div>{input2}</div><br /><br />
       <input type="text" onChange={(e)=>setInput2(e.target.value)} />
    </div>
  )
}

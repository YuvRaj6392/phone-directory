import React, { useState } from 'react'
export default function Apps() {
    const [name,setName]=useState("Yuv Raj");
    const [status,setStatus]=useState("Currently I am using whatsapp");
    const [isOnline,setisOnline]=useState("false")
    const changeName =() =>{
        setName("Abhinav")
    }
  return (
    <div>
    <button onClick={changeName}>changeName</button>
      Name: {name} <br />
      status:{status} <br />
      isOnline: {isOnline} 
      <br /><br />
    </div>
  )
}

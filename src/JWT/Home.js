import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
export default function Home() {
    const history=useNavigate();
    var a=window.location.href.split("=");
        var b=a[1]
    const [name,setName]=useState(b)
 function logout()
 {
    localStorage.clear();
    history("/")
 }
 useEffect(()=>{
   var token=localStorage.getItem("token");
    if(token==null)
    {
history('/')
    }
 })
  return (
    <div>
      Welcome to the home page {name}
      <br />
      <button onClick={logout} >Logout</button>
    </div>
  )
}

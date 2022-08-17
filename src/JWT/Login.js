import { Link } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import Home from "./Home"
export default function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const history=useNavigate();
    const token="yuvjjaagker454hhsdf998@3hsjd"
  function onFormSubmit()
  {
    if(password.length>4)
    {
history(`/home?email=${email}`)
localStorage.setItem("token",token)
    }
    else
    {
        alert("failed")
    }
  }
  return (
    <div>
      <form onSubmit={onFormSubmit} >
      <label htmlFor="">Email</label>
      <input type="text" name='name'  onInput={(e)=>setEmail(e.target.value)} required/>
      <br />
      <label htmlFor="">Password</label>
      <input type="password" name='password'  onInput={(e)=>setPassword(e.target.value)} required/>
    <br />
   <button type='submit'>login</button>
      </form>
    </div>
  )
}

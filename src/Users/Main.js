import React from 'react'
import EditedUserList from './EditedUserList'
import { useState } from 'react';
export default function Main() {
    const[name,setName]=useState("Yuv Raj");
    const[password,setPassword]=useState("benzema")

  return (
    <div>
    {name} - {password}

   <EditedUserList name={name} password={password} />
    </div>
  )
}

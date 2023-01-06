import React from 'react'
import { userContext } from '../Context4/App';
import { useState,useContext } from "react";
export default function Component1() {
  const user=useContext(userContext);
  return (
    <div>
      hello {user}
    </div>
  )
}

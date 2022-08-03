import { Params, useParams } from "react-router-dom";
import React from 'react'

export default function Product() {
    const {id}=useParams();
  return (
    <div>
      We are at {id} 
    </div>
  )
}

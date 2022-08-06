import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
export default function Product() {
    const {id}=useParams();
 
  return (
    <div>
      the product no. is {id}  

    </div>
  )
}

import { useParams,useLocation } from "react-router-dom";
import React from 'react'

export default function Product() {
    const {id}=useParams();
    const location=useLocation();
  return (
    <div>
      We are at {id} 
      <br />
      hello {location.pathname}
    </div>
  )
}

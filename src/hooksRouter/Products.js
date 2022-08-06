import React from 'react'
import {Link} from "react-router-dom"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Product from './Product'
export default function Products() {

  return (
    
     
   <div>
   <div>
    Choose a particular Product to proceed checkout <br />
    <Link to='/products/111' > <button>Product1</button><br /><br /></Link>&nbsp;&nbsp;&nbsp;
    <Link to='/products/222' > <button>Product2</button><br /><br /></Link>&nbsp;&nbsp;&nbsp;
    
   </div>

   
    
   </div>

  )
}

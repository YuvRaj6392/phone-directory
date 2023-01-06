import React from 'react'
import { BrowserRouter as Router,Routes,Link,Route } from 'react-router-dom'
export default function Product() {
  return (
    <div>
    Welcome to the home page of the product
    <Link to="/101">Product1</Link>
    <Link to="/102">Product2</Link>
    </div>
  )
}

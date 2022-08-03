import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Product from './Product'
import { useState } from 'react'
export default function App() {
    const {id}=useState(1001)
  return (
    <Router>
    <nav>
       <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
       <Link to='/about'>About</Link>&nbsp;&nbsp;&nbsp;
       <Link to='/products' >Products</Link>&nbsp;&nbsp;&nbsp;
       <Link to='/products/111' >Product{id}</Link>&nbsp;&nbsp;&nbsp;

       {/* <Link to='/products/123' >Product123</Link>&nbsp;&nbsp;&nbsp; */}
    </nav>

    <Routes>
     <Route path='/' element={<Home />} />

     <Route path='/about' element={<About />} />


     <Route path='/products' element={<Products />} />
     

 

     <Route path='/products/:id' element={<Product/>} />

     



    </Routes>



    </Router>
  )
}

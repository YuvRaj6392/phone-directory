import React from 'react'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import About from './About'
import ContactUs from './ContactUs'
import Home from './Home'
import Login from './Login'
export default function Apps() {

  return (
    <div>

<Router>
 
 <Link to="/" style={{margin:'10px'}}>Home</Link>
 <Link to="/about" style={{margin:'10px'}}>About us</Link>
 <Link to="/contact" style={{margin:'10px'}}>Contact us</Link>
 <Link to="/login" style={{margin:'10px'}}>LoginIn</Link>

<Routes>

<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/contact' element={<ContactUs />} />
<Route path='/login' element={<Login />} />




</Routes>


</Router>

    </div>
  )
}

import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from './Home'
import About from './About'
import './Main.css'
export default function Main() {
  return (
    <Router>
       <nav>
    <Link to='/' className='nav-bar'>Home</Link>
    <Link to='/about' className='nav-bar'>About</Link>
    </nav>

<Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />

</Routes>

    </Router>
  )
}

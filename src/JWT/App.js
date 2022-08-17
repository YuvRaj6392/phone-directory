import React from 'react'
import Login from './Login'
import Home from './Home'

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'

export default function App() {
  return (
   
    <Router>

<Routes>
    <Route path='/' element={<Login />} />
    <Route path='/home' element={<Home />} />

</Routes>


    </Router>
  
  )
}

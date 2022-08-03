import React, { Component } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />




        </Routes>
      </Router>
    )
  }
}

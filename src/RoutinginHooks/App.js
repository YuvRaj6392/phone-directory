import React from 'react'
import { BrowserRouter as Router,Routes,Link,Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Products from './Products'
import Product from './Product'
export default function App() {
  return (
    <div>
      <Router>

        <nav>
        <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to='/about'>Aboutus</Link>&nbsp;&nbsp;&nbsp;
      <Link to='/products'>Products</Link>&nbsp;&nbsp;&nbsp;
        </nav>
        <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<Product />} />



    
        </Routes>





      </Router>
    </div>
  )
}

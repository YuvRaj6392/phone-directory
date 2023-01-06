import React from 'react'
import { BrowserRouter as Router,Routes,Link,Route } from 'react-router-dom'
import Product from './Product'
import Products from './Products'
export default function App() {
  return (
    
      <Router>
      <div>
      <Link to="/">Product</Link>
      </div>
      <Routes>
            <Route path='/' element={<Product />}   />
            <Route path='/:id' element={<Products />}   />
</Routes>

      </Router>
    
  )
}

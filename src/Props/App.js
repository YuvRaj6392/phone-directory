import React from 'react'
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom'
import Detail from './Detail'
import Home from './Home'
export default function App() {
  return (
    
      <Router>
        <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/detail' element={<Detail name="yuvraj" />} />
        </Routes>
      </Router>
     
   
  )
}

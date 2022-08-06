import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
export default function App() {
  return (
     <Router>
         <nav>
         <Link to={{pathname:'/',
                    state:'403'   
                      }}>Product1</Link>

         </nav>

      <Routes>
        <Route path='/:id'></Route>
      </Routes>


     </Router>
  )
}

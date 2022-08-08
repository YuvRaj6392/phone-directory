import React, { useState } from 'react'
import { BrowserRouter as Router,Route,Routes, useNavigate,useLocation } from 'react-router-dom'
export default function App() {
  return (
    <Router>
        <Routes>

<Route path='/home' element={<Home />} />
<Route path='/login' element={<Login />} />

        </Routes>
    </Router>
  )
}
 function Home ()
 {
    return (
        <div>
            welcome to the new application. this is the home page
        </div>
    )
 }

 
 function Login()
 {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("")
    const history=useNavigate()
    const location=useLocation();
    function authenticateUser(user,password)
 {
    let tempUser="admin"
    let tempPass="admin"
    location.pathname='/home'
    if(tempUser===user && tempPass===password)
    {
        alert("login successfull");
        
        history('/home')
        console.log(location.pathname)
    }
    else
    {
        alert("login unsuccessfull")
    }
 }

  function handleClick()
  {
    authenticateUser(user,password)
  }
    return (
        <div>
            Welcome to the login page. Please login by providing below details <br />
            <label htmlFor="">User name</label>
            <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} required /> <br />
            <label htmlFor="">password</label>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} required  /> <br /><br />
            <button type='submit' onClick={handleClick}>Login</button>
        </div>
    )
 }
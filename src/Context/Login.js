import userEvent from '@testing-library/user-event';
import React, { useState,createContext,useContext } from 'react'
const userContext=createContext();
export default function Login()
{ 
        const [user,setUser]=useState("Krishna");
  return (
    <userContext.Provider value={user} >
    <div>
 
        <h1>Login page</h1>
        <Home  />
    </div>
    </userContext.Provider>
  )
       
    
}


function Home(){
    const user=useContext(userContext)
return (
   <div>
    Home Page
    <Cart />
   </div>
)
}


function Cart()

{
    const user=useContext(userContext)
return (
    <div><h1>{user}'s cart</h1>

<Payment />
</div>
)
}


function Payment()
{
    const user=useContext(userContext)
return(

    <div>
        {user}'s payment page
    </div>
)
}

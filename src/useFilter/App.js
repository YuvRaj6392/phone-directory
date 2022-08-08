import React, { useEffect, useState } from 'react'

export default function App() {
    const[filter,setFilter]=useState("");
    const[userCollection,setUserCollection]=useState([])
    // useEffect(()=>{
    //   fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>setUserCollection(data))
    // },[])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`).then(res=>res.json()).then(data=>setUserCollection(data))
      },[filter])

  return (
    <div>
      <input type="text" value={filter} onInput={(e)=>setFilter(e.target.value)} />
      <br /><br />
       <div>
        {
            userCollection.map((ele)=>{
             return   <div key={ele.id}>{ele.name}</div>
            })
        }
       </div>
    </div>
  )
}

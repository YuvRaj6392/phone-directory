import React from 'react'
import { useState } from 'react'

export default function App() {
    const [name,setName]=useState("")
    const [anArray,setAnArray]=useState([]);
const addAnArray=()=>{
    setAnArray([...anArray,{id:anArray.length,name:name}])
    setName("")
}

function removeItem(data)
{
  setAnArray(current =>
    current.filter(employee => {
      // 👇️ remove object that has id equal to 2
      return employee.id !== data;
    }),
  );
}
  return (
    <div>
    <input type="text" value={name} onChange={e=>setName(e.target.value)} />
   <button onClick={addAnArray}>Add</button>
   <br /><br /><br /><br />
   <h3>Tasks</h3>
   <div >
   {
    anArray.map((ele)=>{
      return <div key={ele.id} style={{margin:"20px",border:"1px solid black",padding:"20px"}}>
        <div>{ele.name}</div>
        <button onClick={()=>{
         removeItem(ele.id)
        }}>Delete</button>
      </div>
      
    })
    
  }

 
   </div>
  
    </div>
  )
}

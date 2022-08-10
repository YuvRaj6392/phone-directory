import React, { useEffect, useState } from 'react'
export default function App() {    
    const [count,setCount]=useState(0);
useEffect(()=>{
    for(var i=0;i<count;i++)
    {
        let a = sessionStorage.getItem("ip"+i);
        if(a!==count)
        {
            sessionStorage.setItem("ip"+count,count)
        }
    
    }

},[count])
  return (
    <div>
       <button onClick={e=>setCount(count+1)}>Increment</button>
       <button onClick={e=>setCount(count-1)}>Decrement</button>
       <br />
       <span>the value of count is {count}</span>
    </div>
  )
}

import React from 'react'
import Fetch from './Fetch'
export default function App() {
    const [data]=Fetch("https://jsonplaceholder.typicode.com/todos");
  return (
   <div>
 {
        data && data.map((ele)=>{
            return (
                <div>
                    <span key={ele.id}>{ele.title}</span>
                </div>
            )
        })
      }
   </div>
  )
}

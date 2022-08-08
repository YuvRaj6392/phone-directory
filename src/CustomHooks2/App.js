import React from 'react'
import useFetch from './useFetch'
export default function App() {
    const [data]=useFetch("https://jsonplaceholder.typicode.com/todos");

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

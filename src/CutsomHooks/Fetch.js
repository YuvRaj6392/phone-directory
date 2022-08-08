import React from 'react'
import useDataFetch from './useDataFetch'
export default function Fetch() {
    const [data]=useDataFetch("https://jsonplaceholder.typicode.com/todos")
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

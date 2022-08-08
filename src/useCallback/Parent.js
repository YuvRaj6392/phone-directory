import React,{useCallback, useState} from 'react'
import Child from './Child';

export default function Parent() {
    const [count1,setCount1]=useState(0);
    const[count2,setCount2]=useState([]);
    const increment1=()=>{
        setCount1(count1+1)
      }
    const  fun=useCallback(()=>{
        console.log("hello ajay")
      },[count2])
  return (
    <div>
         <Child count2={count2} fun={fun} />
       <button onClick={increment1}>{count1}</button>
    </div>
  )
}

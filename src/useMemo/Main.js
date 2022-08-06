import React, { useMemo, useState } from 'react'

export default function Main() {
  const [count1,setCount1]=useState(0);
  const [count2,setCount2]=useState(0); 
 const increment1=()=>{
    setCount1(count1+1)
  }
  const increment2=()=>{
    setCount2(count2+1);
  }
  const checkEven=useMemo(()=>{
    console.warn("....")
    let i=0;
    while(i<2000000000) i++;
    return count1%2===0
  },[count1])

  return (
    <div>
      <button onClick={increment1}>{count1}</button>
      <span>{checkEven?"Even":"Odd"}</span>
      <button onClick={increment2}>{count2}</button>
    </div>
  )
}

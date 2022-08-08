import React, { useMemo, useState } from 'react'

export default function App() {
    const [number,setNumber]=useState(0);
    const [inputVal,setInputVal]=useState(0);

// const result=useMemo(()=>{
// return multiplier(number);
// },[number])

// function multiplier()
// {
//     return number*10;
// }

const result=useMemo(()=>{
    console.log("useMemo has been called")
    return number*10
    
},[number])

  return (
    <div>

      <input type="number" className='number' onChange={(e)=>setInputVal(e.target.value)} />
        <button onClick={(e)=>setNumber(inputVal)}>Get Result</button>
        <div className='result'>
           {result}
        </div> 

    </div>
  )
}

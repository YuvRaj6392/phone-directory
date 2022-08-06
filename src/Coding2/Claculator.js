import React from 'react'
import { useState } from 'react'
export default function Claculator() {

const [num1,setNum1]=useState("");
const [num2,setNum2]=useState("");
const [result,setResult]=useState("");
function add(a,b)
{
 return +a + +b
}
function showResult()
{
  if(num1 && num2)
  {
    setResult(add(num1,num2));
  }
  else
  {
    setResult("invalid")
  }
}

  return (
    <div>
    <input type="number" onInput={(e)=>setNum1(e.target.value)} />
    <input type="number" onInput={(e)=>setNum2(e.target.value)} />
    <button onClick={showResult}>Calculate</button><br />
    <p>{result}</p>
    </div>
  )
}

import React, { useState } from 'react'

export default function FuncProp() {
    const[count,setCount]=useState(0);
   const onClickHandler=()=>{
        setCount(count+1)
    }
   
  return (
    <div>
     <button onClick={onClickHandler}>ADD</button>
     <div>
        The count is {count}
     </div>
    </div>
  )
}


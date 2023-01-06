import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'

export default function Home() {
    const [name,setname]=useState("yuv");
    const history=useNavigate();
    const redirect=(e)=>{
        e.preventDefault();
        history({
            pathname:'/detail',
            
        })

    }
  return (
    <div>
    <div>
        <button onClick={redirect}> Detail</button>
      </div>
      This is the home page!
    </div>
  )
}

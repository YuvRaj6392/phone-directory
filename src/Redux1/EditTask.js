import React, { useState } from 'react'

export default function EditTask() {
    const [name,setName]=useState("");

  return (
    <div>
<input type="text" onChange={e=>setName(e.target.value)}/>
<br />
<button>Add Task</button>
    </div>
  )
}

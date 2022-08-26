import React, { useState } from 'react'

export default function AddSubscriber() {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
  return (
    <div>
        <button>Back</button>
        <br />
        <br />
        <form action="">
        <input type="text" placeholder='Name' onInput={e=>setName(e.target.value)}/>
        <br />
        <br />
        <input type="text" placeholder='phone' onInput={e=>setPhone(e.target.value)} />
        <br /><br />
        <button type='submit'>Add</button>
        </form>
       
        <br />
        <h5>Subscriber to be added!</h5>
        <span>Name: {name}</span>
        <br /><br />
        <span>Phone: {phone}</span>
    </div>
  )
}

import React, { useState } from 'react'
import {Link} from "react-router-dom";

export default function AddSubscriber(props) {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");

const onFormSubmit=(e)=>{
e.preventDefault();
props.addHandler({name:name,phone:phone})
document.getElementById("name").value="";
document.getElementById("phone").value="";
}
  return (
    <div>
     <Link to="/"><button>Back</button></Link> 
        <br />
        <br />
        <form  onSubmit={onFormSubmit}>
        <input type="text" placeholder='Name' id='name' onInput={e=>setName(e.target.value)}/>
        <br />
        <br />
        <input type="text" placeholder='phone' id='phone' onInput={e=>setPhone(e.target.value)} />
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

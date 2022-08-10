import React, { useState,useRef } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

export default function App2() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const inputVal=useRef(null);
    const onFormSubmit=(e)=>{
        e.preventDefault();
        alert("The form has been successfully submitted");
    }
  return (
   <ValidatorForm ref={inputVal} onSubmit={onFormSubmit} onError={error=>console.log(error)}> 
   

   <TextValidator label="Email" value={email} onChange={e=>setEmail(e.target.value)} validators={['required','isEmail']} errorMessages={['Email is required','Email is invalid']} style={{margin:'10px'}}/>

   <TextValidator label="Password" value={password} onChange={e=>setPassword(e.target.value)} validators={['required']} errorMessages={['Password is required']} style={{margin:'10px'}}/>

   <button type='submit'>Submit</button>

   </ValidatorForm>
  )
}

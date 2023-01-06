import React from 'react'
import { useState } from 'react'
import { TextValidator,ValidatorForm } from 'react-material-ui-form-validator'
export default function App() {
    const [email,setEmail]=useState("");

    const onFormSubmit=(e)=>{
        e.preventDefault();
        alert("The form has been successfully submitted!")
    }
  return (
   
    <ValidatorForm onSubmit={onFormSubmit}   >
    <TextValidator name="email" value={email} onChange={(e)=>{
        setEmail(e.target.value)
    }} validators={['required','isEmail']}  errorMessages={['This is the required field','Email should be valid']}/>

<button type='submit'>Submit</button>



</ValidatorForm>
   
  )
}

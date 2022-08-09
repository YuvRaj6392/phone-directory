import React, { useState,useRef} from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
export default function App() {
  const [email,setName]=useState("")
  const inputRef=useRef(null)
  const onFormSubmit=(e)=>{
    e.preventDefault();
    alert("form has been successfully submitted")
  }
  return (
    <div>
        <ValidatorForm ref={inputRef} onSubmit={onFormSubmit} onError={error=>console.log(error)}>

        <TextValidator name="name" value={email} onChange={e=>setName(e.target.value)} validators={['required','isEmail']} errorMessages={['This field is required','Email is invalid']}/>
          
       <button type='submit'>Submit</button>



        </ValidatorForm>
    </div>
  )
}

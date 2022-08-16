import React from 'react'

export default function User(props) {
    console.warn(props.data)
  return (
    <div>
Hey! {props.data.name} your password is {props.data.password}
    </div>
  
  )
}

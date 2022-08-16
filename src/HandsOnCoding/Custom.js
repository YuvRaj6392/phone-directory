import React, { useEffect } from 'react'

export default function Custom(name) {
useEffect(()=>{
    console.log(`The name of the page is ${name} and it was loaded at ${new Date()}`)
})
  return (
    <div></div>
  )
}

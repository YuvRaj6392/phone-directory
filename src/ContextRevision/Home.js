import React from 'react'
import { useContext } from 'react'
import { userContext } from '../ContextRevision/App.js'
export default function Home() {
    const user=useContext(userContext)
  return (
    <div>
      This is the home page of {user}
    </div>
  )
}

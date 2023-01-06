import React from 'react'
import { Link} from 'react-router-dom'
export default function Detail(props) {

  return (
    <div>
    <Link to='/'><button>Home</button></Link>
      Hello this is the detail page of {props.name}
    </div>
  )
}

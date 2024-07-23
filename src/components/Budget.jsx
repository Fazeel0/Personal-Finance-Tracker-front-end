import React from 'react'
import { Link } from 'react-router-dom'

export default function Budget() {
  return (
    <div>
      this is Budget page
      <br></br>
      <Link to="/" className='underline'>go to Dashboard page</Link>
    </div>
  )
}

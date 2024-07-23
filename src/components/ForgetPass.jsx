import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgetPass() {
  return (
    <div>
      forget password page<br/>
      <Link to="/login" className='text-blue-600 underline'>Log in</Link>
    </div>
  )
}

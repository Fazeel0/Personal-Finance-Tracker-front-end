import React from 'react'
import { Link } from 'react-router-dom'

export default function Expense() {
  return (
    <div>
      this is Expense page<br/>
      <Link to="/" className='underline'>go to Dashboard page</Link>
    </div>
  )
}

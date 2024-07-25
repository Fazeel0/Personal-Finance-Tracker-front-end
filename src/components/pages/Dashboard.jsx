import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      this is Dashboard page <br />
      <Link to="/expense" className='underline'>go to Expense page</Link><br/>
      <Link to="/budget" className='underline'>go to Budget page</Link>
    </div>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <div className='bg-sky-200'>sidebar</div>
      <div className='bg-green-400'>header</div>
      <div className='bg-blue-950 text-white'>{<Outlet />}</div>
    </div>
  )
}

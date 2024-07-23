import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Login() {

  const [formData, setFormData] = useState({
    email:"",
    password:"",
  })
  
  const [error,setError] = useState("");
  const [status,setStatus] = useState("");

  const handleChange = (e)=>{
    setError("");
    setStatus("");
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setError("");
    
  }
  
  return (
    <div className='flex justify-center items-center border-2 border-black h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col w-1/5 border-2 border-black p-5 rounded-lg' >
        <h3 className='text-center text-xl font-bold'>Log In</h3>
        
        <label htmlFor="email">Email<sup>*</sup></label>
        <input onChange={handleChange} type="email" placeholder='Email' name='email' id='email' required className='border-2 border-gray-500 rounded-md'/>

        <label htmlFor="password">Password<sup>*</sup></label>
        <input onChange={handleChange} type="password" placeholder='Password' name='password' id='password' required className='border-2 border-gray-500 rounded-md'/>

        <p className='text-red-600'>{error}</p>
        <p className='text-green-600'>{status}</p>

        <button type='submit' className='bg-slate-400 border-2 border-black m-2 w-1/4 text-center rounded-md ml-32'>Sign Up</button>
        <div className='flex justify-around'>
        <Link to={"/login/reset"} className='text-blue-600 hover:underline'>Forget Password?</Link>
        <Link to={'/signup'} className='text-blue-600 hover:underline '>Create account</Link>
        </div>
      </form>
    </div>
  )
}

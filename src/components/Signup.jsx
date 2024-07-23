import React, { useState } from 'react'
import { Link } from 'react-router-dom'



export default function Signup() {

  const [formData, setFormData] = useState({
    fName:"",
    email:"",
    password:"",
  })
  const [confirmPass, setConfirmPass] = useState("");

  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e)=>{

    setError("");
    setConfirmPass("");
    setStatus("");


    const {name,value} = e.target;
    setFormData(
      {
        ...formData,
        [name] : value,
      }
    )

  }

  const handleConfirm = (e)=>{
    setError("");
    setStatus("");
    setConfirmPass(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
  if(formData.password !== confirmPass){
    setError("Password didnot match!");
  }else{
    setStatus("account created");
  }
  }

  return (
    <div className='flex justify-center items-center border-2 border-black h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col w-1/5 border-2 border-black p-5 rounded-lg' >
        <h3 className='text-center text-xl font-bold'>Sign Up</h3>
        <label htmlFor="name">Full name<sup>*</sup></label>
        <input onChange={handleChange} className='border-2 border-gray-500 rounded-md' type="text" placeholder='Full Name' name='fName' id='name' value={formData.fName}required />

        <label htmlFor="email">Email<sup>*</sup></label>
        <input onChange={handleChange} type="email" placeholder='Email' name='email' id='email' value={formData.email} required className='border-2 border-gray-500 rounded-md'/>

        <label htmlFor="password">Password<sup>*</sup></label>
        <input onChange={handleChange} type="password" placeholder='Password' name='password' id='password' value={formData.password} required autoComplete='current-password' className='border-2 border-gray-500 rounded-md'/>
        <p className='text-gray-400'>Password must be 8-16 characters long, and Letters,numbers & special characters</p>

        <label htmlFor="confirmPass">Confirm Password<sup>*</sup></label>
        <input onChange={handleConfirm} type="text" placeholder='Confirm Password' name='confirmPass' id='confirmPass' value={confirmPass} required className='border-2 border-gray-500 rounded-md'/>

        <p className='text-red-600'>{error}</p>
        <p className='text-green-500'>{status}</p>

        <button type='submit' className='bg-slate-400 border-2 border-black m-2 w-1/4 text-center rounded-md ml-32'>Sign Up</button>
        <Link to={'/login'} className='text-blue-600 underline text-center'>Already have account?</Link>
      </form>
    </div>
  )
}

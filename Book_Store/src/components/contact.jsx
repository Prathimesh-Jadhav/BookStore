import React, { useContext, useEffect } from 'react'
import { Authuser } from '../context/context'
import { useNavigate } from 'react-router-dom'

const contact = () => {

  const {Login} = useContext(Authuser)
  const navigate = useNavigate()

  useEffect(()=>{
     {Login?'': navigate('/Login')}
  },[Login])
  return (
    <div className='p-2 bg-slate-500 flex flex-col gap-2 mx-auto top-[200px] rounded-md pb-10 px-4'>
      <h1 className='text-center text-[25px] '>Query Form</h1>
      <label htmlFor="email">Email</label>
      <input type="email"  className='rounded-sm'/>
      <label htmlFor="query">Drop your query</label>
      <textarea name="query" className='rounded-sm'></textarea>
    </div>
  )
}

export default contact
import axios from 'axios'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {

  const navigate = useNavigate()

  let payload={
     'email':'',
     'password':'',
     'username':""
  }

  function handlePayload(e){
    payload[e.target.name]=e.target.value  
  }

  async function handleLogin(e){

    e.preventDefault()

    const res = await axios.post('http://localhost:3000/signup',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'include':true
        }
      }
    )
    console.log(res.data)

    if(res.data.error){
      toast.error(res.data.error)
        navigate('/signup')
    }
    else{
      toast.success('Signup successfull')
      navigate('/')
    }

  }
  return (
   <section className='p-1 min-h-screen min-w-screen  fixed backdrop-filter backdrop-blur-sm z-10 border-2 border-red-500 right-0 left-0 top-0' >
           <div className='bg-slate-400  p-3 xl:w-[350px]  md:w-[280px] sm:w-[200px] mt-[200px] mx-auto rounded-md px-5 z-10'>
           <p className='flex justify-end text-lg'><button onClick={()=>{
               navigate('/')
           }}>X</button></p>
           <h3 className='text-[25px] text-center'>Login</h3>
              <form action="" className='flex flex-col gap-2'>    
                <label htmlFor="username">Username</label>
                <input type="text" className='rounded-sm focus:outline-none p-1 px-2' onChange={handlePayload} name='username'/>
                <label htmlFor="email">Email</label>
                <input type="text" className='rounded-sm focus:outline-none p-1 px-2' onChange={handlePayload} name='email'/>
                <label htmlFor="password">Password</label>
                <input type="password"  className='rounded-sm focus:outline-none p-1 px-2' onChange={handlePayload} name='password'/>
                <input type="submit"  className='bg-pink-600 w-[90px] p-1 rounded-md mt-4 mx-auto cursor-pointer' onClick={handleLogin}/>
              </form>
               
           </div>
   </section>
  )
}

export default Login
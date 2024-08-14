import React from 'react'
import { Link } from 'react-router-dom'

const navOptions = () => {
    
    return (
        
        <div className='max-lg:min-w-screen flex flex-col gap-2 py-6 mt-14 pt-2 px-10 bg-slate-500 transition-all mx-12 rounded-md'>
            <div ><Link to={'/'} className='hover:bg-pink-600 px-2 rounded-md' >Home</Link></div>
            <div><Link to={'/courses'} className='hover:bg-pink-600 px-2 rounded-md'>Courses</Link></div>
            <div><Link to={'/contact'} className='hover:bg-pink-600 px-2 rounded-md' >Contact</Link></div>
            <div><Link to={'/about'} className='hover:bg-pink-600 px-2 rounded-md' >About</Link></div>
        </div>
  
    )
}

export default navOptions
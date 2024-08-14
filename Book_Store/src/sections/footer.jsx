import React from 'react'
import fb from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'

const footer = () => {
  return (
    <div className='mt-10 shadow-sm bg-slate-50 text-black p-6 '>
       <div>
          <ul className='flex gap-4 flex-wrap xl:max-w-[400px] mx-auto justify-center font-medium max-sm:gap-2 max-sm:max-w-[200px]'>
            <li>About us</li>
            <li>Contact</li>
            <li>Jobs</li>
            <li>Press Kit</li>
          </ul>
       </div>
       <div className='flex xl:max-w-[400px] justify-center mx-auto mt-6 gap-4  max-sm:max-w-[200px] '> 
          <img src={fb} alt="" width={40}/>
          <img src={twitter} alt="" width={40}/>
          <img src={youtube} alt="" width={40}/>
       </div>
       <div>
        <p className='text-sm font-medium text-center mt-6 break-words' >CopyRight@ All rights reserved</p>
       </div>
    </div>
  )
}

export default footer
import React from 'react'
import star from '../assets/star.jpeg'

const CustomerCard = ({img,feedback,Name,rating}) => {
  return (
    <div className=''>
        <div className='max-w-[300px] min-w-[200px] flex flex-col items-center pt-6 border-2 border-black p-6 h-[250px] rounded-md mt-10 dark:border-white'>
            <img src={img} alt="cust-1" width={100} className='rounded-full'/>
            <p className='text-center mt-4'>{feedback}</p>
            <p className='font-bold'>{Name}</p>
            <p className='flex gap-2 mt-4'>{rating}<img src={star} width={20}></img></p>
        </div>
    </div>
  )
}

export default CustomerCard
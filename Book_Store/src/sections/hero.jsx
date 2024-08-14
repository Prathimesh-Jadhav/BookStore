import React from 'react'
import email from '../assets/email.png'
import book from '../assets/book.jpg'
import emails from '../assets/emails.png'

const hero = () => {
  return (
    <section id="home" className='  min-h-100vh pt-16'>
      <div className='flex justify-between gap-10 max-lg:flex-col-reverse max-lg:items-center '>
      <div className='md:pt-[80px] w-1/2 max-lg:w-full'>
        <h3 className='font-bold text-4xl leading-snug break-words'>
          Book is your true friend,It gives you knowledge and <span className='text-4xl text-pink-500'>
          helps to grow in life
            </span>
        </h3>

        <p className='mt-16 font-medium leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, minima! Iusto quae corrupti, hic illum vel distinctio dolorem impedit! In, quos et? Doloribus, delectus saepe!</p>

        <div className='mt-10 border-2 border-slate-600 rounded-lg p-1 flex px-2'>
          
             <img src={email} alt=""  width={30} className='mr-6'/>
        
          
          <input type="email" className="focus:outline-none w-full" />
        </div>

        <button className='bg-pink-600 text-white px-2 py-2 rounded-lg mt-10'>Secondary</button>
      </div>
      <div className='pt-4 max-lg:w-full '><img src={book} alt="" className='pr-20 max-w-[600px] mx-auto max-md:w-[400px] max-sm:w-[350px] rounded-lg'/></div>
      </div>
       <div className='mt-10'>
        <p className='font-bold text-xl'>Free Offered Courses</p>
        <p className='mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus totam a nulla magnam deleniti facilis incidunt officia quod sapiente, eveniet ex fugit dignissimos, maxime quibusdam quo hic itaque. Et hic voluptatum animi voluptates quidem facere!</p>
       </div>
    </section>
  )
}

export default hero
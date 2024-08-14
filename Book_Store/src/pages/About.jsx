import React from 'react'
import Login from '../components/Login'
import { Authuser } from '../context/context'
import CustomerCard from '../components/CustomerCard'
import person1 from '../assets/person1.jpeg'
import person2 from '../assets/person2.jpeg'

const About = () => {
  return (
    <div className='px-[40px] pt-[80px]'>
       <h1 className='text-center text-[25px] font-medium'>Book Store </h1>
       <div className='mt-4'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum repellendus cupiditate atque illo dolore adipisci fuga laboriosam, voluptates esse molestiae sapiente perferendis quisquam quia consequatur officia ullam veritatis quam dignissimos praesentium, laborum nulla corporis dolorum? Assumenda vitae fugit cupiditate debitis dolore culpa doloribus veritatis fugiat officia rerum. Enim, expedita mollitia?
       </div >
       <h1 className='text-center text-[25px] font-medium mt-8'>What out Customers say?</h1>
       <div className='mt-4 flex justify-evenly'>
           <CustomerCard img={person1} name={'Lee cruise'} feedback={'Great books available for reading'} rating={'5'} className='border-2 border-black '/>
           <CustomerCard img={person2} name={'Joe'} feedback={'Old to Old books are available'} rating={'4'} />
       </div>
        
    </div>
  )
}

export default About
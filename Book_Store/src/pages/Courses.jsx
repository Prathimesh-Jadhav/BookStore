import React, { useContext, useEffect, useState } from 'react'
import BookCard from '../components/bookcard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Login from '../components/Login'
import { useNavigate } from 'react-router-dom'
import { Authuser } from '../context/context'
import search from '../assets/search.png'


const Courses = () => {
    const [books,setbooks] =useState([])
  const [booksDB,setbooksDB] =useState([])
  const navigate = useNavigate()
  const {Login} = useContext(Authuser)

  useEffect(()=>{
    async function getData(){
        const res= await axios.get('http://localhost:3000/book')
        const Data = res.data
        setbooks(Data)
        setbooksDB(Data)
    }
    getData() 

    Login ? '':navigate('/Login')
    
    
  },[])


  function bookSearch(e){
      const Searched_books = books.filter((book)=>{  
          return book.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setbooksDB(Searched_books)
  }
  return (
    <section className='pt-20 px-14 relative'>
        <div className='pt-10'>
            <p className='font-bold text-3xl text-center'>We're delighted to have you <span className='text-pink-500'>Here :)</span></p>
        </div>
        <p className='mt-10 text-center font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, tenetur consequatur. Autem labore quisquam praesentium ad quae delectus accusantium, ipsam eius aliquid unde culpa nulla atque eveniet aut voluptas pariatur. Impedit, at aliquam quaerat tenetur doloribus ullam enim reprehenderit, iure similique incidunt corrupti. Id illo corporis exercitationem error et laboriosam?</p>
        <p className='text-center mt-6'><Link to={'/home'} className='px-4 py-2 bg-pink-500 rounded-md'>Back</Link></p>
        <p  className='mt-10 mx-2 flex border-2 border-slate-600 max-w-[260px]  py-1 rounded-md'><input type="text" className='py-1 px-3 focus:outline-none  rounded-md text-black' onChange={bookSearch} placeholder='Search a book'/><img src={search} alt=""  width={20} height={10}/></p>
        <div className='flex flex-wrap gap-5 mt-10 '>
            {
               
               booksDB.map((book)=>(
                <BookCard name={book.name} category={book.category} id={book.id} price={book.price} key={book.id}/>
               ))
            }
        </div>
        
    </section>
  )
}

export default Courses
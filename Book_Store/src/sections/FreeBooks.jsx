import React, { useEffect, useState } from 'react'
import Bookcard from '../components/bookcard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

const PopularBooks = () => {
    const [books,setbooks]=useState([])
    useEffect(()=>{
        async function getData(){
            const res= await axios.get('http://localhost:3000/book')
            const Data = res.data
            const freeBooks = Data.filter((book)=>{
                return book.category=='free'
            })
            setbooks(freeBooks) 
        }
        getData() 
        
        const storage=localStorage.getItem('user')
        if(!storage){
            navigate('/login')
        } 
      },[])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        intialSlide:0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: true,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }  
            },
            {
                breakpoint: 768,
                settings: {
                    numbers: true,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }  
            }
            
        ]
    }
        ;
    const booksdata = books.filter((book) => {
        return book.category == "free"
    })
    return (
        <section className='mt-6 px-14 '>

            <Slider {...settings} >
                {
                    books.map((book) => (
                        <Bookcard name={book.name} category={book.category} id={book.id}/>
                    ))
                }
            </Slider>

        </section>
    )
}

export default PopularBooks
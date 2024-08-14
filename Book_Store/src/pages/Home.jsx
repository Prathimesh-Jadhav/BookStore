import React from 'react'
import Hero from '../sections/hero'
import Footer from '../sections/footer'
import FreeBooks from '../sections/FreeBooks'

const Home = () => {
  return (
    <>
      <section className='px-14'>
        <Hero/>
      </section>
      <section>
        <FreeBooks/>
      </section>
    </>
  )
}

export default Home
import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './sections/footer'
import {ToastContainer} from 'react-toastify'
import NavOptions from './components/navOptions'
import { Authuser } from './context/context'
import Context from './context/context'

function App() {
   const [Visible,setVisible] = useState(false)
   const [WindowWidth,setWindowWidth] = useState(false)


  const storage = localStorage.getItem('user')

   useEffect(()=>{
    window.addEventListener('resize',()=>{
         if(window.innerWidth<=1024){
          setWindowWidth(true)
         }
         else{
          setWindowWidth(false)
         }
    })
   },[])

  return (
    <>
    
      <div className={`dark:bg-slate-800 dark:text-white `}>
      <ToastContainer/>
      <Context>
        <Navbar setVisible={setVisible} storage={storage}/>
        {
          WindowWidth && Visible?<NavOptions/>:''
        }
        
            <Outlet/>
        </Context>
        
        <Footer/>
      </div>
     

    </>
  )
}

export default App

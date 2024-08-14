import React, { useContext, useEffect, useState } from 'react'
import menu from '../assets/menu.png'
import { Link, useNavigate } from 'react-router-dom'
import { Authuser } from '../context/context'

const navbar = ({setVisible,storage}) => {
    const [sticky,setsticky] = useState(false)
    const [theme,settheme] = useState('light')
    const navigate = useNavigate()
    const {Login,verifyLogin} = useContext(Authuser)

    useEffect(()=>{
        function handleSticky(){
            if(window.scrollY>0){
                setsticky(true)
            }
            else{
                setsticky(false)
            }

        }
        window.addEventListener('scroll',handleSticky)


        
        return function(){
            window.removeEventListener('scroll',handleSticky)
        } 
    },[])
    
    function changeTheme(){
        if(theme=='light'){
            document.body.classList.contains('light')?document.body.classList.remove('light'):""
            document.body.classList.add('dark')
            settheme('dark')
        }
        else{
            document.body.classList.contains('dark')?document.body.classList.remove('dark'):""
            document.body.classList.add('light')
            settheme('light')
        }
    }

    return (
        <nav className= {` h-16 px-14 p-1 flex items-center justify-between fixed right-0 left-0 top-0 ${sticky&&theme=='light'?'shadow-md bg-slate-50':""} ${sticky&&theme=='dark'?'shadow-md bg-slate-700':""} z-10`}>
            <div>
                <p className='font-bold text-2xl font-monterras'>Book Store</p>
            </div>
            <div className='flex gap-3 items-center'>
                <ul className='flex text-lg max-lg:hidden'> 
                    <li className='hover:bg-pink-500 px-2 rounded-md cursor-pointer'><Link to={'Home'}>Home</Link></li>
                    <li className='hover:bg-pink-500 px-2 rounded-md cursor-pointer'><Link to={'Courses'}>Courses</Link></li>
                    {
                        storage.role=='Member'?<li className='hover:bg-pink-500 px-2 rounded-md cursor-pointer'><Link to={'Addbook'}>Addbook</Link></li>:''
                    }
                    <li className='hover:bg-pink-500 px-2 rounded-md cursor-pointer'><Link to={'/contact'}>Contact</Link></li>
                    <li className='hover:bg-pink-500 px-2 rounded-md cursor-pointer'><Link to={'About'}>About</Link></li>
                </ul>
                <div className='border-2 border-slate-500 rounded-md p-1 max-lg:hidden bg-white'>
                    <input type="text" className='focus:outline-none' placeholder='Search' />
                </div>
                <button className='px-3 bg-slate-800 text-white py-1 rounded-md dark:border-[1px] dark:border-white' onClick={changeTheme}>
                    {
                        theme=='light'?'dark':'light'
                    }
                </button>
                <button className='bg-slate-600 px-4 text-white py-1 rounded-md' onClick={()=>{
                    {Login? verifyLogin(false):navigate('/Login')}
                     navigate('/Login')
                }}>{Login ? 'Logout' : 'Login'}</button>
                <img src={menu} alt="" width={58} className='hidden max-lg:block cursor-pointer' onClick={()=>{
                    setVisible((prev)=>!prev)
                }}/>
            </div>
        </nav>
    )
}

export default navbar
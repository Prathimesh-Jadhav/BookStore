import React from 'react'
import freebook from '../assets/6920933.jpg'

const bookcard = ({ name, category,id,price }) => {
    return (
        <div className='' key={id}>
            <div className='w-[300px] shadow-md mb-6 pb-6 rounded-lg  hover:scale-105 cursor-pointer transition-all dark:border-[1px] dark:border-white'>
                <div>
                    <img src={freebook} alt="" width={300} className='rounded-md ' /> 
                </div>
                <div className='pt-4 flex flex-col gap-2 px-6'>
                    <p className='font-bold '>{name} <span className='border-2 border-slate-50 font-normal ml-2 px-3 rounded-lg text-sm bg-pink-500 cursor-pointer '>{category}</span></p>
                    <p className='max-w-[300px] break-words text-md '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, magnam!</p>
                    <div className='flex justify-between'>
                        <span className='border-2 border-slate-500 px-3 rounded-lg text-sm text-center py-1'>${price}</span>
                        <button className='px-5 py-1 hover:bg-pink-500 rounded-lg text-sm font-medium border-2 border-slate-500'>Buy</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default bookcard
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-[20vh] bg-slate-900 dark:bg-slate-100 sticky bottom-[-10rem]'>
        <div className='flex flex-col items-center justify-center h-full text-sm gap-2'>
            <NavLink to={{pathname: "//portfolio-anderson.vercel.app"}} target="_blank"><span className='flex items-center text-white dark:text-black font-semibold'>Copyright © 2022 <div className='text-blue-500 ml-2 '>Andy_Analytic Inc</div></span></NavLink>
            <span className='text-white dark:text-black font-semibold mb-1'>All Rights Reserved</span>
            <span className='flex items-center text-blue-500 gap-8'>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/exchange"> Exchange </NavLink>
                <NavLink to="/news"> News </NavLink>
            </span>
        </div>
    </div>
  )
}

export default Footer
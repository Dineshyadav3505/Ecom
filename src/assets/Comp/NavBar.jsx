import React from 'react'
import Contactus from './ContactUs'
import LogoWithname from './LogoWithName'
import { motion } from 'framer-motion'

const NavBar = () => {
  return (
    <nav className='fixed z-50 w-full h-20 flex justify-between p-5 '>
      <LogoWithname/>
      <div id="link" className='flex gap-14 mt-2'>
      <a className="flex justify-center items-center h-8 w-28 rounded-2xl font-['Neu_Montreal']  gap-1 text-[1vw] border-slate-500 text-black-900 px-3 py-1 border-[1px] capitalize" href="/ ">home       </a>
      <a className="flex justify-center items-center h-8 w-28 rounded-2xl font-['Neu_Montreal']  gap-1 text-[1vw]                    text-black-900 px-3 py-1 border-[1px] capitalize" href="/ ">shop       </a>
      <a className="flex justify-center items-center h-8 w-28 rounded-2xl font-['Neu_Montreal'] gap-1 text-[1vw]                    text-black-900 px-3 py-1 border-[1px] capitalize" href="/ ">About us   </a>
      </div>
      <div id="sing" className='flex gap-6 mt-2'>
        <a className="flex justify-center items-center h-8 w-28 rounded-2xl font-['Neu_Montreal']  gap-1 text-[1vw]  text-black-900 px-3 py-1 capitalize" href="/ ">Sign in   </a>
        <a className='none justify-center items-center h-8 w-28 rounded-2xl  gap-1 text-[1vw]  text-black-900 px-3 py-1 capitalize' href="/ "><i class="ri-menu-3-line"></i>   </a>
          
        <Contactus/>
      </div>
    </nav>

  )
}

export default NavBar
import React from 'react'
import Card from './Card'
import Button from './Button'
import { motion } from 'framer-motion'


const Page4 = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-200' >
        <div className='pt-20 '>
            <h1 className='text-[5vw] ml-20 mb-4 font-thin font-["Neue_Montreal"] capitalize '> products</h1>
            <hr className='border-black' />
            <div className='flex justify-between gap-10 flex-wrap items-center  mt-20 ml-[5%] min-h-[10vh] w-[90%]   '>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className="button flex justify-center items-center h-[15vh]">
                <Button/>
            </div>


        </div>
    </div>
  )
}

export default Page4
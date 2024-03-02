import { motion } from 'framer-motion'
import React from 'react'

const Page2 = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='landing-page2 w-full h-80 bg-[#12372A] rounded-t-2xl overflow-hidden pt-14 '>
      <div className="text pb-[-40px] border-t-2  border-b-2 flex  border-zinc-100">
        <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear", repeat: Infinity, duration:15}} className='text-[15vw] mb-2 whitespace-nowrap uppercase font-semibold text-white leading-none  '>Green Your World One Plant at a Time.&nbsp;&nbsp; </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear", repeat: Infinity, duration:15}} className='text-[15vw] mb-2 whitespace-nowrap uppercase font-semibold text-white leading-none  '>Green Your World One Plant at a Time.&nbsp;&nbsp; </motion.h1>

      </div>

    </div>
  )
}

export default Page2
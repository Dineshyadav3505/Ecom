import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'
import { motion } from 'framer-motion'

const Page3 = () => {
  return (
    <div  className="page3  pt-14 rounded-t-2xl -mt-4 w-full h-[140vh] bg-zinc-200 "  >
        <h1 className='text-center text-6xl font-["Neu_Montreal"]  '>New arrivals in this week</h1>
        <div className="outerbox flex w-[90%] h-[60vh]  ml-[5%] mt-14 ">
            <div className="left h-full w-[60%] p-5">
                <div className="img p-10  h-full w-full bg-[#ead9cf] rounded-2xl">
                  <Box1/>
                </div>
            </div>
            <div className="right h-full w-[40%] p-5">
                <div className="box1 w-full h-[48%] bg-[#DCE1D9] rounded-2xl p-5   ">
                  <Box2/>
                </div>
                <div className="box2 w-full h-[48%] bg-[#173135] mt-[4%] rounded-2xl p-5 ">
                  <Box3/>
                </div>
            </div>

           
        </div>
        <div className=" h-[60vh] mt-[15vh p-20 w-full flex relative ">
          <div className="h1h-full w-[60%]">
            <h1 className=' font-["Namdhinggo"] text-black text-7xl capitalize mt-14 ]'>make your home <br />  beautiful with plants </h1>
            <div className="button flex gap-5  items-center mt-16  ">
              <p className='border-[.5px] py-1 px-8 rounded-2xl border-neutral-950 bg-[#12372A] text-white ' ><a className='uppercase '  href="/">all</a></p>
              <p className='border-[.5px] py-1 px-3 rounded-2xl border-neutral-950 flex justify-center items-center  '><img className='h-4 w-4 rounded-full m-1 mr-2 bg-cyan-200' src="src/assets/img/PlantImg1.png" alt="a" /><a className='capitalize  '  href="/">cactus</a></p>
              <p className='border-[.5px] py-1 px-3 rounded-2xl border-neutral-950 flex justify-center items-center  '><img className='h-4 w-4 rounded-full m-1 mr-2 bg-cyan-200' src="src/assets/img/PlantImg2.png" alt="a" /><a className='capitalize  '  href="/">rose</a></p>
              <p className='border-[.5px] py-1 px-3 rounded-2xl border-neutral-950 flex justify-center items-center  '><img className='h-4 w-4 rounded-full m-1 mr-2 bg-cyan-200' src="src/assets/img/PlantImg3.png" alt="a" /><a className='capitalize  '  href="/">lily</a></p>
              <p className='border-[.5px] py-1 px-3 rounded-2xl border-neutral-950 flex justify-center items-center  '><img className='h-4 w-4 rounded-full m-1 mr-2 bg-cyan-200' src="src/assets/img/PlantImg4.png" alt="a" /><a className='capitalize  '  href="/">monsera</a></p>
            </div>
          </div>
          <div className="img">
            <img className='ab absolute top-0 right-24 rotate-[-90deg]' src="src/assets/img/photo1.png" alt="a" />
          </div>
        </div>

    </div>
  )
}

export default Page3
import { motion } from 'framer-motion';
import React from 'react';

const LandingPage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  id="page1" className=' flex w-full h-screen bg-zinc-200'>
        <div  className="h1text w-[40%] h-full font-['Namdhinggo'] pt-40 ">
            <h1 className='text-[7vw] leading-[5.5rem] ml-10 ' >Make your </h1>
            <h1 className='text-[7vw] leading-[5.5rem] ml-10 ' >home</h1>
            <h1 className='text-[7vw] leading-[5.5rem] ml-10 ' >beautiful</h1>
            <h1 className='text-[7vw] leading-[5.5rem] ml-10 ' >with plants</h1>
            <div className="h2text w-full h-full font-['Namdhinggo'] ml-10 pt-10">
                <p className=" text-xl" >
                    A cozy home is a home decorated with <br/> 
                    the freshness of green and fresh plants, come on, <br />
                    check out all our plants, don't run out.
                </p>
                <div id="button" className=''>
                    <a className="flex justify-center items-center mt-10 h-8 w-32 rounded-2xl font-['Neu_Montreal'] border-black  gap-1 text-[1vw]  text-white px-3 py-1 border-[1px] bg-[#12372A] capitalize" href="/ ">Learn more <i class="ri-arrow-right-up-line"></i>   </a>
                </div>
            </div>
        </div>

        <div 

        className="photo  h-full w-[60%] pt-16 ">
            <div className="lbox relative  h-[80%] w-full mt-[10%] right-0 rounded-l-[50px] bg-[#ADBC9F] flex">

                <div className="img w-1/2 h-full">
                        <img className=" h-full  object-center " src="src/assets/img/111.png" alt="a" />
                </div>
                <div className="smallbox flex absolute h-40 w-90 pt-5 pl-8 bg-[#12372A] rounded-2xl right-16 bottom-16 ">
                    <div className="text w-full h-full">
                        <h3 className="text-[2vw] font-['Neu_Montreal']  text-white capitalize" >Pisum Sativum </h3>
                        <p className="text-base font-['Neu_Montreal'] mt-2 text-zinc-400 capitalize " >Monsera</p>
                        <h6 className="mt-5" ><a className="text-xs text-white font-['Neu_Montreal'] capitalize underline  " href="/">learn more</a></h6>

                    </div>
                    <div className="img flex justify-center items-center w-full h-full ">
                        <img className="w-36 h-28 object-center mb-5 mr-8 rounded-lg ml-16 " src="/src/assets/img/photo-1614594975525-e45190c55d0b.png" alt="" />
                    </div>

                </div>

            </div>

        </div>
       

        
    </div>
  );
}

export default LandingPage;

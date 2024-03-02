import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import gsap, {Power4, ScrollTrigger } from 'gsap/all';

const EyesEffect = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() =>{
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            let angle = Math.atan2(deltaY, deltaX) *(180/Math.PI);
            setRotate(angle);
        });
    })

    

  return (
    <div className=' w-full h-screen overflow-hidden bg-zinc-200' >
        <div data-scroll data-scroll-section data-scroll-speed="-.9" className=" img w-full h-full relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
            <div className="absolute flex justify-between gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "> 
                <div className="eye flex justify-center items-center h-[15vw] w-[15vw] rounded-full bg-slate-100 ">
                    <div className="eye relative h-2/3 w-2/3  rounded-full bg-slate-900 ">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-5 w-full flex justify-end items-center "> 
                            <div className="eye h-5 w-5  rounded-full bg-slate-100 "></div>
                        </div>
                       
                    </div>
                </div>

                <div className="eye flex justify-center items-center h-[15vw] w-[15vw] rounded-full bg-slate-100 ">
                    <div className="eye relative h-2/3 w-2/3  rounded-full bg-slate-900 ">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-5 w-full flex justify-end items-center "> 
                            <div className="eye h-5 w-5  rounded-full bg-slate-100 "></div>
                        </div>
                       
                        
                    </div>
                </div>

            


                

            </div>
        </div>


    </div>
  )
}

export default EyesEffect
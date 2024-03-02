import React from 'react'

const Box2 = () => {
  return (

    <div className='flex justify-between overflow-hidden'>
        <div className="text1 h-full w-56 ">
            <p className='capitalize font-["Neu_Montreal"] text-zinc-900 opacity-20 text-[2vh] '  >New caegoy  </p>
            <h1 className='capitalize font-["Neu_Montreal"] text-2xl mt-5 '> Mosera</h1>
            <a className='uppercas font-["Neu_Montreal"] block mt-7 ' href="/">Shop now</a>
        </div>
        <div className="img w-72 h-40 ">
          <img className='h-48 ml-28 ' src="/src/assets/img/linh-le-Ebwp2-6BG8E-unsplash-removebg-preview.png" alt="" />
        </div>
    </div>
    
  )
}

export default Box2
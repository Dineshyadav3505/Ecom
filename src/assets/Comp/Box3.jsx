import React from 'react'

const Box3 = () => {
  return (

    <div className='flex justify-between overflow-hidden '>
        <div className="text1 h-full w-56 ">
            <p className='capitalize font-["Neu_Montreal"] text-zinc-100 opacity-20 text-[2vh] '  >New Product  </p>
            <h1 className='capitalize font-["Neu_Montreal"] text-2xl mt-5 text-zinc-300 '> plant for Garden</h1>
            <a className='uppercase font-["Neu_Montreal"] block mt-7 text-zinc-300 ' href="/">Shop now</a>
        </div>
        <div className="img w-72 h-40">
        <img className='h-48 ml-28 ' src="/src/assets/img/2nd.png" alt="" />
        </div>
    </div>
    
  )
}

export default Box3
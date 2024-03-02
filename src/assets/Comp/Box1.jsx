import React from 'react'

const Box1 = () => {
  return (

    <div className='flex'>
        <div className="text1 ">
            <p className='capitalize font-["Neu_Montreal"] text-zinc-900 opacity-20 text-xl '  >Big sale product  </p>
            <h1 className='capitalize font-["Neu_Montreal"] text-5xl mt-9 '> plant for interior decoration</h1>
            <p className='capitalize font-["Neu_Montreal"] inline-block mt-16 py-2 px-8 rounded-3xl text-xl bg-slate-100'>start form <p className='inline text-2xl font-bold' >$320</p></p>
            <a className='uppercase font-["Neu_Montreal"] block mt-14 ' href="/">Shop now</a>
        </div>
        <div className="img  w-96 ">
          <img className='w-' src="src/assets/img/das.png" alt="afd" />
        </div>
    </div>
    
  )
}

export default Box1
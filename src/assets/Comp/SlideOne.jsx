import React from 'react'

const SlideOne = () => {
  return (
    <div className='flex w-full h-full justify-between p-10 relative '>
        <div className="img w-[30%]"><img className='top-[-150px]  absolute rotate-45 ' src="src/assets/img/qw.png" alt="a" /></div>
        <div className="text w-[50%]">
            <p className='text-5xl font-["Neu_Montreal"]'>We have made <br /> the beauty of plants one of <br /> the most beautiful <br /> features in your home.</p>
            <p className='text-sm mt-5 '>A cozy home is a home that is decorated with the freshness of <br /> green and fresh plants</p>
        </div>
    </div>
  )
}

export default SlideOne
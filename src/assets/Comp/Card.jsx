import React from 'react'

const Card = () => {
  return (
    <>
        <div className="card flex flex-col items-center pt-7 h-80 w-64 shadow-lg shadow-slate-400 rounded-2xl ">
          <div className="img h-52 w-52 rounded-2xl flex justify-center"><img className='h-52  rounded-2xl bg-bottom bg-cover ' src="src/assets/img/PlantImg1.png" alt="" />
          </div>
          <div className="detailsBox flex justify-between items-center mt-5 w-52 ">
            <div className="details">
              <div className="name font-['Neu_Montreal'] capitalize ">
                Cactus Sam
              </div>
              <div className="price">
                $120.00
              </div>
            </div>
            <div className="img">
              <a className='flex justify-center items-center ' href="/"><img cl src="https://cdn.hugeicons.com/icons/delivery-secure-01-stroke-rounded.svg" alt="delivery-secure-01" width="24" height="24" /></a>
            </div>
          </div>
        </div>

        <div className="card flex flex-col items-center pt-7 h-80 w-64 shadow-lg shadow-slate-400 rounded-2xl ">
          <div className="img h-52 w-52 rounded-2xl flex justify-center "><img className='h-52 rounded-2xl bg-bottom bg-cover ' src="src/assets/img/PlantImg2.png" alt="" />
          </div>
          <div className="detailsBox flex justify-between items-center mt-5 w-52 ">
            <div className="details">
              <div className="name font-['Neu_Montreal'] capitalize ">
              African Milk Tree
              </div>
              <div className="price">
                $98.00
              </div>
            </div>
            <div className="img">
              <a className='flex justify-center items-center ' href="/"><img cl src="https://cdn.hugeicons.com/icons/delivery-secure-01-stroke-rounded.svg" alt="delivery-secure-01" width="24" height="24" /></a>
            </div>
          </div>
        </div>
        <div className="card flex flex-col items-center pt-7 h-80 w-64 shadow-lg shadow-slate-400 rounded-2xl ">
          <div className="img h-52 w-52 rounded-2xl flex justify-center "><img className='h-52 rounded-2xl bg-bottom bg-cover ' src="src/assets/img/PlantImg3.png" alt="" />
          </div>
          <div className="detailsBox flex justify-between items-center mt-5 w-52 ">
            <div className="details">
              <div className="name font-['Neu_Montreal'] capitalize   ">
                Gasteria
              </div>
              <div className="price">
                $110.00
              </div>
            </div>
            <div className="img">
              <a className='flex justify-center items-center ' href="/"><img cl src="https://cdn.hugeicons.com/icons/delivery-secure-01-stroke-rounded.svg" alt="delivery-secure-01" width="24" height="24" /></a>
            </div>
          </div>
        </div>
        
        <div className="card flex flex-col items-center pt-7 h-80 w-64 shadow-lg shadow-slate-400 rounded-2xl ">
          <div className="img h-52 w-52 rounded-2xl flex justify-center "><img className='h-52 rounded-2xl bg-bottom bg-cover ' src="src/assets/img/PlantImg4.png" alt="" />
          </div>
          <div className="detailsBox flex justify-between items-center mt-5 w-52 ">
            <div className="details">
              <div className="name font-['Neu_Montreal'] capitalize">
                Indian Sam
              </div>
              <div className="price">
                $120.00
              </div>
            </div>
            <div className="img">
              <a className='flex justify-center items-center ' href="/"><img cl src="https://cdn.hugeicons.com/icons/delivery-secure-01-stroke-rounded.svg" alt="delivery-secure-01" width="24" height="24" /></a>
            </div>
          </div>
        </div>
        
        
        
       
    </>


  )
}

export default Card
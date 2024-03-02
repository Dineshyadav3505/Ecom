import React from 'react'

const Button = () => {
  const handleHover = (event) => {
    const imgElement = event.currentTarget.querySelector('img');
    imgElement.style.width = '30px'; 
    imgElement.style.height = '30px'; 
  };

  const handleLeave = (event) => {
    const imgElement = event.currentTarget.querySelector('img');
    imgElement.style.width = '10px';
    imgElement.style.height = '10px';
  };
  return (
      <a onMouseEnter={handleHover} onMouseLeave={handleLeave} className='uppercase rounded-3xl flex justify-center items-center px-7 py-2 bg-zinc-100 gap-4 ' href="/">View all Plants 
        <img  className= 'p-1 rounded-full -rotate-90 bg-zinc-900' src="src/assets/img/arrow.svg" alt="arrow-down-right-01" width="24" height="24" />
      </a>
  )
}

export default Button




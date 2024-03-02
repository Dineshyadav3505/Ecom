import React from 'react';

const HoverEffectComponent = () => {
  const handleHover = (event) => {
    const imgElement = event.currentTarget.querySelector('img');
    imgElement.style.width = '150px'; // Adjust the size as needed
    imgElement.style.height = '150px'; // Adjust the size as needed
  };

  const handleLeave = (event) => {
    const imgElement = event.currentTarget.querySelector('img');
    imgElement.style.width = 'initial';
    imgElement.style.height = 'initial';
  };

  return (
    <div>
      <a onMouseEnter={handleHover} onMouseLeave={handleLeave} className='uppercase rounded-3xl flex justify-center items-center px-7 py-2 bg-zinc-100 gap-4 ' href="/">View all Plants 
        <img  className= 'h-2 w-2 p-1 rounded-full -rotate-90 bg-zinc-900 hover:h-6 hover:w-6  ' src="src/assets/img/arrow.svg" alt="arrow-down-right-01" width="24" height="24" />
      </a>
    </div>
  );
};

export default HoverEffectComponent;
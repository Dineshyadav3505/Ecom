import React from 'react';

const LogoWithname = () => {
  return (
    <div id="logoName" className='flex justify-center items-center gap-2'>
        <div id="logo" className='mt-2 ml-4 h-7 w-7'>
          <img src="src/assets/img/android-chrome-512x512.png" alt="" />
        </div>
        <h1 className=" font-extrabold text-3xl mt-2 font-['Neu_Montreal'] " >Planity</h1>
    </div>
  );
}

export default LogoWithname;

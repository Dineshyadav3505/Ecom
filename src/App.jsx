import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import NavBar from './assets/Comp/NavBar'
import LandingPage from './assets/Comp/LandingPage'
import Page2 from './assets/Comp/Page2'
import Page3 from './assets/Comp/Page3'
import EyesEffect from './assets/Comp/EyesEffect'
import Page4 from './assets/Comp/Page4'
import Page5 from './assets/Comp/Page5'
import { motion } from 'framer-motion';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-zinc-200 '>
      <NavBar/>
      <LandingPage/>
      <Page2/>
      <Page3/>
      <EyesEffect/>
      <Page4/>
      <Page5/>

    </div>
  )
}

export default App
import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/landing'
import Work from './Components/Work'
import Playreel from './Components/Playreel'
import Images from './Components/Images'
import Spread from './Components/Spread'
import Last from './Components/Last'
import LocomotiveScroll from 'locomotive-scroll';
function App() {

  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className=' w-full '>
      <Navbar />
      <Landing />
      <Work />
      <Playreel />
      <Images />
      <Spread />
      <Last />
    </div>
  )
}

export default App
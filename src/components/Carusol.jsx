import React from 'react'
import curosal1 from "../assets/img/board4.png"
import curosal2 from "../assets/img/board3.jpg"
import curosal3 from "../assets/img/Curosal3.png"
import board1 from "../assets/img/board1.jpg"
import board2 from "../assets/img/board2.jpg"


const Carusol = () => {
  return (
<div className='flex h-[625px] justify-center'>
<div className="carousel  w-screen">
  <div id="slide1" className="carousel-item bg-blue-950 relative w-screen">
    <img
      src={curosal2}
      className="w-full" />
  
  </div>
  <div id="slide2" className="carousel-item relative  w-screen">
    <img
      src={curosal1}
      className="w-full" />

  </div>
  <div id="slide3" className="carousel-item relative  w-screen">
    <img
      src={curosal3}
      className="w-full" />
   
  </div>
  <div id="slide4" className="carousel-item relative w-screen">
    <img
      src={board1}
      className="w-full" />
   
  </div>
    <div id="slide5" className="carousel-item relative  w-screen">
    <img
      src={board2}
      className="w-full" />
   
  </div>
</div>
</div>
  )
}

export default Carusol
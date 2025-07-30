
import React from 'react'
import offer1 from "../assets/img/offer1.jpg"
import offer2 from "../assets/img/offer2.jpg"
import offer3 from "../assets/img/offer3.jpg"
import offer4 from "../assets/img/offer4.jpg"
import offer5 from "../assets/img/offer5.png"
import offer6 from "../assets/img/offer6.jpg"

import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>


<div className='flex h-1/2 justify-center'>

<div className="carousel  w-screen">
  
  <div id="slide1" className="carousel-item bg-blue-950 justify-end flex  w-screen">
   <Link to="/offers">
     <div className="hero min-h-screen" style={{backgroundImage:`url(${offer5})`,backgroundSize:"cover"}}>
     <div className="hero-overlay w-screen justify-end"></div>
  </div>
    </Link>
  </div>


  <div id="slide2" className="carousel-item bg-blue-950 justify-end flex  w-screen">
   <Link to="/offers">
     <div className="hero min-h-screen" style={{backgroundImage:`url(${offer4})`,backgroundSize:"cover"}}>
     <div className="hero-overlay w-screen justify-end"></div>
  </div>
    </Link>
  </div>


  <div id="slide3" className="carousel-item bg-blue-950 justify-end flex  w-screen">
   <Link to="/offers">
     <div className="hero min-h-screen" style={{backgroundImage:`url(${offer3})`,backgroundSize:"cover"}}>
     <div className="hero-overlay w-screen justify-end"></div>
  </div>
    </Link>
  </div>


  <div id="slide4" className="carousel-item bg-blue-950 justify-end flex  w-screen">
   <Link to="/offers">
     <div className="hero min-h-screen" style={{backgroundImage:`url(${offer2})`,backgroundSize:"cover"}}>
     <div className="hero-overlay w-screen justify-end"></div>
  </div>
    </Link>
  </div>


  <div id="slide5" className="carousel-item bg-blue-950 justify-end flex  w-screen">
   <Link to="/offers">
     <div className="hero min-h-screen" style={{backgroundImage:`url(${offer1})`,backgroundSize:"cover"}}>
     <div className="hero-overlay w-screen justify-end"></div>
  </div>
    </Link>
  </div>


</div>
</div>
</div>
  )
}

export default Hero
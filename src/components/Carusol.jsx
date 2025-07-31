import React from 'react';
import curosal1 from "../assets/img/board4.png";
import curosal2 from "../assets/img/board3.jpg";
import curosal3 from "../assets/img/Curosal3.png";
import board1 from "../assets/img/board1.jpg";
import board2 from "../assets/img/board2.jpg";

const Carusol = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="carousel w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[625px]">
       
        <div id="slide1" className="carousel-item w-full">
          <img src={curosal2} alt="Slide 1" className="w-full h-full object-cover"/>
        </div>

        
        <div id="slide2" className="carousel-item w-full">
          <img src={curosal1} alt="Slide 2" className="w-full h-full object-cover"/>
        </div>

        <div id="slide3" className="carousel-item w-full">
          <img src={curosal3} alt="Slide 3" className="w-full h-full object-cover"/>
        </div>

     
        <div id="slide4" className="carousel-item w-full">
          <img src={board1} alt="Slide 4" className="w-full h-full object-cover"/>
        </div>

 
        <div id="slide5" className="carousel-item w-full">
          <img src={board2} alt="Slide 5" className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default Carusol;

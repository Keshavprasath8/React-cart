import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';


const Topnav = () => {
        const { state } = useLocation();

        if (!state) {
            
            return null;
        }


  return (
    <div className='bg-[#1d2b64]'>
    <p style={{ boxShadow:" 15px 0px 20px black" }} className='font-light text-center  w-screen z-20 text-[28px]'>Welcome {state.name} ! </p>
    </div>
  )
}

export default Topnav
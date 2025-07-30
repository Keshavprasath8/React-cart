import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/img/shopping-bag.gif"
import { useState } from 'react';
import cart from "../assets/img/cart1.gif"
import bag from "../assets/img/onlinestore.gif"
import offer from "./../assets/img/sale.gif"
import logout from "../assets/img/logout1.gif"
import home from "../assets/img/location.gif"
import Topnav from './Topnav';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [hovered,setHoverded]=useState(false);
    const [hovered0,setHoverded0]=useState(false);
    const [hovered1,setHoverded1]=useState(false);
    const [hovered2,setHoverded2]=useState(false);
    const [hovered3,setHoverded3]=useState(false);

    const handleLogout = ()=>{
      toast.success("Successfully logged out");
    }
  
  return (
    
    <div className="" > 
    <style>
        {`
          body {
            background: black;
          }
        `}
      </style>
  <Topnav/>
    <nav style={{ background: "  rgba(138, 138, 138, 0.548)" }} className='flex justify-between sticky items-center p-2 pr-10  w-screen shadow-md'>

       <div>
            <a href='/home'><img className='w-[60px] h-[60px] rounded-[50px]' src={logo}/></a>
        </div>
        <ul className='flex space-x-4 align-center gap-5 justify-between'>
      <li style={{transform: "scale(0.90)"}} 
        onMouseEnter={() => setHoverded0(true)} 
        onMouseLeave={() => setHoverded0(false)} 
        className='font-normal  transition-all duration-300 ease-in-out  text-[21px]   hover:bg-gray-50 hover:w-[150px] hover:mx-auto hover:rounded-[25px]  px-4 py-1 hover:text-black '>
          <Link to="/home">{hovered0 ? (<div className='flex justify-center items-center'><img src={home} alt="logout" className="   mx-auto w-10 h-10"/><p>Home</p></div>):("Home")}</Link></li>  
      
      <li style={{transform: "scale(0.90)",transition: "transform 0.3s ease-in-out"}} 
        onMouseEnter={() => setHoverded1(true)} 
        onMouseLeave={() => setHoverded1(false)} 
        className='font-normal   text-[21px] transition-all duration-300 ease-in-out   hover:bg-gray-50 hover:w-[150px] hover:mx-auto hover:rounded-[25px]  px-4 py-1 hover:text-black '>
          <Link to="/shopping">{hovered1 ? (<div className='flex justify-center items-center'><img src={bag} alt="logout" className="   mx-auto w-10 h-10"/>Shopping</div>):("Shopping")}</Link></li>      


    <li style={{transform: "scale(0.90)",transition: "transform 0.3s ease-in-out"}}
     onMouseEnter={() => setHoverded(true)} 
     onMouseLeave={() => setHoverded(false)} 
     className='font-normal transition-all duration-300 ease-in-out  hover:bg-gray-50 hover:rounded-[25px] hover:w-[150px] hover:px-3 px-4 py-1 hover:border-black hover:border-2 hover:text-black text-[21px]'>
         <Link to="/cart">{hovered ? (<div className=' flex justify-center items-center'><img src={cart} alt="logout" className=" mx-auto w-10 h-10"/><p>Order</p></div>):("Order")}</Link></li>

    <li style={{transform: "scale(0.90)",transition: "transform 0.3s ease-in-out"}} 
        onMouseEnter={() => setHoverded2(true)} 
        onMouseLeave={() => setHoverded2(false)}
        className='font-normal transition-all duration-300 ease-in-out   text-[21px]   hover:bg-gray-50 hover:w-[150px] hover:mx-auto hover:rounded-[25px]  px-4 py-1 hover:text-black '>
          <Link to="/Offers">{hovered2 ? (<div className='flex justify-center items-center'><img src={offer} alt="logout" className="mx-auto w-10 h-10"/><p>Offers</p></div>):("Offers")}</Link></li>
    <li style={{transform: "scale(0.90)",transition: "transform 0.3s ease-in-out"}} 
        onMouseEnter={() => setHoverded3(true)} 
        onMouseLeave={() => setHoverded3(false)}
        className='font-normal transition-all duration-300 ease-in-out   text-[21px]  hover:bg-gray-50 hover:rounded-[25px] hover:w-[150px]  px-4 py-1 hover:text-black'>
        <Link onClick={handleLogout} to="/">{hovered3 ? (<div className='flex justify-center items-center'><img src={logout} alt="logout" className="mx-auto w-10 h-10"/><p>Logout</p></div>):("Logout")}</Link></li>
        </ul>
      </nav>
    </div>
 
  )
}

export default Navbar
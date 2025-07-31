import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/shopping-bag.gif";
import cart from "../assets/img/cart1.gif";
import bag from "../assets/img/onlinestore.gif";
import offer from "../assets/img/sale.gif";
import logout from "../assets/img/logout1.gif";
import home from "../assets/img/location.gif";
import Topnav from './Topnav';
import toast from 'react-hot-toast';
import { GoHomeFill } from "react-icons/go";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { PiShoppingCartDuotone } from "react-icons/pi";


const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered0, setHovered0] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  const handleLogout = () => {
    toast.success("Successfully logged out");
  };

  return (
    <div>
      
      <Topnav />

  
      <nav className='flex fixed z-10 backdrop-blur-3xl bg-[#5757573b] justify-between items-center p-2 pr-5 w-full shadow-md'>


 
        <div className='flex items-center justify-between w-screen gap-10'>
          
            <a href='/home'><img className='w-[60px] h-[60px] rounded-full' src={logo} alt="logo" /></a> 
          <label htmlFor="nav-drawer" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </label>
          
        </div>

 
        <ul className='hidden lg:flex space-x-4 gap-5 items-center'>

          <li onMouseEnter={() => setHovered0(true)} onMouseLeave={() => setHovered0(false)}
            className='font-normal text-[20px] transition-all hover:bg-gray-50 hover:rounded-[25px] hover:w-[150px] px-4 py-1 hover:text-black'>
            <Link to="/home">
              {hovered0 ? <div className='flex items-center justify-center'><img src={home} className="w-8 h-8 mr-2" /><p>Home</p></div> : "Home"}
            </Link>
          </li>

          <li onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)}
            className='font-normal text-[20px] transition-all hover:bg-gray-50 hover:rounded-[25px] hover:w-[150px] px-4 py-1 hover:text-black'>
            <Link to="/shopping">
              {hovered1 ? <div className='flex items-center justify-center'><img src={bag} className="w-8 h-8 mr-2" />Shopping</div> : "Shopping"}
            </Link>
          </li>

          <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            className='font-normal text-[20px] transition-all hover:bg-gray-50 hover:rounded-[25px] hover:w-[150px] px-4 py-1 hover:text-black'>
            <Link to="/cart">
              {hovered ? <div className='flex items-center justify-center'><img src={cart} className="w-8 h-8 mr-2" />Order</div> : "Order"}
            </Link>
          </li>

          <li onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)}
            className='font-normal text-[20px] transition-all hover:bg-gray-50 hover:rounded-[25px] hover:w-[150px] px-4 py-1 hover:text-black'>
            <Link to="/Offers">
              {hovered2 ? <div className='flex items-center justify-center'><img src={offer} className="w-8 h-8 mr-2" />Offers</div> : "Offers"}
            </Link>
          </li>

          <li onMouseEnter={() => setHovered3(true)} onMouseLeave={() => setHovered3(false)}
            className='font-normal text-[20px] transition-all hover:bg-gray-50 hover:rounded-[25px] hover:w-[150px] px-4 py-1 hover:text-black'>
            <Link to="/" onClick={handleLogout}>
              {hovered3 ? <div className='flex items-center justify-center'><img src={logout} className="w-8 h-8 mr-2" />Logout</div> : "Logout"}
            </Link>
          </li>
        </ul>
      </nav>

      <input id="nav-drawer" type="checkbox" className="drawer-toggle hidden" />
      <div className="drawer-side z-40">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content ">

          <li><Link to="/home" onClick={() => setHovered0(false)}><GoHomeFill /> <span className='text-lg hover:bg-gray-300 hover:text-gray-700'>Home</span></Link></li>
          <li><Link to="/shopping" onClick={() => setHovered1(false)}><MdOutlineShoppingBag /> <span  className='text-lg hover:bg-gray-300 hover:text-gray-700'>Shopping</span></Link></li>
          <li><Link to="/cart" onClick={() => setHovered(false)}><PiShoppingCartDuotone /> <span  className='text-lg hover:bg-gray-300 hover:text-gray-700'  >Order</span></Link></li>
          <li><Link to="/Offers" onClick={() => setHovered2(false)}><BiSolidOffer /> <span  className='text-lg hover:bg-gray-300 hover:text-gray-700'>Offers</span></Link></li>
          <li><Link to="/" onClick={handleLogout}><IoMdLogOut /> <span  className='text-lg hover:bg-gray-300 hover:text-gray-700'> Logout</span></Link></li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;

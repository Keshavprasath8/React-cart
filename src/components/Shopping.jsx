import React, { useState } from 'react'
import "../assets/product.css"
import { useEffect } from 'react';
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { cartto } from '../features/addCart';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import cart from "../assets/img/cart1.gif"
 import { motion, useScroll } from "framer-motion";

const FetchPage = () => {


  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [hoverId1, setHoverId1] = useState(null);
   const { scrollYProgress } = useScroll();

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.in/api/products');
      const result = await response.json();
      setData(result.products);
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  const handle = (item) => {
    dispatch(cartto({
      id: item.id,
      image: item.image,
      price: item.price,
    }));
    toast.success(`${item.title.length > 30 ? item.title.substring(0, 15) + "..." : item.title} added to cart!`);
  };



  return (
    <div className='overflow-hidden fetch'>
      <style>
        {`.fetch{
            background: linear-gradient(to right, #f8cdda, #1d2b64);
            height: full;
            }
          
        `}
      </style>
           <Navbar  />
                 <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

        <div className=' flex flex-wrap gap-10 mt-17 px-5 py-5 justify-center items-center'>
          { data.map( (item, index) => {
            return (
              <div className='flex' key={index}>
                <div className='contain w-fit' key={index}>
                  <div className='card ' id='card'>
                    <div >
                      <img className='imge' id='imge' src={item.image} alt="ime" />
                      <Link className='text-decoration-none ' to={`/products/${item.id}`}><h2 className='title ' id='cnt' style={{ width: "fit-content" }}> {item.title.length > 30 ? item.title.substring(0, 15) + "..." : item.title} </h2></Link>
                    </div>
                    <div id='cnt'>
                      <h3 className='fs-6 text-black'>Price $ : {item.price}</h3>
                         <button 
                              key={item.id} id={`btn-${item.id}`}
                              className={`font-normal border-2 rounded-2xl mt-2 px-3 py-1 text-[15px] transition-all duration-300 ease-in-out hover:bg-gray-50 hover:border-black hover:text-black`}
                              style={{transform: "scale(1.10)", width: "160px",height: "40px",display: "flex",justifyContent: "center",alignItems: "center",gap: "6px"}}
                              onMouseEnter={() => setHoverId1(item.id)}
                              onMouseLeave={() => setHoverId1(null)}
                              onClick={() => handle(item)}>
                              {hoverId1 === item.id ? (<><img src={cart} alt="cart" className="w-5 h-5" /><span>Add to Cart</span></>) : ("Add to Cart")}
                          </button>
                    </div>
                  </div>
                </div>
              </div>
             ) } ) }
        </div>

      <Footer />
    </div>
  )
}

export default FetchPage
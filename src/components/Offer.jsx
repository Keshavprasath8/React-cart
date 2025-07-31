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


const FetchPage = () => {


  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [hoverId, setHoverId] = useState(null);
  const [hover5, setHover5] = useState(false)


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
      <Navbar />
      <div className='grid grid-cols-1 mt-16 lg:grid-cols-2 w-full gap-10 px-4 py-6 '>
        {data.map((item, index) => {
          return (
            <div className='flex justify-center' key={index}>
              <div className='w-full max-w-3xl' key={index}>
                <div className='flex flex-col md:flex-row border-2 rounded-4xl px-3 py-3 justify-center items-center' id=''>
                  <div className='flex-shrink-0 mb-4 md:mb-0 md:mr-6'>
                    <img
                      className="w-[250px] rounded-4xl h-[250px] object-cover transition-transform duration-300 hover:scale-90 cursor-pointer"
                      src={item.image}
                      alt="img"
                    />


                  </div>
                  <div className='flex flex-col  px-2 sm:px-5'>
                    <Link className='text-decoration-none hover:text-black' to={`/products/${item.id}`}><h2 className='title'> {item.title.length > 60 ? item.title.substring(0, 40) + "..." : item.title} </h2></Link>
                    <h3 className='fs-6 mt-3 text-black'>Category : {item.category} </h3>
                    <div className='mt-15'>
                      <h3 className='fs-6 text-black'>Price : <span className='font-bold'>$ {item.price} </span> </h3>
                      <h3 className='fs-6 text-black'>Discount : <span className='text-2xl font-bold'> {item.discount} %</span> </h3>


                      <button key={item.id} id={`btn-${item.id}`}

                        className='font-normal border-2 rounded-2xl w-[200px] h-[48px]  mt-2 object-cover transition-all  cursor-pointer flex items-center justify-center gap-2 duration-300 ease-in-out hover:bg-gray-50 hover:rounded-[25px]  px-4 py-1 hover:border-black hover:border-2 hover:text-black text-[21px]'
                        style={{ transform: "scale(0.90)" }}
                        onMouseEnter={() => setHoverId(item.id)}
                        onMouseLeave={() => setHoverId(null)}
                        onClick={() => handle(item)}>
                        {hoverId === item.id ? (<div className='flex justify-center items-center'><img src={cart} alt="cart" className=" mx-auto w-10 h-10" /><p>Add to Cart</p></div>) : ("Add to Cart")}</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <Footer />
    </div>
  )
}

export default FetchPage
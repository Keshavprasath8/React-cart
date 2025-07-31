import { useState, useEffect } from 'react';
 import "../assets/product.css";
 import Navbar from './Navbar';
 import { useDispatch } from 'react-redux';
 import { cartto } from '../features/addCart';
 import { toast } from 'react-hot-toast';
 import { Link } from 'react-router-dom';
 import Footer from './Footer';
 import Hero from './Hero';
 import cart from "../assets/img/cart1.gif";
 import { motion, useScroll } from "framer-motion";
import Footerabove from './Footerabove';
 
 const FetchPage = () => {
const dispatch = useDispatch();
const [data, setData] = useState([]);
const [hoverId, setHoverId] = useState(null);
 const { scrollYProgress } = useScroll();
const fetchData = async () => {
  try {
    const response = await fetch('https://fakestoreapi.in/api/products');
    const result = await response.json();
    setData(result.products);
    console.log("Data Fetched:", result);
    } 
    catch (error) {
    console.error('Error fetching data:', error);
 }
  };
useEffect(() => {
  fetchData();
  }, []);
const handle = (item) => {
   dispatch(cartto({
     id: item.id,
     image: item.image,
     price: item.price,
   }));
  toast.success(`${item.title.length > 30 ? item.title.substring(0, 15) + "..." : item.title} added to cart!`);
    };
 return (
    <div className= 'fetch overflow-hidden'>
       <Navbar />
      <style>{`
        .fetch {
          background: linear-gradient(to right, #f8cdda, #1d2b64);
        }
      `}</style>

   
      <Hero />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className=' py-10 px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center'>
          {data.map((item) => (
            <div key={item.id} className='bg-[#ffffff41] rounded-[25px] shadow-lg p-4 w-full max-w-xs transition-transform duration-300 hover:scale-105'>
              <img src={item.image} alt={item.title} className='h-60 w-full shadow-xl rounded-[25px] mb-4' />
              
              <Link to={`/products/${item.id}`}>
                <h2 className='text-lg font-semibold text-center text-black mb-2'>
                  {item.title.length > 40 ? item.title.substring(0, 40) + "..." : item.title}
                </h2>
              </Link>

              <h3 className='text-md text-center text-black mb-4'>Price: ${item.price}</h3>

              <button
                className='w-full flex items-center justify-center gap-2 py-2 border-0 border-black rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300'
                onMouseEnter={() => setHoverId(item.id)}
                onMouseLeave={() => setHoverId(null)}
                onClick={() => handle(item)}
              >
                {hoverId === item.id ? (
                  <>
                    <img src={cart} alt="cart" className='w-5 h-5' />
                    Add to Cart
                  </>
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
          ))}
      </div>
      </div>
      <Footerabove />
    <Footer />
  </div>
  );
};
export default FetchPage;

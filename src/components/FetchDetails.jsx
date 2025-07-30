import React, { useState, useEffect } from 'react';
import "../assets/product.css";
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { cartto } from '../features/addCart';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import cart from "../assets/img/cart1.gif"

const FetchPage = (name) => {
    const [data, setData] = useState([]);
    const [hoverId, setHoverId] = useState(null);
    const { id } = useParams();
    
  const dispatch = useDispatch();
    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);
            const result = await response.json();
            setData([result.product]);
            console.log(data);
        } catch (error) {
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
        <div className='fetch  w-screen' >
            <style>
                {`.fetch {
          background: linear-gradient(to right, #f8cdda, #1d2b64);
          height: full;
          width: full;
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          overflow: hidden;
        }`}
            </style>
            <nav>
                <Navbar />
            </nav>
            <div className='px-5  overflow-hidden py-6'>
                {data.map((item, index) => (
                    <div className='flex mx-auto justify-center overflow-hidden' key={index}>
                        
                            <div className='flex  items-start' style={{
                                width: "85%", height: "100%", backgroundColor: '#d8d8d899', border: '0px solid #ccc',
                                borderRadius: '30px',
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                marginTop: '10px', padding: '20px'
                            }} >
                                <div>
                                    <img className='rounded-[30px]' src={item.image} alt="product" />
                                </div>
                                <div className='flex flex-col justify-center gap-10' id='cnt'>
                                    <div>
                                        <h3 className='text-3xl text-black'>Title : {item.title}</h3>
                                        <h3 className='text-2xl text-black'>Price $ : {item.price}</h3>
                                    </div>
                                    <button
                                        key={item.id} id={`btn-${item.id}`}
                                        className={`font-normal border-0 rounded-2xl bg-gray-600  mt-5 px-3 py-1 text-[15px] transition-all duration-300 ease-in-out hover:bg-gray-50 hover:border-black hover:text-black`}
                                        style={{ transform: "scale(1.10)", width: "160px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", gap: "6px" }}
                                        onMouseEnter={() => setHoverId(item.id)}
                                        onMouseLeave={() => setHoverId(null)}
                                        onClick={() => handle(item)}>
                                        {hoverId === item.id ? (<><img src={cart} alt="cart" className="w-5 h-5" /><span>Add to Cart</span></>) : ("Buy Now")}
                                    </button>
                                    <div>

                                        <h3 className='text-2xl text-black w-2xl'> Description :<br /><br /> {item.description}</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default FetchPage;

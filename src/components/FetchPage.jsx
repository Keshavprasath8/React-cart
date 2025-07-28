import React, { useState } from 'react'
import"../assets/product.css"
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartto } from '../features/addCart';
// import Cart from './CartPage';
const FetchPage = () => {
    const dispatch = useDispatch();
    const {state} =useLocation()
    const [data, setData] = useState([]);
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
  
    useEffect(()=>{
        fetchData();
    },[])

 const handle= (item) => {
    dispatch(cartto({
      id: item.id,
      image: item.image,
      price: item.price,
    }));
  };
  return (
    <div className='overflow-hidden'>
        <style>
        {`.fetch{
            background: linear-gradient(to right, #f8cdda, #1d2b64);
            height: full;
            }
          
        `}
      </style>
        <nav style={{background:" rgba(138, 138, 138, 0.435)"}}  className='flex justify-between items-center p-4 sticky top-0 bg-blend-screen w-screen shadow-md'>
            <p className='font-light text-[28px]'>Welcome {state.name} ! </p>
              <ul className='flex space-x-4 justify-around'>
                <li className='font-normal hover:bg-blue-900 hover:rounded-[25px] px-4 py-1 hover:text-blue-100 text-[21px]'><Link to={"cart"}>Cart</Link></li>
                <li className='font-normal text-[21px]  hover:bg-blue-900 hover:rounded-[25px] px-4 py-1 hover:text-blue-100'><Link to={"/"}>Logout</Link></li>
               </ul> 
        </nav>
        <div  >
            {/* <Cart /> */}
<div className='fetch flex flex-wrap gap-10 px-5 py-5 justify-center items-center'>
             {data.map((item, index) => {
      return(

     <div className='flex' key={index}>
      <div className='contain w-fit' key={index}>
      <div className='card 'id='card'>
      <div >
       <img className='imge' id='imge' src={item.image} alt="ime" />
      <Link  className='text-decoration-none ' ><h2 className='title 'id='cnt' style={{ width:"fit-content"}}> {item.title.length > 30 ? item.title.substring(0, 15) + "..." : item.title} </h2></Link>
      </div>
      <div id='cnt'>
      <h3 className='fs-6 text-black'>Price $ : {item.price}</h3>
      <button id='btn' onClick={()=>handle(item)} className='btn my-1 hover:bg-pink-200' >Add to Cart</button>
      </div> 
      </div>
      </div>
    </div>
             )

    })}
</div> 
</div>
    </div>     
  )
}

export default FetchPage
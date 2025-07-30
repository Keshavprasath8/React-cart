
import '../assets/product.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/addCart';  
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';
import cart from "../assets/img/delete.gif"

const CartPage = () => {
  const [hoverId, setHoverId] = useState(null);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

const dispatch = useDispatch();

const handleRemove= (itemId) => {
  dispatch(removeFromCart(itemId));
}
  return (
    <div className="fetch h-screen w-screen">
            <style>
        {`.fetch{
            background: linear-gradient(to bottom, #1d2b64, #f8cdda);
            background-size: cover;
            backaround-repeat: no-repeat;
            background-attachment: fixed;
            width: full;
            height: full;
            }
          
        `}
      </style>
      <Navbar/>
      <div className='flex justify-between w-screen px-5 py-4'>
        <h2 className="text-xl font-bold">Cart ({cartItems.length} items)</h2>
        <h3 className="text-right text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
      </div>

      <div className='fetch flex flex-wrap gap-10 px-5 py-5 items-center'>
        {cartItems.length === 0 ? (
            <>
            <p className="text-gray-500 text-center  mt-8 text-lg w-full"> <span className='text-3xl text-gray-800'>🛒 Cart is empty</span></p>
             <Link to="/shopping" className='text-center mx-auto'><button className='text-center mx-auto p-3 rounded-2xl hover:bg-pink-200 hover:text-black hover:font-semibold border-[2px]'>Go Back to Shopping</button></Link>
            </>
          
        ) : (

          cartItems.map( (item, index) => {
                      return (
                        <div className='flex' key={index}>
                          <div className='contain w-fit' key={index}>
                            <div className='card ' id='card'>
                              <div >
                                <img className='imge' src={item.image} alt="ime" />
                              </div>
                              <div id='cnt'>
                                <h3 className='fs-6 text-black'>Price $ : {item.price}</h3>
                                <h3 className='fs-6 text-black'>Quantity : {item.quantity}</h3>
              <button 
                  key={item.id} id={`btn-${item.id}`}
                  className={`font-normal border-2 rounded-2xl mt-2 px-3 py-1 text-[15px] transition-all duration-300 ease-in-out hover:bg-gray-50 hover:border-black hover:text-black`}
                  style={{transform: "scale(1.10)", width: "160px",height: "40px",display: "flex",justifyContent: "center",alignItems: "center",gap: "6px"}}
                  onMouseEnter={() => setHoverId(item.id)}
                  onMouseLeave={() => setHoverId(null)}
                  onClick={() => handleRemove(item.id)}>
                  {hoverId === item.id ? (<><img src={cart} alt="cart" className="w-15 h-15" /><span>Remove</span></>) : ("Remove from Cart")}
              </button>
          
                             </div>
                            </div>
                          </div>
                        </div>
                       ) } )
        )}
      </div>
    </div>
  );
};

export default CartPage;

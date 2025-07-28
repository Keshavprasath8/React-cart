import { useSelector } from 'react-redux';
import '../assets/product.css';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="">
      <div className='flex justify-between w-screen px-5 py-4'>
        <h2 className="text-xl font-bold">Cart ({cartItems.length} items)</h2>
        <h3 className="text-right text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
      </div>

      <div className='fetch flex flex-wrap gap-10 px-5 py-5 items-center'>
        {cartItems.length === 0 ? (
            <>
            <p className="text-gray-500 text-center mt-8 text-lg w-full">🛒 Cart is empty</p>
             <Link className='text-center mx-auto p-3 rounded-2xl hover:bg-pink-200 hover:text-black hover:font-semibold border-[2px]' to= "/home ">Go Back to Shopping</Link>
            </>
          
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className='flex'>
              <div className='contain w-fit'>
                <div className='card' id='card'>
                  <img id='imge' src={item.image} alt="product" className="w-32 imge h-32 object-contain mx-auto" />
                  <div className='px-4'>
                   <p className="mt-2 font-light">Price: <span className='font-bold'>$ {item.price}</span> </p>
                  <p className="text-sm font-light">Quantity: <span className='font-bold'>{item.quantity}</span> </p>
                  <p className="text-sm font-light">Total: <span className='font-bold'>$ {(item.price * item.quantity).toFixed(2)}</span> </p>  
                  </div>
                 
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartPage;

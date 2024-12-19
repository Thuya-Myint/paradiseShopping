import React from 'react'
import { useRecoilState } from 'recoil'
import { cartItemState } from '../../state/atom'
import { Link } from 'react-router-dom'
import { plants } from '../../constants/plants'
const Carts = () => {
   const [cartItems, setcartItems] = useRecoilState(cartItemState)
   const handleCartItems = (operator, index) => {
      if (operator === '+') {
         setcartItems(cartItems.map(item =>
            item.plantId === index + 1 ? { ...item, quantity: item.quantity + 1 } : item
         ))
      } else if (operator === '-') {
         setcartItems(cartItems.map(item =>
            item.plantId === index + 1 && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
         ))
      } else {
         setcartItems(cartItems.filter((item) => item.plantId !== index + 1))
      }
   }
   return (
      <div>
         <div className={` ${cartItems.length > 0 && 'grid grid-cols-2'}  md:grid-cols-3 gap-4 container mx-auto px-4 py-6`}>
            {
               cartItems.length > 0 ?
                  cartItems.map((item, index) => (
                     <div key={index} className=' bg-white p-4 rounded-lg shadow-md'>
                        <div className='flex justify-between items-center'>
                           <p>Plant {item.plantId}</p>
                           <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                           <p>Price {"-> $" + item.priceEach * item.quantity}</p>
                           <div className=' text-white rounded-md'>
                              <button className='transition-all duration-200 bg-verde rounded-l-lg active:bg-opacity-40 w-[40px] h-[30px] border-r-2 bg-opacity-100'
                                 onClick={() => handleCartItems('+', index + 1)}
                              >+</button>
                              <button className='transition-all duration-200 active:bg-opacity-40 bg-verde rounded-r-lg w-[40px] h-[30px]'
                                 onClick={() => handleCartItems('-', index + 1)}
                              >-</button>
                           </div>
                        </div>
                        <div className='w-full flex justify-center' onClick={() => handleCartItems('r', index + 1)}>
                           <button className='mt-4 bg-red-500 text-white w-[100px] h-[30px] rounded-md'>Remove</button>
                        </div>
                     </div>
                  )
                  ) : <div className='text-center p-2 italic font-light bg-verde rounded-md flex items-center justify-between'>
                     <div className='text-white'>
                        No items in the cart
                     </div>
                     <Link
                        to="/products"
                        aria-label="Get started with our products"
                        className='hover:underline'
                     >{'Go to Products >>>'}</Link>
                  </div>
            }
         </div>

         <div className='bg-white p-4 rounded-lg shadow-md container mx-auto px-4 py-6 mb-4'>
            {
               cartItems.length > 0 &&
               <div className='flex justify-between items-center'>
                  <p>Total Price</p>
                  <p>{cartItems.reduce((acc, item) => acc + item.priceEach * item.quantity, 0)}</p>
               </div>
            }
         </div>
         <div className='bg-white p-4 rounded-lg flex gap-4 justify-between items-center shadow-md container mx-auto px-4 py-6 mb-4 '>
            {
               plants.map((plant, index) => (
                  <div>
                     <img src={plant} alt="Plant" className="w-[160px] h-[80px] object-cover rounded-lg" />
                  </div>
               ))
            }
            <button className='bg-verde text-white italic h-[40px] p-2 rounded-md'
               onClick={() => alert('Comming Soon!😍')}
            >Comming Soon!</button>
         </div>
      </div>
   )
}

export default Carts

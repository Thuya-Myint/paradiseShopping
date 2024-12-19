import React from 'react';
import { NavLink } from 'react-router-dom';
import { cartItemState } from '../state/atom'
import { useRecoilValue } from 'recoil';


const Header = () => {
   const count = useRecoilValue(cartItemState).length

   return (
      <div className="relative w-full h-[60vh] bg-header">
         <div className="bg-black bg-opacity-40 absolute inset-0 flex flex-col items-center justify-between">
            <div className="bg-verde px-4 py-4 rounded-b-[30px] flex items-center gap-2">
               Paradise Shopping
               <NavLink
                  to="/products"
                  className="bg-white px-2 rounded-full"
                  aria-label="Get started with our products"
               >
                  Get started
               </NavLink>
            </div>
            <p className="w-[60%] text-justify bg-verde p-4 rounded-lg text-white">
               A plant shop is a haven for plant enthusiasts and anyone looking to add a touch of greenery to their spaces. These shops typically offer a variety of indoor and outdoor plants, ranging from low-maintenance succulents and air-purifying houseplants to vibrant flowering plants and larger landscaping options.
            </p>
            <div className="w-full flex justify-evenly">
               <NavLink
                  to="/products"
                  aria-label="Get started with our products"
                  className="w-[100px] text-center text-white bg-verde p-2 rounded-t-lg"
               >
                  Products
               </NavLink>
               <NavLink
                  to="/carts"
                  aria-label="See your carts"
                  className="w-[100px]   relative text-center text-white bg-verde p-2 rounded-t-lg flex gap-4 justify-center"
               >
                  <span>Carts</span>
                  <span className='bg-white w-[25px] h-[25px] absolute rounded-full text-verde top-[-40%] right-[-10px]'>{count}</span>
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default Header;

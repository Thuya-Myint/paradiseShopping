import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { cartItemState } from '../../state/atom'
import { plants } from '../../constants/plants'
const Products = () => {
   const price = [10, 20, 30, 40, 50, 60]
   const [cartItems, setcartItems] = useRecoilState(cartItemState)
   const [itemId, setitemId] = useState([]);

   useEffect(() => {
      console.log(cartItems)
      console.log(itemId)
   }, [cartItems])
   const handleAddToCart = (index, price) => {
      if (itemId.includes(index + 1)) {
         const filteredItems = itemId.filter((item) => item !== index + 1)
         setitemId(filteredItems)
      } else {
         setitemId([...itemId, index + 1])
      }

      const existingItem = cartItems.find(item => item.plantId === index + 1)
      if (existingItem) {
         setcartItems(cartItems.map(item =>
            item.plantId === index + 1 ? { ...item, quantity: item.quantity + 1, priceEach: price } : item
         ))
      } else {
         setcartItems([...cartItems, { plantId: index + 1, quantity: 1, priceEach: price }])
      }
      console.log("len", cartItems.length)
   }
   return (
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
         {plants.map((plant, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
               <img src={plant} alt="Plant" className="w-full h-[200px] object-cover rounded-lg" />
               <div className='flex justify-between items-center'>
                  <h3 className="text-lg font-bold mt-2">Plant {index + 1}</h3>
                  <p className="text-verde font-bold mt-2">${price[index]}</p>
               </div>
               <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu gravida, ultricies nisl ac, ultricies nisl.</p>
               <button className={`bg-verde text-white px-4 py-2 mt-2 rounded-lg ${itemId.includes(index + 1) ? 'bg-opacity-20 cursor-not-allowed' : 'bg-opacity-100 cursor-pointer'}`}
                  onClick={() => handleAddToCart(index, price[index])}
               >Add to Cart</button>
            </div>
         ))}
      </div>
   )
}

export default Products

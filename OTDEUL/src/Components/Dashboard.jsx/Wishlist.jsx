import React from 'react'
import Cards from '../Womens/Cards'

import wish from '../../assets/Images/Icons/like2.png'

function Wishlist() {
  return (
   <div className="bg-[#FFEDAE] p-5 ">
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <span className='p-5'>My Wishlist </span>
                <img src={wish} alt="wish list" />
            </div>
        
        <button className='bg-black outline-none p-2 rounded-md text-white text-[0.85rem]'>View All</button>
        </div>

     <div className='grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-1 py-6 gap-3 md:h-[100%] '>
        <Cards/>
    </div>
   </div>
  )
}

export default Wishlist
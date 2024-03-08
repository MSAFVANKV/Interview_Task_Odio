import React, { useState } from 'react'
import { IoIosMenu } from 'react-icons/io';
import Sidebar from './Sidebar';

function SidebarLayout() {
  const [open, setOpen] = useState(false);

  return (
    <>
       <div className="md:w-[100px] z-[999] md:block fixed hidden h-[100%]">
        <div className=" h-[50%] bg-[#4F4F4F] flex justify-center pt-10">
          <IoIosMenu size={23} color="white" onClick={() => setOpen(!open)} />
          
        </div>
        <div className=" h-[50%] bg-[#E56F61] flex flex-col justify-center items-center">

        </div>
        
      </div>
      <Sidebar open={open} />
    </>
  )
}

export default SidebarLayout
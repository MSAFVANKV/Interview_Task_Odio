import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Sidebar from "./Sidebar";

function SidebarLayout({ open, setOpen }) {
  //   const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:w-[100px] z-[999] md:block fixed hidden h-[100%]">
        <div className=" h-[50%] bg-[#4F4F4F] flex justify-center pt-10">
          {!open ? (
            <IoIosMenu
              size={23}
              color="white"
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <RxCross2
              size={23}
              color="white"
              className={`cursor-pointer duration-300 ${!open ? '' : ''}`}
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
        <div className=" h-[50%] bg-[#E56F61] flex flex-col justify-center items-center"></div>
      </div>
      <Sidebar open={open} />
    </>
  );
}

export default SidebarLayout;

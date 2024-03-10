import React from "react";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { useOpen } from "../../ContextApi/OpenProvider";

// import images icons
import cart from '../../assets/Images/Icons/cart.png';
import like from '../../assets/Images/Icons/like.png';
import bell from '../../assets/Images/Icons/bell.png';


function SidebarLayout() {
    const { open, setOpen } = useOpen();


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
        <div className=" h-[50%] bg-[#E56F61] flex flex-col justify-center items-center">
            <div className="flex flex-col bottom-10 absolute gap-8">
                <img src={cart} alt="" width={18}/>
                <img src={like} alt="" width={18} />
                <img src={bell} alt="" width={18} />
            </div>
        </div>
      </div>
      <Sidebar open={open} />
    </>
  );
}

export default SidebarLayout;

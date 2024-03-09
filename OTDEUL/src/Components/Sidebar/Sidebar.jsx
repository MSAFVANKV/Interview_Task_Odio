import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import SidebarItems from "./SidebarItems";

function Sidebar({open}) {

 
  return (
    <>
       <div className={`${open? "md:w-[30%] w-full p-7 z-[999999]" : "w-0 "} duration-300 transition-all fixed z-50 md:translate-x-[100px] h-[100vh]  bg-white shadow-xl`}>
       <SidebarItems open={open}/>

        </div>
    </>
  );
}

export default Sidebar;

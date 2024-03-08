import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import SidebarItems from "./SidebarItems";

function Sidebar({open}) {

 
  return (
    <>
       <div className={`${open? "w-72 " : "w-0 "} duration-300 transition-all fixed z-50 translate-x-[100px] h-[100vh]  bg-white shadow-xl`}>
       <SidebarItems open={open}/>

        </div>
    </>
  );
}

export default Sidebar;

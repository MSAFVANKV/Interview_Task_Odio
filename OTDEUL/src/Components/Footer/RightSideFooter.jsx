import React from "react";

import playStore from "../../assets/Images/Brands/playstore.png";
import appStore from "../../assets/Images/Brands/appstore.png";

function RightSideFooter() {
  return (
    <>
    <div className="flex md:w-full gap-2 my-8">
      
        <img src={playStore} alt="" className="" width={110} />
        <img src={appStore} alt="" className="" width={110}/>
      
     
    </div>
    <div className="flex flex-col">
     <input
        type="text"
        className="p-2 border-b-2 border-b-white bg-transparent outline-none"
        placeholder="Enter Your email"
      />
      <button className="p-2 uppercase bg-white text-black mt-5">
        Subscribe
      </button>
     </div>
    </>
    
  );
}

export default RightSideFooter;

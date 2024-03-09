import React from "react";

import footerLogo from "../../assets/Images/footerLogo.png";
import ItemContainer from "./ItemContainer";
import RightSideFooter from "./RightSideFooter";

function Footer() {
  return (
    // absolute left-[-111.87px] top-[ 7108.55px]
    <footer className="w-full  bg-black text-white md:flex md:justify-center">
      <div className="md:flex flex-col md:w-[80%] w-[100%]">
        <div className="w-full md:flex md:px-0 px-6">
          <div className="md:w-[70%]">
            <img src={footerLogo} alt="" className="md:w-fit w-[200px]"/>
            <div className="md:flex md:justify-between sm:pb-8">
              <ItemContainer />
            </div>
          </div>
          {/* ============================= */}
          <div className="md:w-[30%] md:pt-0 pt-10 md:flex md:flex-col md:justify-end ">
                <RightSideFooter/>
          </div>
          {/* ============================== */}
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 
    text-center py-12 items-center text-sm  text-white"
        >
          © 2024 HAASH INDIA EXPORTS PVT LTD
        </div>
      </div>
    </footer>
  );
}

export default Footer;

/* Group 193 */

import React from "react";
import { NavLink } from "react-router-dom";

// imported icons
import { IoIosArrowDown } from "react-icons/io";

// imported images
import Logo from "../../assets/Images/logo.jpg";
import Profile from "../../assets/Images/Icons/profile.png";
import Search from "../../assets/Images/Icons/search.png";


function Header() {
  const navLinks = [
    {
      id: 1,
      path: "/",
      display: "Womens",
      //   icon: AiFillHome,
    },
    {
      id: 2,
      path: "#Kids",
      display: "Kids",
    },
    {
      id: 3,
      path: "#Accessories",
      display: "Accessories",
    },
  ];

  return (
    <header className="lg:h-[90px] h-[60px] flex sticky top-0 items-center justify-between mx-10">
      {/* logo start */}
      <div className="w-[130px]">
        <img src={Logo} alt="Logo" />
      </div>
      {/* logo end */}

      {/* navlinks start */}

      <ul className="md:flex hidden">
        {navLinks.map((item, index) => (
          <li key={index} className="md:mx-4 font-medium text-[#303030]">
            <NavLink to={item.path}>{item.display}</NavLink>
          </li>
        ))}
      </ul>
      {/* navlinks end */}

      <div className="flex gap-5 items-center">
        <div className="md:flex hidden">
          <button className="gap-2 text-[#474747] text-[12px] flex justify-center items-center">
            <div className="w-5 h-5 bg-slate-200 rounded-full flex justify-center p-1 items-center">
              <img src={Profile} alt="" />
            </div>
            Login <IoIosArrowDown className=" translate-y-[0.15rem]" />
          </button>
        </div>

        <div className="flex justify-center items-center relative">
          <input
            type="text"
            className=" border outline-none sm:p-2 p-1 lg:w-[250px] md:w-[200px] sm:w-[180px] w-[180px] sm:text-xs text-[0.65rem]"
            placeholder="Find your perfect style..."
          />
          <img src={Search} alt="search" className="absolute right-1  w-[20px]"  />
        </div>
      </div>
    </header>
  );
}

export default Header;

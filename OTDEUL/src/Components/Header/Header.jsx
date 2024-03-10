import React from "react";
import { Link, NavLink } from "react-router-dom";

// imported icons
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";

// imported images
import Logo from "../../assets/Images/logo.jpg";
import Profile from "../../assets/Images/Icons/profile.png";
import Search from "../../assets/Images/Icons/search.png";
import { useOpen } from "../../ContextApi/OpenProvider";

function Header() {
  const { open, setOpen } = useOpen();
  const handleMenuClick = () => {
    setOpen(!open);
  };
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
    <header className="lg:h-[90px] z-[99999] bg-white w-[100%] h-[70px] flex sticky top-0 items-center justify-between sm:px-10 px-1">
      {/* logo start */}

      <div className="md:hidden cursor-pointer flex justify-center items-center w-10 h-10 rounded-full">
        <IoIosMenu size={24} color="#303030" onClick={handleMenuClick} />
      </div>
      <div className="sm:w-[130px] w-[100px] ">
        <Link to="/"
        smooth={true}
        offset={-70}
        duration={500}
        >
          <img src={Logo} alt="Logo" className="" />
        </Link>
        {/* <a href="#HOME">
      <img src={Logo} alt="Logo" class="" />
    </a> */}
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
            className=" border outline-none p-2 lg:w-[250px] w-[150px]  sm:text-xs text-[0.65rem]"
            placeholder={window.innerWidth < 640 ? "Find..." : "Find your perfect style..."}

          />
          <img
            src={Search}
            alt="search"
            className="absolute right-1  w-[20px]"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

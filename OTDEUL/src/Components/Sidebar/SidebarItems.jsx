import React from "react";
import Logo from "../../assets/Images/logo.jpg";
import { Link } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import {
  FaHistory,
  FaUndo,
  FaBalanceScale,
  FaComments,
  FaWallet,
  FaStar,
  FaTicketAlt,
  FaUserCog,
  FaTrashAlt,
} from "react-icons/fa";

// im[orted images
import Profile from "../../assets/Images/Icons/profile2.png";
import { RxCross2 } from "react-icons/rx";
import { useOpen } from "../../ContextApi/OpenProvider";

function SidebarItems() {
  const { open, setOpen } = useOpen();

  const navLinks = [
    {
      id: 1,
      path: "/dashboard",
      display: "Dashboard",
      icon: AiFillHome,
    },
    {
      id: 2,
      path: "#",
      display: "Purchase History",
      icon: FaHistory,
    },
    {
      id: 3,
      path: "#",
      display: "Refund Requests",
      icon: FaUndo,
    },
    {
      id: 4,
      path: "#",
      display: "Compare",
      icon: FaBalanceScale,
    },
    {
      id: 5,
      path: "#",
      display: "Conversations",
      icon: FaComments,
    },
    {
      id: 6,
      path: "#",
      display: "My Wallet",
      icon: FaWallet,
    },
    {
      id: 7,
      path: "#",
      display: "My Points",
      icon: FaStar,
    },
    {
      id: 8,
      path: "#",
      display: "Support Ticket",
      icon: FaTicketAlt,
    },
    {
      id: 9,
      path: "#",
      display: "Manage Profile",
      icon: FaUserCog,
    },
    {
      id: 10,
      path: "#",
      display: "Delete My Account",
      icon: FaTrashAlt,
    },
  ];

  return (
    <div
      className={`text-black flex flex-col justify-between  h-full items-start `}
    >
      {/* Logo */}
      <div className={`w-[130px]  duration-500 ${!open && "scale-0"}`}>
        <Link to="/"  onClick={() => setOpen(!open)}><img src={Logo} alt="Logo" /></Link>
      </div>
      <RxCross2
        size={23}
        color=""
        className={`md:hidden absolute right-10 top-10 cursor-pointer duration-300 `}
        onClick={() => setOpen(!open)}
      />
      {/* List of items */}
      <div className={``}>
        <ul>
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={` py-1 origin-left duration-500 ${
                !open && "scale-0 "
              }`}
            >
              <Link
                to={item.path}
                className={`${
                  item.id !== 1 ? "text-[#838383]" : "text-black font-bold"
                } flex  items-center text-xs`}
                onClick={() => setOpen(!open)}
              >
                {<item.icon className="mr-2" />}
                {item.display}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Logout button */}
      <div
        className={`mt-4 mb-4 w-full text-black duration-500 ${
          !open && "scale-0"
        }`}
      >
        <div className="flex items-center gap-3 text-sm mb-2">
          <img src={Profile} alt="profile" className="w-[40px] " />
          <div>
            <span className="font-semibold">Dashboard</span> <br />
            <span>haashtechnologies@gmail.com</span>
          </div>
        </div>
        <button className="w-full border border-black px-4 py-2 rounded mt-2">
          Logout
        </button>
      </div>
    </div>
  );
}

export default SidebarItems;

import React from "react";

import cart from "../../assets/Images/Brands/cart.png";
import like from "../../assets/Images/Brands/like.png";
import orders from "../../assets/Images/Brands/orders.png";
import DashboardOrder from "./DashboardOrder";
import Wishlist from "./Wishlist";

function Dashboard() {
  const details = [
    {
      id: 1,
      image: cart,
      quantity: "02",
      name: "Products in Cart",
    },
    {
      id: 2,
      image: like,
      quantity: "03",
      name: "Products in Wishlist",
    },
    {
      id: 3,
      image: orders,
      quantity: "04",
      name: "Total Products Ordered",
    },
  ];
  return (
    <div className="w-full flex flex-col p-5">
      <span className="text-[#393939] text-[32px]">Dashboard</span>
      <div className="my-5">
        <ul className="gap-5 grid sm:grid-cols-3 grid-cols-2 sm:w-[80%]">
          {details.map((order, index) => (
            <div  className="p-3 rounded-lg  border flex items-center">
              <li key={order.id} className="flex ">
                <span className="flex  bg-black w-10 h-10 items-center p-1 rounded-md mr-6  justify-center">
                  <img src={order.image} alt="" className="text-center" />
                </span>
                <div className="flex flex-col">
                  <span>{order.quantity}</span>
                  <span className="text-[0.7rem] sm:text-[0.8rem]  text-[#676767]">{order.name}</span>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <DashboardOrder/>
      <Wishlist/>
    </div>
  );
}

export default Dashboard;

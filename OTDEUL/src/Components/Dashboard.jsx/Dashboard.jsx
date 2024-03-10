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
    <div className="w-full flex flex-col sm:p-10 p-2">
      <span className="text-[#393939] text-[32px]">Dashboard</span>
      <div className="my-5">
        <ul className="sm:gap-5 gap-2 grid sm:grid-cols-3 grid-cols-2 sm:w-[80%] w-[100%]">
          {details.map((order, index) => (
            <div  className="p-2 rounded-lg  border flex items-center">
              <li key={order.id} className="flex ">
                <span className="flex  bg-black sm:w-10 w-7 h-7 sm:h-10 items-center p-1 rounded-md sm:mr-6 mr-3 justify-center">
                  <img src={order.image} alt="" className="text-center" width={20}/>
                </span>
                <div className="flex flex-col">
                  <span>{order.quantity}</span>
                  <span className="text-[0.6rem] sm:text-[0.8rem]  text-[#676767]">{order.name}</span>
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

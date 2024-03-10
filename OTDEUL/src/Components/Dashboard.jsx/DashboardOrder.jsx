import React from "react";

function DashboardOrder() {
  const details = [
    {
      id: 1,
      color: "#FFE3C2",
      quantity: "Rs0.00",
      balence: "Wallet Balance",
      reacharge: "Last Recharge",
      button: "+ Recharge Wallet",
    },
    {
      id: 2,
      color: "#BACDFF",
      quantity2: "Rs0.00",
      totel: "Totel Expenditure",
      button2: "View Order History",
    },
    {
      id: 3,
      color: "#CAFFD6",
      name: "Default Shipping Address",
      button3: "Add New Address",
      address: "Malayamma, NIT Campus, +919846012078, support@ayaboo.in",
    },
  ];
  return (
    <div>
      <div className="my-5">
        <ul className="sm:gap-5 gap-2 grid sm:grid-cols-3 grid-cols-1 ">
          {details.map((order, index) => (
            <div
              key={order.id}
              className={`sm:p-5 p-2 w-full rounded-lg border flex justify-center items-center ${
                order.id === 1
                  ? "bg-[#FFE3C2]"
                  : order.id === 2
                  ? "bg-[#BACDFF]"
                  : order.id === 3
                  ? "bg-[#CAFFD6]"
                  : ""
              } `}
            >
              <li className={`w-[100%] `}>
                <div className="flex flex-col ">
                  <div className="flex gap-16 items-end">
                    <span className="w-10 text-xs leading-4">
                      {order.balence}
                    </span>
                    <span className="font-bold">{order.quantity}</span>
                  </div>
                  {order.totel && order.quantity2 && (
                    <div className="flex gap-16 items-end ">
                      <span className="w-10 text-xs leading-4">
                        {" "}
                        {order.totel}
                      </span>
                      <span className="font-bold"> {order.quantity2}</span>
                    </div>
                  )}
                  {/* card 3 */}
                  {order.id === 3 && (
                    <div className="">
                      <span className="text-[0.9rem] sm:text-[1rem] text-[#464242] mb-2">
                        {order.name}
                      </span>
                      <div className="flex flex-col sm:text-[0.95rem] text-[0.75rem] gap-2 mt-3">
                        <span>
                          <input type="checkbox" className="mr-2" />
                          {order.address}
                        </span>
                        <span>
                          <input type="checkbox" className="mr-2" />
                          {order.address}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* ooooo */}
                  <div className="flex gap-16 items-end my-4">
                    <span className="w-10 text-xs leading-4">
                      {order.reacharge}
                    </span>
                    <span className="font-bold">{order.quantity}</span>
                  </div>
                  {/* ==== */}
                </div>
                {/* buttons */}
                {order.id === 1 ? (
                  <div className="w-full flex justify-center items-center my-5">
                    <button className="border p-1 w-full border-black">
                      {order.button}
                    </button>
                  </div>
                ) : order.id === 2 ? (
                  <div className=" text-start  my-5">
                    <button className="pt-10 text-[0.76rem] w-full text-start">
                      {order.button2} {">"}
                    </button>
                  </div>
                ) : order.id === 3 ? (
                  <div className="flex-col justify-center items-center my-5">
                    <button className="border p-1 w-full border-black">
                      {order.button3}
                    </button>
                  </div>
                ) : null}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardOrder;

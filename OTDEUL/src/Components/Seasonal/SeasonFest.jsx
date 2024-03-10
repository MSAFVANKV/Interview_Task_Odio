import React from "react";

import seasonal1 from "../../assets/Images/season1.png";
import seasonal2 from "../../assets/Images/seasonal2.png";


import seasonCard1 from "../../assets/Images/seasonCard1.png";
import seasonCard2 from "../../assets/Images/seasonCard2.png";
import seasonCard3 from "../../assets/Images/seasonCard3.png";
import seasonCard4 from "../../assets/Images/seasonCard4.png";

function SeasonFest() {
  const cardsData = [
    {
      id: 1,
      title: "Orci sapien",
      image: seasonCard1,
    },
    {
      id: 2,
      title: "Orci sapien",
      image: seasonCard2,
    },
    {
      id: 3,
      title: "Orci sapien",
      image: seasonCard3,
    },
    {
      id: 4,
      title: "Orci sapien",
      image: seasonCard4,
    },
  ];
  return (
    <>
    <div className="md:flex w-[100%] ">
      <div className="md:w-[40%]">
        <div className="flex gap-2 w-full flex-col pt-5 items-center justify-center">
          <h2 className="sm:text-[2rem] text-[1.2rem]   text-center w-[200px]">Seasonal favourites</h2>
          <small className="md:w-[400px] w-[90%] text-center">
            Orci sapien ultrices aliquet ultrices nulla cras ornare sed.
            Facilisis accumsan parturient
          </small>
          <button className="bg-[#EEEEEE] text-xs p-1 font-semibold">View all</button>
        </div>

        {/* ====== cards------------ */}
        <div className="grid grid-cols-2 p-14 gap-3 ">
          {cardsData.map((card, index) => (
            <div className="bg-white h-[250px]  rounded-lg shadow-md">
              <img src={card.image} alt="" className="h-[100%] w-[100%]" />
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-[60%] bg-slate-600">
        <img src={seasonal1} alt="" className="w-full h-full " />
      </div>
    </div>
    {/* ======================== 2nd page ======================== */}
    {/* ===== responsive time on */}
    <div className="md:w-[40%] md:hidden">
        <div className=" flex gap-2 w-full pt-5 flex-col items-center justify-center">
          <h2 className="sm:text-[2rem] text-[1.5rem] text-center w-[200px]">Seasonal favourites</h2>
          <small className="md:w-[400px] w-[90%] text-center">
            Orci sapien ultrices aliquet ultrices nulla cras ornare sed.
            Facilisis accumsan parturient
          </small>
          <button className="bg-[#EEEEEE] text-xs p-1 font-semibold">View all</button>
        </div>

        {/* ====== cards------------ */}
        <div className="grid grid-cols-2 p-14 gap-3 ">
          {cardsData.map((card, index) => (
            <div className="bg-white h-[250px]  rounded-lg shadow-md">
              <img src={card.image} alt="" className="h-[100%] w-[100%]" />
            </div>
          ))}
        </div>
      </div>
          {/* ===== responsive time on */}

    <div className="md:flex w-[100%] ">
    <div className="md:w-[60%] bg-slate-600">
        <img src={seasonal2} alt="" className="w-full h-full " />
      </div>

          {/* ===== responsive time hidden */}

      <div className="md:w-[40%] md:block hidden">
        <div className="flex gap-2 w-full pt-5 flex-col items-center justify-center">
          <h2 className="text-[2rem] text-center w-[200px]">Seasonal favourites</h2>
          <small className="w-[400px] text-center">
            Orci sapien ultrices aliquet ultrices nulla cras ornare sed.
            Facilisis accumsan parturient
          </small>
          <button className="bg-[#EEEEEE] text-xs p-1 font-semibold">View all</button>
        </div>

        {/* ====== cards------------ */}
        <div className="grid grid-cols-2 p-14 gap-3 ">
          {cardsData.map((card, index) => (
            <div className="bg-white h-[250px]  rounded-lg shadow-md">
              <img src={card.image} alt="" className="h-[100%] w-[100%]" />
            </div>
          ))}
        </div>
      </div>
     
    </div>
    </>
  );
}

export default SeasonFest;

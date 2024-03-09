import React from "react";
import Header from "../Components/Header/Header";

// imported images
import img1 from "../assets/Images/img1.png";
import img3 from "../assets/Images/img3.png";
import img2 from "../assets/Images/img2.png";
import img4 from "../assets/Images/Mask group.png";

import profile from "../assets/Images/bg.png";
import seasonal2 from "../assets/Images/seasonal2.png";
import brand1 from "../assets/Images/Brands/brand1.png";
import brand2 from "../assets/Images/Brands/brand2.png";
import brand3 from "../assets/Images/Brands/brand3.png";
import brand4 from "../assets/Images/Brands/brand4.png";
import brand5 from "../assets/Images/Brands/brand5.png";

import WomenBottom from "../Components/Womens/WomenBottom";
import WomenTops from "../Components/Womens/WomenTops";
import SeasonFest from "../Components/Seasonal/SeasonFest";

function Home() {
  const brands = [
    {
      id: 1,
      image: brand1,
      title: "Odio",
    },
    {
      id: 2,
      image: brand2,
      title: "URACCA",
    },
    {
      id: 3,
      image: brand3,
      title: "Wish Bourn",
    },
    {
      id: 4,
      image: brand4,
      title: "you-bit",
    },
    {
      id: 5,
      image: brand5,
      title: "buro man",
    },
  ];
  return (
    <div className=" " id="HOME">
      <section className="h-[100vh] ">
        {/* grid 1 */}
        <div className="grid md:grid-cols-2 grid-cols-1 h-[100%] ">
          <div className="flex md:h-[100%] h-[50vh]  flex-col md:justify-end justify-center">
            <div className="md:w-[50%] w-[70%]  ms-10 md:mb-[8rem]">
              <h3 className="text-4xl text-[#323232]">Women</h3>
              <p className="sm:text-sm text-xs text-[#1F1F1F]">
                Orci sapien ultrices aliquet ultrices nulla cras ornare sed.
                Facilisis accumsan parturient proin eget mauris elementum massa
                ut aliquam. Est mi ut sapien ultrices arcu nullam natoque orci
                sagittis.
              </p>
            </div>
          </div>
          {/* grid 2 */}
          {/*  style={{backgroundImage: `url(${img1})`}} */}
          <div
            className="flex bg-cover bg-no-repeat md:h-[100%] h-[60vh]"
            style={{ backgroundImage: `url(${img1})` }}
          >
            {/* <img src={img1} alt="image1" className="object-cover w-full h-full" /> */}
          </div>
        </div>
      </section>
      {/* sction 2 */}

      <div className="">
        <WomenBottom
          images={img2}
          title="Women Bottom"
          profile={profile}
          PrBg={false}
          cardsBg={true}
        />
        {/* <WomenBottom
          images={img3}
          size={23}
          title="Women Top"
          profile={profile}
          PrBg={true}
          cardsBg={false}
        /> */}
        <WomenTops/>

        <WomenBottom
          images={img4}
          title="Women Lingeries"
          profile={profile}
          PrBg={false}
          cardsBg={true}
        />
        <SeasonFest />

      </div>

      <div className="flex flex-col items-center w-full h-[40vh] justify-center py-5">
        <span>Top Brands</span>
        <div className="flex mt-3 justify-center items-center bg-white">
          <ul className="grid grid-cols-5 md:w-[100%] w-[90%]">
            {brands.map((brand, index) => (
              <li className="lg:w-[130px] md:h-[110px] md:w-[110px]  lg:h-[130px] p-3 border flex justify-center border-gray-200">
                <img
                  src={brand.image}
                  alt={brand.title}
                  className=" object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;

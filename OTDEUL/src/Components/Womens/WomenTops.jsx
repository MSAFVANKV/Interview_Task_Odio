import React from "react";
// import img2 from "../../assets/Images/img2.png";
import profile from "../../assets/Images/bg.png";

// imported images for cards
import card1 from "../../assets/Images/image 1.png";
import img3 from "../../assets/Images/img3.png";
import card2 from "../../assets/Images/image 2.png";
import card3 from "../../assets/Images/image 3.png";
import card4 from "../../assets/Images/image 6.png";
import ratio from "../../assets/Images/Icons/ratio.png";
import cart from "../../assets/Images/Icons/cartwhite.png";
import cartPlus from "../../assets/Images/Icons/+.png";

// import icons
// import { BsCartPlusFill } from "react-icons/bs";
import Cards from "./Cards";

// Define some sample data for the cards
const cardsData = [
  {
    id: 1,
    title: "Orci sapien",
    ratio: ratio,
    comments: "(1,999)",
    content: "Orci sapien ultrices aliquet ultrices nulla cras ornare sed.",
    price: "₹800",
    offerPrice: "₹400",
    offer: "50%",
    image: card1,
  },
  {
    id: 2,
    title: "Orci sapien",
    ratio: ratio,
    comments: "(1,999)",
    content: "Orci sapien ultrices aliquet ultrices nulla cras ornare sed.",
    price: "₹800",
    offerPrice: "₹400",
    offer: "50%",
    image: card2,
  },
  {
    id: 3,
    title: "Orci sapien",
    ratio: ratio,
    comments: "(1,999)",
    content: "Orci sapien ultrices aliquet ultrices nulla cras ornare sed.",
    price: "₹800",
    offerPrice: "₹400",
    offer: "50%",
    image: card3,
  },
  {
    id: 4,
    title: "Orci sapien",
    ratio: ratio,
    comments: "(1,999)",
    content: "Orci sapien ultrices aliquet ultrices nulla cras ornare sed.",
    price: "₹800",
    offerPrice: "₹400",
    offer: "50%",
    image: card4,
  },
];

function WomenTops() {
  return (
    <section className="">
      <div className="grid md:grid-cols-2 grid-cols-1 h-[100%]" >
        <div className="flex md:h-[100%] w-[100%] justify-center items-center relative " style={{ backgroundImage: `url(${profile})` }}>
          <img src={img3} alt="image1" className="" />
          <span className="absolute sm:text-[1.5rem] text-[0.95rem] w-12 bottom-[14%] left-[25%]">
            Women
            <p className="text-[2.5rem] text-[#323232]">Tops</p>
          </span>
        </div>

        {/* grid 2 */}

        <div
          className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:p-12 p-2 gap-3 md:h-[100%]  "
          // style={{ backgroundImage: `url(${profile})` }}
        >
         <Cards cardsData={cardsData}/>
        </div>
      </div>
    </section>
  );
}

export default WomenTops;

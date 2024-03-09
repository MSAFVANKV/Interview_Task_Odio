import React from "react";
import img2 from "../../assets/Images/img2.png";

// imported images for cards
import card1 from "../../assets/Images/image 1.png";
import card2 from "../../assets/Images/image 2.png";
import card3 from "../../assets/Images/image 3.png";
import card4 from "../../assets/Images/image 6.png";
import cart from "../../assets/Images/Icons/cartwhite.png";
import cartPlus from "../../assets/Images/Icons/+.png";
import ratio from "../../assets/Images/Icons/ratio.png";

// import icons
import { BsCartPlusFill } from "react-icons/bs";
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

function WomenBottom({images,profile, PrBg,cardsBg, title, size}) {
    const words = title.split(" ");
  return (
    <section className="">
      <div className="grid md:grid-cols-2 grid-cols-1 h-[100%]"  style={{
            backgroundImage: PrBg ? `url(${profile})` : "bg-white",
          }}>
        <div className="flex h-[100%] w-[100%] justify-center items-start relative ">
          <img src={images} alt="image1" className="md:w-[100%]" />
         
          {/* <span className="absolute text-[1.8rem] w-12 bottom-[5rem] left-[9rem]">
            {title}
            <p className="text-[2.5rem] text-[#323232]">Bottom</p>
          </span> */}
           <span className="absolute text-[1.8rem] w-12 bottom-[5rem] left-[9rem]">
            {/* Apply bold style to the second word */}
            {words.length >= 2 ? (
              <>
                <span className="text-[#323232]">{words[0]} </span>
                <span className="text-[2.5rem] text-[#323232]">{words[1]}</span>
              </>
            ) : (
              title
            )}
          </span>
        </div>

        {/* grid 2 */}

        <div
          className="grid grid-cols-2 p-12 gap-3 md:h-[100%] "
          style={{
            backgroundImage: cardsBg ? `url(${profile})` : "bg-white",
          }}
        >
         <Cards cardsData={cardsData} />
        </div>
      </div>
    </section>
  );
}

export default WomenBottom;

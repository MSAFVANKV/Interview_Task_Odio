import React from "react";
import img2 from "../../assets/Images/img2.png";


// import icons
import { BsCartPlusFill } from "react-icons/bs";
import Cards from "./Cards";

// Define some sample data for the cards

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
           <span className="absolute text-[1.8rem] w-12 bottom-[14%] left-[25%]">
            {/* Apply bold style to the second word */}
            {words.length >= 2 ? (
              <>
                <span className="text-[#323232] sm:text-[1.5rem] text-[0.95rem]">{words[0]} </span>
                <span className="sm:text-[2.5rem] text-[#323232]">{words[1]}</span>
              </>
            ) : (
              title
            )}
          </span>
        </div>

        {/* grid 2 */}

        <div
          className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:p-12 p-2 gap-3 md:h-[100%] "
          style={{
            backgroundImage: cardsBg ? `url(${profile})` : "bg-white",
          }}
        >
         <Cards />
        </div>
      </div>
    </section>
  );
}

export default WomenBottom;

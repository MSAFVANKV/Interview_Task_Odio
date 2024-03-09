import React from 'react'
import { BsCartPlusFill } from 'react-icons/bs'


function Cards({cardsData}) {
  return (
    <>
         {cardsData.map((card, index) => (
            <div
              key={card.id}
              className="bg-white h-[340px]  rounded-lg shadow-md"
            >
              {/* card image */}
              <div className="flex justify-center items-start h-[65%]">
                <img
                  src={card.image}
                  alt="cards"
                  className="h-[12rem] object-cover w-auto"
                />
              </div>

              {/* card content */}
              <div className="w-[100%]  flex h-[35%] px-2">
                {/* =================== */}
                <div className="w-[70%] h-full ">
                  <h3>{card.title}</h3>
                  <span className="flex gap-3 ">
                    <img src={card.ratio} alt="comment ratio" />
                    <small className="text-[#949494] ">{card.comments}</small>
                  </span>

                  <p className="text-[0.55rem] text-[#949494]">
                    {card.content}
                  </p>
                  <div className="flex w-[95%] justify-between items-center">
                    <span className="text-[1.1rem]">{card.offerPrice}</span>
                    <del className="text-[#949494] text-[1.1rem]">{card.price}</del>
                    <span className=" text-[0.75rem]">{card.offer}off</span>

                  </div>
                </div>

                {/* ======== card buttons========= */}
                <div className="w-[40%] flex flex-col  gap-3  ">
                  <button className="flex rounded-sm p-1 justify-center items-center w-full bg-black">
                    <BsCartPlusFill color="white" size={25} className="" />
                  </button>
                  <button className="flex rounded-sm p-1 justify-center items-center w-full bg-[#E56F61]">
                    <BsCartPlusFill color="white" size={25} className="" />
                  </button>
                </div>
                {/* ================== */}
              </div>
            </div>
          ))}
    </>
  )
}

export default Cards
import React from "react";
// import b1 from "../Images/b1.png";
import pic2 from "../images/thumbs-up2.svg";
// import Circle from "./PercentageCircle";
import PercenCircle from "./PercenCircle";
// import Swiper from "./Components/Swiper";
// import Swiper from "swiper/react";

const BigCards = (props) => {
  return (
    <>
      <div
        className={`${props.info.Cards}  xl:w-[90%] xl:m-auto xl:flex xl:flex-row xl:items-center xl:justify-between lg:flex lg:flex-row xl:my-9 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:flex md:flex-row lg:justify-between lg:items-center md:justify-between md:items-center lg:w-[90%] lg:m-auto sm:flex sm:flex-col sm:justify-center sm:items-center `}
        id="Ingredients
"
      >
        <div
          className={`${props.info.SideCard1} xl:w-40 xl:h-[400px] lg:w-40 lg:h-[400px]
          md:w-40 md:h-[400px] flex justify-center items-center relative sm:w-full sm:p-5 xs:p-5`}
        >
          <div className="w-32 p-2 bg-green-500 text-2xl absolute top-0 left-0">
            <p className="text-sm font-semibold text-white text-center">
              {props.info.Best2023}
            </p>
          </div>
          <p className="h-20 w-20 bg-white flex justify-center items-center rounded-full">
            <span className="text-black font-semibold text-2xl">
              {props.info.no}
            </span>
          </p>
        </div>
        <img
          src={props.info.img}
          className="xl:w-72 p-4 lg:w-56 md:w-56 sm:w-64 xs:w-full"
        ></img>
        <div className="flex flex-col px-w-[30%] xs:px-6 xl:w-1/2">
          <h2 className="xl:text-2xl lg:text-xl md:text-xl mb-4 font-semibold">
            {props.info.name}
          </h2>
          <div className="flex flex-row">
            <img src={pic2} className="w-5"></img>
            <p className="ml-3 xl:text-[17px] lg:text-[14px]">
              {props.info.ln1}
            </p>
          </div>
          <div className="flex flex-row">
            <img src={pic2} className="w-5"></img>
            <p className="ml-3 xl:text-[17px]  lg:text-[14px]">
              {props.info.ln2}
            </p>
          </div>
          <div className="flex flex-row">
            <img src={pic2} className="w-5"></img>
            <p className="ml-3 xl:text-[17px]  lg:text-[14px]">
              {props.info.ln3}{" "}
            </p>
          </div>
          <div className="flex flex-row">
            <img src={pic2} className="w-5"></img>
            <p className="ml-3 xl:Ltext-[17px]  lg:text-[14px]">
              {props.info.ln4}
            </p>
          </div>
          <div className="flex flex-row">
            <img src={pic2} className="w-5"></img>
            <p className="ml-3 xl:text-[17px]  lg:text-[14px]">
              {props.info.ln5}{" "}
            </p>
          </div>
          <div className="flex flex-row">
            <img src={pic2} className="w-5"></img>
            <p className="ml-3 xl:text-[17px]  lg:text-[14px]">
              {props.info.ln6}
            </p>
          </div>
          <div className="mt-5">
            <p className="xl:text-2xl lg:text-xl md:text-lg text-red-700 font-semibold">
              {props.info.limitedOffer}
              <span className="text-black">{props.info.Get50}</span>
            </p>
          </div>
        </div>
        <div className="flex xl:flex-col lg:flex-col md:flex-col md:w-[30%]  xl:justify-center xl:items-center xs:flex-row xs:justify-around xs:items-baseline xl:w-64 xl:mr-5">
          <div className="mt-5">
            <PercenCircle percentage={props.info.percen} />
          </div>
          <p className="text-center mt-2 text-gray-700 font-semibold sm:hidden xs:hidden xl:block lg:block md:block">
            {props.info.OUTSTANDING}
          </p>

          <a
            href={props.info.links}
            className="xl:w-44 sm:w-44 md:w-36 lg:w-36 lg:text-xl mt-24 rounded-2xl xl:text-sm xl:font-semibold  bg-yellow-200 p-3 border-solid border-2 border-indigo-600 "
          >
            Click Here to Grab 50%Discount Offer!
          </a>
        </div>
      </div>
    </>
  );
};
export default BigCards;

// import { useState } from "react";
import menu from "../images/Menu_icon.png";
import cross from "../images/crossupdate.png";

const Menu = (props) => {
  // const clicked = (e) => {
  //   e.target.classList.toggle("open");
  // };
  return (
    <div className="flex items-end">
      <ul className="xs:hidden xl:flex text-xl text-gray-500 font-bold cursor-pointer">
        <li
          className="px-5 hover:border-b-4 border-indigo-500"
          onClick={props.func}
        >
          Home
        </li>
        <a className=" hover:border-b-4 border-indigo-500" onClick={props.func}>
          About us
        </a>

        <a
          href="#fitness"
          className="px-5 hover:border-b-4 border-indigo-500"
          // onClick={props.func}
        >
          Fitness Goals
        </a>
        <a
          href="#FAQ"
          className="px-5 hover:border-b-4 border-indigo-500"
          // onClick={props.func}
        >
          FAQ
        </a>
        <a
          href="#Contact"
          className="px-5 hover:border-b-4 border-indigo-500"
          // onClick={props.func}
        >
          Contact
        </a>
      </ul>
      <div className="lg:hidden sm:block z-10">
        <img
          src={props.state1 ? cross : menu}
          onClick={props.toggle}
          className="w-12"
        ></img>
        {/* <img src={props.state1 ? menu : cross}></img> */}
      </div>
    </div>
  );
};
export default Menu;

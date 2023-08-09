import React from "react";
import img1 from "../images/top 7_new.png";
import Menu from "./Menu";
const Navbar = (props) => {
  return (
    <>
      <div className="flex justify-around bg-sky-100 items-center shadow-lg shadow-cyan-500/50 h-28">
        <div className="mt-3 w-36 ">
          <img
            src={img1}
            className="lg:w-[12em] mb-4 rounded-xl mix-blend-multiply w-full"
          />
        </div>
        <Menu func={props.value} toggle={props.data} state1={props.state} />
      </div>
    </>
  );
};
export default Navbar;

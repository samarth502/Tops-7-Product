const NavMob = (props) => {
  return (
    <div
      className={`${
        props.state ? "left-0 text-center" : "left-[100%]"
      } mob-nav flex justify-center items-center flex-col gap-3 text-slate-100 duration-300 ease-in-out`}
    >
      <a
        className="px-5 hover:border-b-4 border-indigo-500"
        onClick={props.func}
      >
        Home
      </a>
      <a className=" hover:border-b-4 border-indigo-500" onClick={props.value}>
        About us
      </a>

      <a
        href="#fitness"
        className="px-5 hover:border-b-4 border-indigo-500"
        // onClick={props.func}
      >
        fitness goals
      </a>
      <a
        href="#FAQ"
        className="px-5 hover:border-b-4 border-indigo-500"
        // onClick={props.func}
      >
        faq
      </a>
      <a
        href="#Contact"
        className="px-5 hover:border-b-4 border-indigo-500"
        // onClick={props.func}
      >
        Contact
      </a>
    </div>
  );
};
export default NavMob;

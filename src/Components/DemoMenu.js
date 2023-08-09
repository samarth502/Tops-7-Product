import menu from "../images/Menu_icon.png";

const DemoMenu = (props) => {
  return (
    <>
      <img
        src={menu}
        onClick={props.Date2}
        className="xl:hidden xs:block w-16"
      ></img>
    </>
  );
};
export default DemoMenu;

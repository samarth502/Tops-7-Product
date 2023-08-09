const AddTwoCardInside = (props) => {
  return (
    <div className="hover:scale-110 duration-300 ease-in-out xl:p-9">
      <a href={props.info1.link}>
        <img src={props.info1.c1}></img>
      </a>
    </div>
  );
};
export default AddTwoCardInside;

import AddTwoCardInside from "./AddTwoCardInside";
// import AddTwoCardInside from "./AddTwoCardInside";
import addcard1 from "../images1/exipureupdated.png";
import addcard2 from "../images1/apileanubdated.png";
import addcard3 from "../images/burnxt50.png";

const AddTwoCard = () => {
  const AddTwoCards = [
    {
      c1: addcard1,
      link: "https://b38f7i4ilk7ybs29870psbbsd9.hop.clickbank.net/?tid=rohit19",
    },
    {
      c1: addcard2,
      link: "https://6ac9ao0mjchv7x3wykqjg-up89.hop.clickbank.net/?tid=rohit19",
    },
    {
      c1: addcard3,
      link: "https://amzn.to/41Y3ruG",
    },
  ];
  return (
    <>
      <div className="px-28 py-12 bg-sky-50">
        <h3 className="text-center md:text-2xl lg:text-2xl font-semibold text-black xl:text-4xl">
          The Best Diet Supplements Per Category
        </h3>
        <div className="mt-14 grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 xl:p-10">
          {AddTwoCards.map((items) => (
            <AddTwoCardInside info1={items} />
          ))}
        </div>
      </div>
    </>
  );
};
export default AddTwoCard;

import juice1 from "../images1/juice1.jpg";
import juice2 from "../images1/juice2.jpg";
import juice3 from "../images1/juice3.jpg";
import juice4 from "../images1/juice4.jpg";
import juice5 from "../images1/juice5.jpg";
import juice6 from "../images1/juice6.jpg";
import juice13 from "../images1/juice13.jpg";
import juice14 from "../images1/juice14.jpg";

const Gallery = () => {
  return (
    <>
      <div className="xl:w-1/2 xl:m-auto">
        <h1 className="xl:text-center xl:text-4xl xl:mb-28 xl:font-semibold">
          Tasty breakfast juice dissolves 62lbs of wobbly fat
        </h1>

        <div class="xl:grid xl:grid-cols-3 xl:gap-4">
          <div class="hover:scale-110 duration-300 ease-in-out">
            <img src={juice1}></img>
          </div>
          <div class="hover:scale-110 duration-300 ease-in-out">
            <img src={juice2}></img>
          </div>
          <div class="hover:scale-110 duration-300 ease-in-out">
            <img src={juice3}></img>
          </div>
          <div class="xl:col-span-2 xl:border xl:border-black hover:scale-110 duration-300 ease-in-out">
            <img
              src={juice6}
              className="xl:w-full xl:h-64 xl:object-fill"
            ></img>
          </div>
          <div class="hover:scale-110 duration-300 ease-in-out">
            <img src={juice5}></img>
          </div>
          <div class="hover:scale-110 duration-300 ease-in-out">
            <img src={juice4}></img>
          </div>
          <div class="hover:scale-110 duration-300 ease-in-out">
            <img src={juice13}></img>
          </div>
          <div class="hover:scale-110 duration-300 ease-in-out">
            <img src={juice14}></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;

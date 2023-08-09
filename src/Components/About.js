import img1 from "../images/top5diet.png";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <div className="w-2/3 m-auto my-8">{/* <img src={img1} /> */}</div>
      <div className="w-1/2 m-auto flex flex-col">
        <p className="my-5 text-2xl text-gray-600 font-semibold">
          Top5diet.store is one of the leading online hubs for comparing the
          best Diet Supplements on the market.
        </p>
        <p className="my-5 text-2xl text-gray-600 font-semibold">
          {" "}
          We are helping our visitors to make informed decisions, when looking
          for the most up to date information on possible future purchases.
        </p>
        <p className="my-5 text-2xl text-gray-600 font-semibold">
          Our unbiased reviews and options helped thousands of people, while
          they could concentrate on what’s truly important- making the best
          decisions for them. We pride ourselves on the quality of our work, and
          there is no better feeling than receiving a message from a grateful
          visitor, telling us- how much we’ve helped them.
        </p>
        <p className="my-5 text-2xl text-gray-600 font-semibold">
          We appreciate you stopping by on our site, and trusting us with our
          reviews and opinions.
        </p>
        <p className="my-5 text-xl text-black font-semibold">
          Top5diet.store Team
        </p>
      </div>
      <Footer/>
    </>
  );
};
export default About;

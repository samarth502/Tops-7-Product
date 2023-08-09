import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
// import Demo from "./Components/Demo";
import SectionTwoText from "./Components/SectionTwoText";
import BigCards from "./Components/BigCards";
import SectionFour from "./Components/SectionFour";
import SectionFive from "./Components/SectionFive";
// import SectionSix form "./components/SectionSix";
import SectionSix from "./Components/SectionSix";
// import Carousel from "./Components/SliderComponent";
import SliderComponent from "./Components/SliderComponent";
// import b1 from "./images1/low2.jpg";
import b2 from "./images1/b2.png";
import b3 from "./images1/b3.png";
import b4 from "./images1/b4.png";
// import b4 from "./images1/javaburn2.png";
import b5 from "./images1/burnxt final.png";
import b6 from "./images/javaburn11.png";
import b7 from "./images1/nightbgfinal.png";

import AddTwoCard from "./Components/AddTwoCard";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import exipure from "./images1/exipure.png";
import About from "./Components/About";
import NavMob from "./Components/NavMob";
// import Marqueeone from "./Components/Marqueeone";
// import b4 from "./images1/b4.png";
// import Faq from "./Components/Faq";

// import pick from "../images/glucotrust-2-green-box.png";
function App() {
  // const [active, setActive] = useState("Home");
  // const updater = (e) => {
  //   setActive(e.target.innerText);
  //   // console.log(active);
  // };
  const [active, setActive] = useState("Home");
  const updater = (e) => {
    setActive(e.target.innerText);
  };

  const [modal, setModal] = useState(false);
  const toggle = (e) => {
    setModal(!modal);
  };

  //
  const [modal1, setModal1] = useState(false);

  const toggle2 = (e) => {
    // setModal1("bjbjk");
    console.log("hellow");
  };

  const CardData = [
    {
      no: 1,
      img: b4,
      Best2023: "Best in 2023",
      links:
        "https://6ac9ao0mjchv7x3wykqjg-up89.hop.clickbank.net/?tid=rohit19",
      Cards: "hover:bg-yellow-200",
      SideCard1: "bg-yellow-600",
      name: "Our #1 Most Popular Choice",
      ln1: "Boosts Your Metabolism, Give You More Energy, and Boost Your Confidence",
      ln2: "Effective Without Side Effects",
      ln3: "100% All-Natural Formula Vegetarian Friendly",
      ln4: "Easy To Swallow",
      ln5: "98% of Customers Say They Are Happy With the Product",
      ln6: "The Official Website Looks Good",
      limitedOffer: "Limited Time Offer ",
      Get50: "Get 50% OFF plus FREE Delivery",
      percen: 98,
      OUTSTANDING: "OUTSTANDING!",
      btn: "Click here to Get 50% Discount!!",
    },
    {
      no: 2,
      img: b5,
      Best2023: "BEST NEWCOMER",
      links:
      "https://amzn.to/41Y3ruG",
      Cards: "hover:bg-blue-300",
      SideCard1: "bg-blue-600",
      name: "Our #2 Most Popular Choice",
      ln1: "Made With 100% All-natural Ingredients",
      ln2: "Boosts Your Energy Levels",
      ln3: "Made In The USA",
      ln4: "180-Days Money Back Guarantee ",
      ln5: "TheEasy To Mix",
      ln6: "Burn-XT is a cutting-edge thermogenic fat burner for men and women.",

      limitedOffer: "Limited Time Offer ",
      Get50: "Get 50% OFF plus FREE Delivery",
      percen: 95,
      OUTSTANDING: "SUPERB!!",
      btn: "Click here to Get 50% Discount!!",
    },
    {
      no: 3,
      img: b3,
      Best2023: "Best in 2023",
      links:
        "https://0aa03p39ykdz5pdkrvtakcxzbt.hop.clickbank.net/?tid=rohit19",
      Cards: "hover:bg-orange-300",
      SideCard1: "bg-orange-600",
      name: "Our #3 Most Popular Choice",
      ln1: "It Has a Mixture of 15 Herbs That Help Keep Your Body's Hormones in Balance.",
      ln2: "Reduces Your Hunger and Cravings",
      ln3: "Gives Immunity and Overall Body Health a Great Boost",
      ln4: "Supports Healthy Blood Flow and Circulation",
      ln5: "100% Money-Back Guarantee   ",
      ln6: "There Are Discounts for Buying in Bulk ",

      limitedOffer: "Limited Time Offer ",
      Get50: "Get 50% OFF plus FREE Delivery",
      percen: 90,
      OUTSTANDING: "VERY GOOD!!",
      btn: "Click here to Get 50% Discount!!",
    },
    {
      no: 4,
      img: b2,
      Best2023: "Best in 2023",
      Cards: "hover:bg-green-300",
      links:
        "https://cf2f3fwayc4zawbefc7gk2bmcp.hop.clickbank.net/?tid=rohit19",
      SideCard1: "bg-green-600",
      ards: "hover:bg-yellow-200",
      name: "Our #4 Most Popular Choice",
      ln1: "It Has a Special Mixture of 8 Exotic and Tropical Ingredients",
      ln2: "It Provides Long-term Benefits for Sustainable Weight Loss",
      ln3: "Speeds Up Your Metabolism",
      ln4: "Gives Energy Levels a Major Boost",
      ln5: "Many Customers Are Satisfied With The Results",
      ln6: "The Official Website Looks Good",

      limitedOffer: "Limited Time Offer ",
      Get50: "Get 50% OFF plus FREE Delivery",
      percen: 85,
      OUTSTANDING: "GOOD!",
      btn: "Click here to Get 50% Discount!!",
    },
    {
      no: 5,
      img: exipure,
      Best2023: "Best in 2023",
      links:
        "https://b38f7i4ilk7ybs29870psbbsd9.hop.clickbank.net/?tid=rohit19",
      Cards: "hover:bg-yellow-200",
      SideCard1: "bg-yellow-600",
      name: "Our #5 Most Popular Choice",
      ln1: "Made With Only Natural Ingredients and Plant Extracts",
      ln2: "Vegan and Gluten-free",
      ln3: "It Has Ingredients That Have Been Studied and Found to Speed Up the Metabolism",
      ln4: "No Side Effects",
      ln5: "Made in a USA",
      ln6: "180-day Money-Back Guarantee",

      limitedOffer: "Limited Time Offer ",
      Get50: "Get 50% OFF plus FREE Delivery",
      percen: 95,
      OUTSTANDING: "OUTSTANDING!",
      btn: "Click here to Get 50% Discount!!",
    },
    {
      no: 6,
      img: b6,
      Best2023: "Best in 2023",
      links:
        "https://5d83df1hte6n5s34fsh69m0l16.hop.clickbank.net/?tid=rohit19",
      Cards: "hover:bg-yellow-200",
      SideCard1: "bg-yellow-600",
      name: "Our #6 Most Popular Choice",
      ln1: "Made With Only Natural Ingredients and Plant Extracts",
      ln2: "100% All Natural",
      ln3: "Vegetarian, Non-GMO and Gluten Free   ",
      ln4: "No Added Fillers or Preservatives",
      ln5: "No Artificial Colors or Stimulants ",
      ln6: "Manufactured in the USA",

      limitedOffer: "Limited Time Offer ",
      Get50: "Get 50% OFF plus FREE Delivery",
      percen: 78,
      // OUTSTANDING: "OUTSTANDING!",
      btn: "Click here to Get 50% Discount!!",
    },
    {
      no: 7,
      img: b7,
      Best2023: "Best in 2023",
      links:
        "https://amzn.to/3AoMduu",
      Cards: "hover:bg-yellow-200",
      SideCard1: "bg-yellow-600",
      name: "Our #7 Most Popular Choice",
      ln1: "Experience Deep sleep while burning fat",
      ln2: "Quality Sleep is Vital to Good Health",
      ln3: "Natural, Clean and Effective: At Inno Supps, your health is our top priority.",
      ln4: "Our Key Research-Backed Ingredients",
      ln5: "Made in a USA",
      ln6: "180-day Money-Back Guarantee",

      limitedOffer: "Limited Time Offer ",
      Get50: "Get 50% OFF plus FREE Delivery",
      percen: 79,
      // OUTSTANDING: "OUTSTANDING!",
      btn: "Click here to Get 50% Discount!!",
    },
  ];

  return (
    <div className="overflow-hidden relative">
      <NavMob state={modal} value={updater}></NavMob>
      <Navbar value={updater} data={toggle} state={modal} />

      {active === "About us" ? (
        <About />
      ) : active === "Home" ? (
        <div>
          <SectionTwoText />
          {CardData.map((item) => (
            <BigCards info={item} />
          ))}
          <SectionFour />
          <SectionFive />
          <SliderComponent />
          <SectionSix />

          <AddTwoCard />
          <Faq />
          <Footer />
        </div>
      ) : (
        " "
      )}
    </div>
  );
}
export default App;

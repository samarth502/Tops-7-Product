const Faq = () => {
  const expand = (e) => {
    e.target.parentElement.classList.toggle("open");
    if (e.target.innerText === "-") {
      e.target.innerText = "+";
    } else if (e.target.innerText === "+") {
      e.target.innerText = "-";
    }
  };

  // const expend = (e) => {
  //   e.target.parentElement.classList.toggle("Myopen");
  //   // e.target.parentElement.classList.toggle("para");

  //   if (e.target.innerText === "-") {
  //     e.target.innerText = "+";
  //   } else if ((e.target.innerText = "+")) {
  //     e.target.innerText = "-";
  //   }
  // };

  // const FAQ = [
  //   [
  //     "Is Exipure Safe?",
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum aperiam. Perspiciatis, porro",
  //   ],
  //   [
  //     "How many Bottles Should I order",
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum aperiam. Perspiciatis, por",
  //   ],
  // ];

  const FAQ = [
    [
      "Are organic supplements healthy?",
      "Organic supplements are a great way to support a healthy lifestyle. They provide the nutritional benefits of the whole food, rather than just the isolated nutrients found in synthetic supplements. And they're free of harmful toxins that can build up in your system and lead to disease over time.",
    ],
    [
      "How many Bottles Should I order?",
      "If you're over 35 years old or carry excess weight, we recommend you take Exipure for at least 3 to 6 months so it has enough time to work throughout your entire body to normalize your brown fat levels, reach your desired weight, and lock it in for years into the future. Every 3 bottle package of Exipure comes with the 2 bonus books absolutely free. Or make the smart decision and get the heavily discounted 6 bottle package, which comes with the 2 bonus books absolutely free along with free shipping as well.",
    ],
    [
      "Should I buy organic supplements?",
      "The advantages of organic: Unlike synthetic supplements, which can contain chemical compounds that don't occur in nature, organic supplements are free of pesticides, insecticides and other toxic ingredients. They're better for the body—and the environment.",
    ],
    [
      "Is this one Time payment??",
      "Yes, your order today is a one-time payment with no auto-ship, subscriptions or hidden charges.",
    ],
    [
      "Do organic supplements have side effects?",
      "Many organic supplements are made from plants and herbs, and some of these can interact with medications or cause allergic reactions in some people. For example, St. John's Wort, a popular herbal supplement used for depression, can interact with certain medications, including antidepressants, birth control pills, and blood thinners.",
    ],
  ];

  return (
    <div className="bg-sky-300/50 py-16" id="FAQ">
      <div className="xl:w-1/2 xl:m-auto lg:w-1/2 lg:m-auto flex flex-col justify-center items-center my-10 ">
        <h1 className="text-3xl font-semibold mb-5">FAQ's</h1>
        {FAQ.map((item) => (
          <div className="border-b-2 border-black overflow-hidden relative h-14 mb-5 duration-500 ease-out">
            <h2 className="font-semibold xl:text-2xl xs:text-xl mb-3 mt-2">
              {item[0]}
            </h2>
            <p className="px-10 mb-4 text-black xs:text-lg xl:text-center lg:text-center">
              {item[1]}
            </p>
            <button
              onClick={expand}
              className="absolute text-4xl top-2 right-2"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
    // <>
    //   <div className="w-1/2 m-auto flex flex-col justify-center items-center">
    //     <h1 className="text-4xl font-semibold py-5">FAQ</h1>
    //     {FAQ.map((item) => (
    //       <div className="relative border-b-2 border-black h-14 overflow-hidden duration-500 ease-in-out">
    //         <h2 className="text-2xl font-semibold mb-4">{item[0]}</h2>
    //         <p className="px-12 mb-4 ">{item[1]}</p>
    //         <button
    //           className="text-4xl font-semibold absolute -top-1 right-2"
    //           onClick={expend}
    //         >
    //           +
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </>
  );
};

export default Faq;

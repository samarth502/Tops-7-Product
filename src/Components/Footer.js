const Footer = () => {
  return (
    <>
      <div
        className="flex flex-col bg-black px-28 py-16 justify-center items-center"
        id="Contact"
      >
        <h2 className="text-center text-xl font-bold mb-3 text-white">
          Privacy | Terms and Conditions | Disclaimer | References | Returns |
          Returns & Refunds | Shipping Policy | Contact
        </h2> <br></br>
        
        <p className="text-xl text-center font-bold text-white my-4 ">
        Disclaimer : This statement means that the information provided on the website is not meant to replace advice given by a medical professional. If you have or suspect you have a medical condition, it is recommended that you consult with a healthcare provider. The products mentioned on the website have not been evaluated by the Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent any diseases or medical conditions. The results mentioned on the website are based on the Top Verified Reviews Ranking System and may not necessarily reflect typical results from using the products. For more information, you should visit the product websites.
        </p> <br></br>
        {/* <p className="text-xs text-center font-bold text-white my-5">
          The content of this site is for informational purposes only, and is
          not intended to replace professional medical advice, diagnosis or
          treatment. Always seek the advice of your doctor or other qualified
          health care professional about a medical condition, a suspected
          medical condition, and before starting a diet, exercise, or
          supplementation program or take or stop a medication.
        </p> */}
        {/* <p className="text-xs text-center font-bold text-white my-5">
          The use of any information provided by this site and others appearing
          on the site is solely at your own risk. The site and its contents are
          provided "as is". ClickBank is the reseller of products on this site.
          CLICKBANK® is a registered trademark of Click Sales Inc., a Delaware
          corporation located at 1444 S. Entertainment Ave., Boise Boise, ID
          83709, USA and used with permission. The role of ClickBank as a
          retailer does not constitute an endorsement, endorsement or review of
          such products or any claim, statement or opinion used in the promotion
          of such products.
        </p> */}
        <p className="text-xl text-center font-bold text-white my-5">
        © 2023 All Rights Reserved.
        </p>
        
      </div>
    </>
  );
};
export default Footer;

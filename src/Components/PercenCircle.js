const PercenCircle = (props) => {
  //   let circularProgress = document.querySelector(".circular-progress"),
  //     progressValue = document.querySelector(".progress-value");

  //   let progressStartValue = 1,
  //     progressEndValue = 90,
  //     speed = 100;

  //   let progress = setInterval(() => {
  //     progressStartValue++;

  //     progressValue.textContent = progressStartValue;
  //     circularProgress.style.background = `conic-gradient(#7d2ae8 ${
  //       progressStartValue * 3.6
  //     }deg, #ededed 0deg)`;

  //     if (progressStartValue == progressEndValue) {
  //       clearInterval(progress);
  //     }
  //   }, speed);

  return (
    <>
      {/* <div className=""> */}
      <div className="container">
        <div className="circular-progress xl:h-[135px] xl:w-[135px] lg:h-[120px] lg:w-[120px] md:h-[120px] md:w-[120px] flex items-center justify-center  sm:h-[100px] sm:w-[100px] xs:h-[100px] xs:w-[100px]">
          <span className="progress-value xl:h-[135px] xl:w-[135px] lg:h-[120px]lg:w-[120px] flex items-center justify-center sm:h-[100px] sm:w-[100px] xs:h-[100px] xs:w-[100px]">
            {props.percentage}%
          </span>
          {/* </div> */}

          {/* <span className="text">HTML & CSS</span> */}
        </div>
      </div>
    </>
  );
};
export default PercenCircle;

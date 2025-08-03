import React, { useState, useEffect } from "react";
import bankImg from "../../assets/img/bank.png";
import mask1Img from "../../assets/img/mask.png";
import walletImg from "../../assets/img/wallet.png";
import graphImg from "../../assets/img/graph.png";
import moneyImg from "../../assets/img/money.png";
import currencyImg from "../../assets/img/currency.png";
import mask2Img from "../../assets/img/mask2.png";


const slides = [
  {
    bg: "bg-secondary",
    title: "Banking",
    text: "Enjoy quick transfers and get your account in 5 easy steps",
    icon: bankImg,
    image: mask1Img,
    textColor: "text-primary",
  },
  {
    bg: "bg-primary",
    title: "Savings",
    text: "Earn up to 15.5% per annum on your savings plans.",
    icon: walletImg,
    image: moneyImg,
    textColor: "text-white",
  },
  {
    bg: "bg-secondary",
    title: "Credit",
    text: "Apply for a loan for your personal and business needs.",
    icon: bankImg,
    image: currencyImg,
    textColor: "text-primary",
  },
  {
    bg: "bg-primary",
    title: "Investment",
    text: "Let your money earn good returns with our investment plans.",
    icon: graphImg,
    image: mask2Img,
    textColor: "text-white",
  },
];

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${slide.bg} h-full flex-shrink-0 flex items-center overflow-hidden`}
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="w-full px-[72px] flex flex-col justify-start h-full">
              {/* Indicators */}
              <div className="flex gap-2 pt-[63px] justify-center items-center">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`h-[4px] w-[88px] rounded-xl ${
                      i === currentSlide ? "bg-white" : "bg-lightBlue"
                    }`}
                  />
                ))}
              </div>

              {/* Title */}
              <div className="flex justify-start items-center gap-[12px] pt-[70px]">
                <img className="w-5 h-5" src={slide.icon} alt="" />
                <p className={`font-semibold text-[20px] ${slide.textColor}`}>
                  {slide.title}
                </p>
              </div>

              {/* Text */}
              <div className="pt-[21px]">
                <p
                  className={`font-bold text-[25px] leading-[130%] tracking-[0px] font-sans w-[90%] ${slide.textColor}`}
                >
                  {slide.text}
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center mt-10">
                <img
                  src={slide.image}
                  className="w-[320.14px] h-[340px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      {/* <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-lightBlue"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default MainSlider;

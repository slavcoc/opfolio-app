"use client";

import Link from "next/link";
import { useState } from "react";

const MainHeader = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[750px] flex items-center">
      {/* Content */}
      <div className="relative z-10 max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] w-full">
        <div className="flex flex-col lg:flex-row  lg:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 ">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-lora text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-medium text-[#1F1514] leading-[1.09] tracking-[0.01em] mb-4 sm:mb-5 md:mb-6">
              Дајте им импулс на вашите пари
            </h1>
            <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] text-[#1F1514] font-light leading-[1.42] max-w-full sm:max-w-[500px] md:max-w-[544px] mx-auto lg:mx-0 mb-6 sm:mb-7 md:mb-8">
              Дознајте како нашите стратегии можат да ви помогнат да постигнете финансиска независност
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/consultation"
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#F5C322] text-[#1F1514] rounded-lg sm:rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-inter font-bold text-base sm:text-lg md:text-xl lg:text-[20px] border border-white text-center"
              >
                Закажете консултација
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-none">
            {!imageError ? (
                <img
                  src="./hero-pie.GIF"
                  alt="Hero Image"
                  width={'100%'}
                  height={'100%'}
                  // className="mt-[-10%]"
                  // priority
                  onError={() => setImageError(true)}
                />
              
            ) : (
              <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center">
                <p className="text-gray-500">Image failed to load</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;

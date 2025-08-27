import React from "react";

const KontaktHeader = () => {
  return (
    <div className="relative overflow-hidden bg-[#F3F0E6] py-12 sm:py-16 md:py-20 lg:py-[100px]">
      <div className="relative z-20 max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-[100px]">
          <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-[819px] text-center">
            <h1 className="text-heading-1 text-[#1F1514]">
              Lorem Ipsum
            </h1>
            <p className="text-body-large text-[#1F1514]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktHeader;

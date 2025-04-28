import React from "react";

const ProductHeader: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#F3F0E6] py-12 sm:py-16 md:py-20 lg:py-[100px]">
      <div className="relative z-20 max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-[100px]">
          <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-[819px] text-center">
            <h1 className="font-lora font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.28] tracking-[0.01em] text-[#1F1514]">
              Инвестирањето наскоро достапно до секого
            </h1>
            <p className="font-raleway text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.42] text-[#1F1514]">
              Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до
              еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full">
            {/* Card 1 */}
            <div className="w-full border border-[#5A7D7C] rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-[88px_48px] flex flex-col gap-6 sm:gap-8">
              <h3 className="font-lora font-bold text-xl sm:text-2xl leading-[1.28] text-black">
                Паричен фонд
              </h3>
              <p className="font-inter text-sm sm:text-base leading-[1.375] text-black">
                Фонд кој инвестира во депозити од повеќе банки и обврзници.
                Диверзификација на инструменти со
              </p>
              <p className="font-inter text-sm sm:text-base leading-[1.375] text-black">
                Паричниот фонд е како депозит во банка до поголем принос
              </p>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="font-raleway font-semibold text-sm leading-[1.17] text-black">
                  Дознај повеќе
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full border border-[#5A7D7C] rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-[88px_48px] flex flex-col gap-6 sm:gap-8">
              <h3 className="font-lora font-bold text-xl sm:text-2xl leading-[1.28] text-black">
                Акциски фонд
              </h3>
              <p className="font-inter text-sm sm:text-base leading-[1.375] text-black">
                Фонд кој инвестира во депозити од повеќе банки и обврзници.
                Диверзификација на инструменти со
              </p>
              <p className="font-inter text-sm sm:text-base leading-[1.375] text-black">
                Паричниот фонд е како депозит во банка до поголем принос
              </p>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="font-raleway font-semibold text-sm leading-[1.17] text-black">
                  Дознај повеќе
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full border border-[#5A7D7C] rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-[88px_48px] flex flex-col gap-6 sm:gap-8">
              <h3 className="font-lora font-bold text-xl sm:text-2xl leading-[1.28] text-black">
                Управување со портфолио
              </h3>
              <p className="font-inter text-sm sm:text-base leading-[1.375] text-black">
                Фонд кој инвестира во депозити од повеќе банки и обврзници.
                Диверзификација на инструменти со
              </p>
              <p className="font-inter text-sm sm:text-base leading-[1.375] text-black">
                Паричниот фонд е како депозит во банка до поголем принос
              </p>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="font-raleway font-semibold text-sm leading-[1.17] text-black">
                  Дознај повеќе
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;

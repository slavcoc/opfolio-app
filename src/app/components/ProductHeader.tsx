import React from "react";

const ProductHeader: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#F3F0E6] py-[100px]">
      <div className="relative z-20 max-w-[1444px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="flex flex-col items-center gap-[100px]">
          <div className="flex flex-col items-center gap-6 max-w-[819px] text-center">
            <h1 className="font-lora font-semibold text-[64px] leading-[1.28] tracking-[0.01em] text-[#1F1514]">
              Инвестирањето наскоро достапно до секого
            </h1>
            <p className="font-raleway text-2xl leading-[1.42] text-[#1F1514]">
              Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до
              еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
            </p>
          </div>

          <div className="flex gap-[38px] w-full justify-center">
            <div className="w-[440px] h-[536px] border border-[#5A7D7C] rounded-[20px] p-[88px_48px] flex flex-col gap-8">
              <h3 className="font-lora font-bold text-2xl leading-[1.28] text-black">
                Паричен фонд
              </h3>
              <p className="font-inter text-base leading-[1.375] text-black">
                Фонд кој инвестира во депозити од повеќе банки и обврзници.
                Диверзификација на инструменти со
              </p>
              <p className="font-inter text-base leading-[1.375] text-black">
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

            <div className="w-[440px] h-[536px] border border-[#5A7D7C] rounded-[20px] p-[88px_48px] flex flex-col gap-8">
              <h3 className="font-lora font-bold text-2xl leading-[1.28] text-black">
                Акциски фонд
              </h3>
              <p className="font-inter text-base leading-[1.375] text-black">
                Фонд кој инвестира во депозити од повеќе банки и обврзници.
                Диверзификација на инструменти со
              </p>
              <p className="font-inter text-base leading-[1.375] text-black">
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

            <div className="w-[440px] h-[536px] border border-[#5A7D7C] rounded-[20px] p-[88px_48px] flex flex-col gap-8">
              <h3 className="font-lora font-bold text-2xl leading-[1.28] text-black">
                Управување со портфолио
              </h3>
              <p className="font-inter text-base leading-[1.375] text-black">
                Фонд кој инвестира во депозити од повеќе банки и обврзници.
                Диверзификација на инструменти со
              </p>
              <p className="font-inter text-base leading-[1.375] text-black">
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

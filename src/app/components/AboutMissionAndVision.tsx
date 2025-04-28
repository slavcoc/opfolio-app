import React from "react";

const AboutMissionAndVision: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#DADED5] py-12 sm:py-16 md:py-20">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Background pattern will be added here */}
      </div>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-5 flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[175px]">
        <div className="flex-1 max-w-full lg:max-w-[722px]">
          <h2 className="font-lora font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.28] tracking-[0.01em] text-[#1F1514] mb-6 sm:mb-8 md:mb-10">
            Нашата визија и мисија за вашата финансиска иднина
          </h2>
          <div className="flex flex-col gap-4 sm:gap-6 max-w-full lg:max-w-[614px]">
            <p className="font-inter font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.4] text-[#1F1514]">
              Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до
              еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
            </p>
            <p className="font-inter font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.4] text-[#1F1514]">
              Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до
              еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
            </p>
            <p className="font-inter font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.4] text-[#1F1514]">
              Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до
              еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[350px] md:w-[400px] h-[300px] sm:h-[400px] md:h-[500px] rounded-[15px] overflow-hidden shadow-[3.97px_11.1px_25.38px_rgba(0,0,0,0.1),14.27px_43.62px_45.99px_rgba(0,0,0,0.09),32.51px_97.54px_61.85px_rgba(0,0,0,0.05),57.1px_173.67px_72.96px_rgba(0,0,0,0.01),89.61px_271.21px_80.09px_rgba(0,0,0,0)] mx-auto lg:mx-0">
          {/* Image will be added here */}
        </div>
      </div>
    </section>
  );
};

export default AboutMissionAndVision;

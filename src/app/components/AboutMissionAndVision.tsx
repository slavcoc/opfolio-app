import React from "react";

const AboutMissionAndVision: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#DADED5] py-36">
      <div className="container mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-[105px]">
          {/* <div className="relative w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-[300px] sm:h-[400px] md:h-[488px] rounded-[15px] overflow-hidden shadow-[3.97px_11.1px_25.38px_rgba(0,0,0,0.1),14.27px_43.62px_45.99px_rgba(0,0,0,0.09),32.51px_97.54px_61.85px_rgba(0,0,0,0.05),57.1px_173.67px_72.96px_rgba(0,0,0,0.01),89.61px_271.21px_80.09px_rgba(0,0,0,0)] mx-auto lg:mx-0 flex-shrink-0">
            <Image
              src="/assets/vision-mission-image.png"
              alt="Vision and Mission"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
            />
          </div> */}
          <div className="flex flex-col gap-10 max-w-[614px] lg:max-w-[722px]">
            <h2 className="font-lora font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-[1.28] tracking-[0.01em] text-[#1F1514]">
              Нашата визија и мисија за вашата финансиска иднина
            </h2>
            <div className="flex flex-col gap-6 text-[#1F1514]">
              <p className="font-inter font-light text-base sm:text-lg lg:text-[20px] leading-[1.4]">
                Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.

                Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
              </p>
              <p className="font-inter font-light text-base sm:text-lg lg:text-[20px] leading-[1.4]">
                Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.

                Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
              </p>
              <p className="font-inter font-light text-base sm:text-lg lg:text-[20px] leading-[1.4]">
                Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionAndVision;

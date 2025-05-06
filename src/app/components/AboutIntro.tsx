import React from "react";
import Image from "next/image";

const AboutIntro = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden ">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/patterns/pattern-3.svg')] bg-repeat opacity-40" />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-[95px] items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 max-w-full lg:max-w-[614px]">
            <h2 className="font-lora text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold text-[#1F1514] leading-[1.28] tracking-[0.01em]">
              Вредностите кои ги изградивме за вашиот бенeфит
            </h2>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <p className="font-inter text-base sm:text-lg md:text-xl lg:text-[20px] font-light text-[#1F1514] leading-[1.4]">
                Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до
                еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
              </p>
              <p className="font-inter text-base sm:text-lg md:text-xl lg:text-[20px] font-light text-[#1F1514] leading-[1.4]">
                Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до
                еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
              </p>
              <p className="font-inter text-base sm:text-lg md:text-xl lg:text-[20px] font-light text-[#1F1514] leading-[1.4]">
                Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до
                еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[50%] h-[100%] z-[1]">
        <Image
          src="/forus-lines.png"
          alt="For us Item"
          fill
          className="object-cover"
        />
      </div>
      {/* Team photo */}
      <div className="absolute right-0 bottom-0 w-[50%] h-[90%] z-[1]">
        <Image
          src="/team-photo.png"
          alt="Theam photo"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default AboutIntro;

"use client";

import Image from "next/image";

const Invest = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 xl:py-24 ">
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          {/* Content - Left side */}
          <div className="flex-1 text-center lg:text-left order-1 w-full max-w-[600px] lg:max-w-none mx-auto">
            <h2
              className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1F1514] mb-4 sm:mb-5 md:mb-6"
              style={{ lineHeight: "1.28em" }}
            >
              Опфолио Invest
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1F1514] font-light"
                style={{ lineHeight: "1.4em" }}
              >
                За оптимална распределба на селектираните акции, го користиме софтверот Опфолио Инвест, кој го развиваме и тестираме веќе 10 години.
              </p>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1F1514] font-light"
                style={{ lineHeight: "1.4em" }}
              >
                Софтверското решение има научна и историска позадина, и ни помага да ја зачуваме вредноста на средствата, особено во време на кризи и големи флуктуации на пазарот на капитал.
              </p>
            </div>
          </div>

          {/* Image - Right side */}
          <div className="flex-1 relative order-2 w-full max-w-[500px] lg:max-w-none mx-auto">
            <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden">
              {/* Pattern top border */}
              <div
                className="absolute inset-0 border border-[#F5C322] rounded-[20px]"
                style={{ borderWidth: "1px" }}
              />

              {/* Pattern bottom border */}
              <div
                className="absolute inset-0 border border-[#F5C322] rounded-[19.94px] transform rotate-180"
                style={{ borderWidth: "0.997px" }}
              />

              {/* Image container with shadow */}
              <div
                className="absolute inset-0 rounded-[19.34px] overflow-hidden"
                style={{
                  boxShadow:
                    "3.97px 11.1px 25.38px 0px rgba(0, 0, 0, 0.1), 14.27px 43.62px 45.99px 0px rgba(0, 0, 0, 0.09), 32.51px 97.54px 61.85px 0px rgba(0, 0, 0, 0.05), 57.1px 173.67px 72.96px 0px rgba(0, 0, 0, 0.01), 89.61px 271.21px 80.09px 0px rgba(0, 0, 0, 0)",
                }}
              >
                <Image
                  src="/macbook-invest.png"
                  alt="Opfolio Invest MacBook"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;

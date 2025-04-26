"use client";

import Image from "next/image";

const Ceo = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-[#F3F0E6] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <Image
          src="/ceo-background.png"
          alt="Background gradient"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
          {/* Image - Left side */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="relative aspect-square">
              {/* Yellow circle background */}
              <div className="absolute inset-0">
                <div className="w-full h-full rounded-full bg-[#F5C322]" />
              </div>

              {/* Border circle */}
              <div className="absolute inset-0">
                <div className="w-full h-full rounded-full border border-[#F5C322]" />
              </div>

              {/* Image container */}
              <div className="absolute inset-0 p-2">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/vasko-ceo.png"
                    alt="Vasko Bogatinovski"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right side */}
          <div className="w-full lg:max-w-[600px] text-center lg:text-left order-1 lg:order-2">
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="font-lora text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-medium text-[#1F1514] leading-[1.28]">
                  Васко Богатиновски
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1F1514] font-medium">
                  CEO and Founder of Opfolio
                </p>
              </div>

              <div className="relative">
                <span
                  className="absolute -top-6 md:-top-8 left-0 sm:left-4 lg:left-0
                           font-['Kazimir-Bold'] text-[101.947px]
                           text-[#1F1514] leading-[1.366] opacity-20"
                  style={{ fontFeatureSettings: "'ss01' on" }}
                >
                  &ldquo;
                </span>
                <p className="text-[24px] text-[#1F1514] font-light leading-[1.28] relative z-10 pl-4 sm:pl-8 lg:pl-6">
                  Не можете да се одлучите или не знаете од каде да почнете?{" "}
                  <br className="hidden sm:block" />
                  Закажете инвестициско советување!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceo;

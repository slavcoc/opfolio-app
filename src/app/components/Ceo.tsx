"use client";

import Image from "next/image";

const Ceo = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F3F0E6] relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Image - Left side */}
          <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="relative aspect-square">
              <div className="absolute inset-0 p-1.5 sm:p-2">
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
          <div className="w-full lg:max-w-[900px] text-center lg:text-left order-1 lg:order-2">
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <div className="relative">
                  <Image
                    src="/quote-icon.png"
                    alt="Quote"
                    width={30}
                    height={30}
                    className="absolute top-0 left-0 -ml-4"
                  />
                  <h2 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#000000] mb-4 sm:mb-5 md:mb-6">
                    Васко Богдановски
                    <br />
                    Главен извршен директор на Опфолио Инвестиции АД Скопје
                  </h2>
                  <div className="text-[101.947px] font-kazimir-bold text-[#000000] leading-[1.366] mb-4 sm:mb-5 md:mb-6">
                    &ldquo;
                  </div>
                  <p className="font-lora text-xl sm:text-2xl md:text-[24px] font-medium text-[#000000] leading-[1.28] mb-4 sm:mb-5 md:mb-6">
                    Редовното инвестирање во компании со докажана способност за создавање вредност е најсигурниот пат до долгорочен финансиски успех.
                  </p>
                  <div className="font-lora text-xl sm:text-2xl md:text-[24px] font-medium text-[#000000] leading-[1.28]">
                    -
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceo;

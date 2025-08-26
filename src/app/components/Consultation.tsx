"use client";

import Link from "next/link";
import Image from "next/image";

const Consultation = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-[#F3F0E6] relative overflow-hidden relative">
      <img
        src="./Gradient_1_transp.png"
        alt="Consultation background"
        className="absolute flexShrink-0 bottom-0 left-[-35%] bottom-0 rotate-[180deg] w-full h-full "
      />

      {/* CEO */}
      <div className="relative z-10 max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Image - Left side */}
          <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="relative aspect-square">
              <div className="absolute inset-0 p-1.5 sm:p-2">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="./vasko-ceo.png"
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
                    src="./quote-icon.png"
                    alt="Quote"
                    width={30}
                    height={30}
                    className="absolute top-0 left-0 -ml-4 "
                  />
                  <p className="text-quote text-[#1F1514] relative z-10 pl-3 sm:pl-6 lg:pl-4 xl:pl-6">
                    Редовното инвестирање во компании со докажана способност за
                    создавање вредност е најсигурниот пат до долгорочен
                    финансиски успех.
                  </p>
                </div>
                <h2 className="text-quote-large text-[#1F1514] pt-5">
                  - Васко Богдановски
                </h2>
                <p className="text-quote-large text-[#1F1514] pl-5">
                  Главен извршен директор на Опфолио Инвестиции АД Скопје
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Consultation */}
      <div className="relative z-10 max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] pt-60">
        <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
          <h2 className="text-heading-2 text-[#1F1514] text-center max-w-[900px]" style={{fontWeight: '500'}}>
            Не можете да се одлучите или не знаете од каде да почнете?{" "}
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link
              href="/consultation"
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#F5C322] text-[#1F1514] rounded-lg sm:rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-button border border-white text-center"
            >
              Kонтактирај не
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;

import React from "react";
import Image from "next/image";

const AboutCeo: React.FC = () => {
  return (
    <section className="bg-[#DADED5] py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] md:w-[200px] md:h-[200px] mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-[#F5C322] rounded-full"></div>
            <div className="absolute inset-0 border border-[#F5C322] rounded-full"></div>
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <Image
                src="/images/vasko.jpg"
                alt="Васко Богатиновски"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-[800px] px-4 sm:px-6 md:px-8">
            <h3 className="font-lora font-medium text-xl sm:text-2xl md:text-[24px] leading-[1.28] text-black mb-3 sm:mb-4">
              Васко Богатиновски <br />
              CEO and Founder of Opfolio
            </h3>

            <div className="relative">
              <span className="font-kazimir text-5xl sm:text-6xl md:text-7xl lg:text-[102px] leading-[1.37] text-black absolute -left-4 sm:-left-6 md:-left-8 -top-4 sm:-top-6 md:-top-8">
                &ldquo;
              </span>
              <p className="font-lora font-medium text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[1.28] text-black mb-3 sm:mb-4">
                Не можете да се одлучите или не знаете од каде да почнете?
              </p>
              <p className="font-lora font-medium text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[1.28] text-black mb-3 sm:mb-4">
                Закажете инвестициско советување! (Тука можеби некоја порака од
                Васко)
              </p>
              <span className="font-lora font-medium text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[1.28] text-black">
                -
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCeo;

"use client";

import Image from "next/image";

const Radar = () => {
  const categories = [
    "конкурентност",
    "предвидливост",
    "квалитет",
    "раст",
    "вреднување",
  ];

  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 xl:py-24">
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          {/* Image - Left side */}
          <div className="flex-1 relative order-2 lg:order-1 w-full max-w-[500px] lg:max-w-none mx-auto">
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
                  src="/macbook-radar.png"
                  alt="Opfolio Radar MacBook"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content - Right side */}
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2 w-full max-w-[600px] lg:max-w-none mx-auto">
            <h2
              className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1F1514] mb-4 sm:mb-5 md:mb-6"
              style={{ lineHeight: "1.28em" }}
            >
              Опфолио Радар
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1F1514] font-light mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto lg:mx-0"
              style={{ lineHeight: "1.4em" }}
            >
              Опфолио Радар е напреден модел создаден за проценка на инвестицискиот рејтинг на компаниите. Овој модел се базира на 125 внимателно одбрани коефициенти, кои се распоредени во шест главни категории:
            </p>
            <ul className="flex flex-col gap-1 sm:gap-2 list-none pl-0">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#1F1514] flex items-center"
                  style={{ lineHeight: "1.7em" }}
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-[#1F1514] mr-3"></span>
                  <span>{category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Radar;

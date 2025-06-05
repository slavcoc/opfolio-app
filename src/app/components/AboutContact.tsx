import React from "react";
import Image from "next/image";

const AboutContact: React.FC = () => {
  return (
    <section className="bg-[#DADED5] py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden">
      <div className="max-w-[1666px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-40">
          {/* Left Column - Contact Info */}
          <div className="flex-1">
            <h2 className="font-lora font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-[1.28] tracking-[0.01em] text-[#141F15] mb-8 lg:mb-32">
              Контакт
            </h2>

            <div className="flex flex-col sm:flex-row gap-8 lg:gap-[135px]">
              {/* Phone and Email Section */}
              <div className="w-full sm:w-[248px]">
                <h3 className="font-inter font-bold text-xl lg:text-[20px] leading-[1.21] text-[#141F15] mb-10">
                  Телефон и е-маил
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <Image
                        src="./images/icons/mobile-icon.svg"
                        alt="Phone"
                        width={24}
                        height={24}
                        className="text-[#5A7D7C]"
                      />
                    </div>
                    <p className="font-inter text-xl lg:text-[20px] leading-[1.21] text-[#141F15]">
                      Тел. +389 76 760 767
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <Image
                        src="./images/icons/mail-icon.svg"
                        alt="Email"
                        width={24}
                        height={24}
                        className="text-[#5A7D7C]"
                      />
                    </div>
                    <p className="font-inter text-xl lg:text-[20px] leading-[1.21] text-[#141F15]">
                      Email: info@opfolio.mk
                    </p>
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div className="w-full sm:w-[248px]">
                <h3 className="font-inter font-bold text-xl lg:text-[20px] leading-[1.21] text-[#141F15] mb-10">
                  Адреса на канцеларија
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <Image
                        src="./images/icons/house-icon.svg"
                        alt="Address"
                        width={24}
                        height={24}
                        className="text-[#5A7D7C]"
                      />
                    </div>
                    <p className="font-inter text-xl lg:text-[20px] leading-[1.21] text-[#141F15]">
                      Дане Крапчев 26/1
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center opacity-0">
                      <Image
                        src="./images/icons/house-icon.svg"
                        alt="City"
                        width={24}
                        height={24}
                        className="text-[#5A7D7C] invisible"
                      />
                    </div>
                    <p className="font-inter text-xl lg:text-[20px] leading-[1.21] text-[#141F15]">
                      Центар-Скопје
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="flex-1">
            <div className="relative w-full aspect-[1.64] rounded-[13px] overflow-hidden">
              <Image
                src="./images/map.jpg"
                alt="Map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;

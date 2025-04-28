import React from "react";
import Image from "next/image";

const AboutContact: React.FC = () => {
  return (
    <section className="bg-[#DADED5] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-36 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden">
      <div className="max-w-[1666px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-40">
          {/* Left Column - Contact Info */}
          <div className="flex-1">
            <h2 className="font-lora font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.28] text-[#141F15] mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
              Контакт
            </h2>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-40">
              {/* Phone and Email Section */}
              <div className="w-full sm:w-[248px]">
                <h3 className="font-inter font-bold text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.21] text-[#141F15] mb-6 sm:mb-8 md:mb-10">
                  Телефон и е-маил
                </h3>
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#5A7D7C"
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                      </svg>
                    </div>
                    <p className="font-inter text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.21] text-[#141F15]">
                      Тел. +389 76 760 767
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#5A7D7C"
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <p className="font-inter text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.21] text-[#141F15]">
                      Email: info@opfolio.mk
                    </p>
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div className="w-full sm:w-[248px]">
                <h3 className="font-inter font-bold text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.21] text-[#141F15] mb-6 sm:mb-8 md:mb-10">
                  Адреса
                </h3>
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#5A7D7C"
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <p className="font-inter text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.21] text-[#141F15]">
                      Ул. &ldquo;Македонија&rdquo; бр. 1
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#5A7D7C"
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                      </svg>
                    </div>
                    <p className="font-inter text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.21] text-[#141F15]">
                      1000 Скопје, Македонија
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="flex-1">
            <div className="relative w-full aspect-[4/3] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
              <Image
                src="/images/map.jpg"
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

import React from "react";
import Image from "next/image";

const AboutContact: React.FC = () => {
  return (
    <section className="bg-[#DADED5] py-36 px-20">
      <div className="max-w-[1666px] mx-auto">
        <div className="flex gap-40">
          {/* Left Column - Contact Info */}
          <div className="flex-1">
            <h2 className="font-lora font-semibold text-[48px] leading-[1.28] text-[#141F15] mb-24">
              Контакт
            </h2>

            <div className="flex gap-40">
              {/* Phone and Email Section */}
              <div className="w-[248px]">
                <h3 className="font-inter font-bold text-[20px] leading-[1.21] text-[#141F15] mb-10">
                  Телефон и е-маил
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#5A7D7C"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                      </svg>
                    </div>
                    <p className="font-inter text-[20px] leading-[1.21] text-[#141F15]">
                      Тел. +389 76 760 767
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#5A7D7C"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <p className="font-inter text-[20px] leading-[1.21] text-[#141F15]">
                      Email: info@opfolio.mk
                    </p>
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div className="w-[248px]">
                <h3 className="font-inter font-bold text-[20px] leading-[1.21] text-[#141F15] mb-10">
                  Адреса на канцеларија
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#5A7D7C"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <p className="font-inter text-[20px] leading-[1.21] text-[#141F15]">
                      Дане Крапчев 26/1
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#5A7D7C"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <p className="font-inter text-[20px] leading-[1.21] text-[#141F15]">
                      Центар-Скопје
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="flex-1 h-[400px] bg-white rounded-[13px] overflow-hidden">
            <Image
              src="/images/map.jpg"
              alt="Map location"
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;

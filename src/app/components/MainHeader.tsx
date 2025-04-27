"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MainHeader = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <header className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
      {/* Content */}
      <div className="relative z-10 max-w-[1444px] mx-auto px-4 md:px-8 lg:px-[120px] w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-lora text-4xl md:text-5xl lg:text-[64px] font-medium text-[#1F1514] leading-[1.09] tracking-[0.01em] mb-6">
              Инвестирањето наскоро достапно до секого
            </h1>
            <p className="font-inter text-lg md:text-xl lg:text-[24px] text-[#1F1514] font-light leading-[1.42] max-w-[544px] mx-auto lg:mx-0 mb-8">
              Со нашиот уникатен модел за селекција (Opfolio Radar) и
              софтверското решение за оптимална алатка за алокација (Opfolio
              Invest), поседуваме напредна комбинација од професионално know-how
              и технологија која ни дава значајна конкурентска предност на
              регионалниот пазар.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/consultation"
                className="px-10 py-4 bg-[#F5C322] text-[#1F1514] rounded-xl hover:bg-[#1F1514] hover:text-white transition-colors font-inter font-bold text-[20px] border border-white text-center"
              >
                Закажете консултација
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none">
            {!imageError ? (
              <div className="relative w-full h-[400px] bg-white rounded-[20px] border border-[#F5C322] shadow-[3.97px_11.1px_25.38px_rgba(0,0,0,0.1),14.27px_43.62px_45.99px_rgba(0,0,0,0.09),32.51px_97.54px_61.85px_rgba(0,0,0,0.05),57.1px_173.67px_72.96px_rgba(0,0,0,0.01),89.61px_271.21px_80.09px_rgba(0,0,0,0)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F3F0E6] to-[#2D445A] opacity-5 rounded-[20px]" />
                <Image
                  src="/hero-main.svg"
                  alt="Hero Image"
                  fill
                  className="object-contain rounded-[20px]"
                  priority
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div className="w-full h-[400px] bg-gray-200 rounded-[20px] flex items-center justify-center">
                <p className="text-gray-500">Image failed to load</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;

"use client";

import Link from "next/link";

const Consultation = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-[#F3F0E6] relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
        <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
          <h2 className="font-lora text-[32px] sm:text-[40px] md:text-[48px] text-[#1F1514] text-center leading-[1.28] max-w-[800px]">
            Не можете да се одлучите или не знаете од каде да почнете?{" "}
            <br className="hidden sm:block" />
            Закажете инвестициско советување!
          </h2>

          <Link
            href="/consultation"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#F5C322] border border-white rounded-xl text-[#1F1514] font-bold text-xl hover:bg-[#1F1514] hover:text-white transition-colors"
          >
            Закажете консултација
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Consultation;

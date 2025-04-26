"use client";

import Link from "next/link";

const Products = () => {
  const products = [
    {
      title: "Паричен фонд",
      description:
        "Фонд кој инвестира во депозити од повеќе банки и обврзници. Диверзификација на инструменти со поголем принос.",
      link: "/products/money-fund",
    },
    {
      title: "Акциски фонд",
      description:
        "Фонд кој инвестира во депозити од повеќе банки и обврзници. Диверзификација на инструменти со поголем принос.",
      link: "/products/stock-fund",
    },
    {
      title: "Управување со портфолио",
      description:
        "Фонд кој инвестира во депозити од повеќе банки и обврзници. Диверзификација на инструменти со поголем принос.",
      link: "/products/portfolio-management",
    },
  ];

  return (
    <section className="w-full py-10 sm:py-12 md:py-16 lg:py-24 bg-[#F3F0E6]">
      {/* Content */}
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] mb-3 sm:mb-4">
            Продукти
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#000000] font-light max-w-2xl mx-auto">
            Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до
            еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-[20px] border border-[#5A7D7C] p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center"
            >
              <div className="w-full flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center">
                  <h3 className="font-lora text-lg sm:text-xl md:text-2xl font-bold text-[#000000]">
                    {product.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm sm:text-base text-[#000000] font-normal leading-[1.375]">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center mt-2 sm:mt-3 md:mt-4">
                  <Link
                    href={product.link}
                    className="flex items-center text-[#000000] font-raleway font-semibold text-xs sm:text-sm hover:text-[#5A7D7C] transition-colors"
                  >
                    Дознај повеќе
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                    >
                      <path
                        d="M4 12L12 4M12 4H5M12 4V11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="hidden md:block relative mt-8 md:mt-12">
          {/* Lines */}
          <div className="absolute top-1/2 left-0 w-1/3 h-[2px] bg-[#6092C0]" />
          <div className="absolute top-1/2 right-0 w-1/3 h-[2px] bg-[#6092C0]" />

          {/* Dots */}
          <div className="absolute top-1/2 left-1/4 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#5A7D7C]" />
          <div className="absolute top-1/2 right-1/4 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#5A7D7C]" />
        </div>
      </div>
    </section>
  );
};

export default Products;

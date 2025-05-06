"use client";

import Link from "next/link";
import Image from "next/image";

const Products = () => {
  const products = [
    {
      title: "Паричен фонд",
      description:
        "Фонд кој инвестира во депозити од повеќе банки и обврзници. Диверзификација на инструменти со поголем принос.",
      link: "/products/money-fund",
      icon: "/paricen-fond-icon.svg",
    },
    {
      title: "Акциски фонд",
      description:
        "Фонд кој инвестира во депозити од повеќе банки и обврзници. Диверзификација на инструменти со поголем принос.",
      link: "/products/stock-fund",
      icon: "/akciski-fond-icon.svg",
    },
    {
      title: "Управување со портфолио",
      description:
        "Фонд кој инвестира во депозити од повеќе банки и обврзници. Диверзификација на инструменти со поголем принос.",
      link: "/products/portfolio-management",
      icon: "/upravuvanje-rizici.svg",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full">
          {/* Card 1 */}
          {products.map((product, index) => {
            return (
              <div
                className="w-full border border-[#5A7D7C] rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-[20px_20px_100px_20px] flex flex-col gap-6 sm:gap-8"
                key={`${index}${product.title}`}
              >
                <Image
                  src={product.icon}
                  alt={product.title}
                  width={48}
                  height={48}
                />
                <h3 className="font-lora font-bold text-xl sm:text-2xl leading-[1.28] text-black">
                  {product.title}
                </h3>
                <p className="font-inter text-sm sm:text-base leading-[1.375] text-black">
                  {product.description}
                </p>
                <div className="flex items-center gap-1  pb-20">
                  <Link href={product.link}>
                    <div className="flex items-center cursor-pointer">
                      <span className="font-raleway font-semibold text-sm leading-[1.17] text-black">
                        Дознај повеќе
                      </span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="rotate-[-180deg] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                      >
                        <path
                          d="M12 4L4 12L12 20"
                          stroke="#1F1514"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;

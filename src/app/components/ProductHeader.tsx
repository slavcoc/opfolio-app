import React from "react";

// Define the card data structure
interface ProductCard {
  id: number;
  title: string;
  description: string;
  additionalInfo: string;
  ctaText: string;
}

// Product cards data
const productCards: ProductCard[] = [
  {
    id: 1,
    title: "Паричен фонд",
    description: "Фонд кој инвестира во депозити од повеќе банки и обврзници. Диверзификација на инструменти со",
    additionalInfo: "Паричниот фонд е како депозит во банка до поголем принос",
    ctaText: "Во основање"
  },
  {
    id: 2,
    title: "Акциски фонд",
    description: "Фонд кој инвестира во депозити од повеќе банки и обврзници. Диверзификација на инструменти со",
    additionalInfo: "Паричниот фонд е како депозит во банка до поголем принос",
    ctaText: "Во основање"
  },
  {
    id: 3,
    title: "Управување со портфолио",
    description: "Фонд кој инвестира во депозити од повеќе банки и обврзници. Диверзификација на инструменти со",
    additionalInfo: "Паричниот фонд е како депозит во банка до поголем принос",
    ctaText: "Дознај повеќе"
  }
];

// Arrow icon component
const ArrowIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
      fill="black"
    />
  </svg>
);

// Product card component
const ProductCard: React.FC<{ card: ProductCard }> = ({ card }) => (
  <div className="w-full border border-[#5A7D7C] rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-[88px_48px] flex flex-col gap-6 sm:gap-8">
    <h3 className="text-heading-4 text-black">
      {card.title}
    </h3>
    <p className="text-body-small text-black">
      {card.description}
    </p>
    <p className="text-body-small text-black">
      {card.additionalInfo}
    </p>
    <div className="flex items-center gap-1 cursor-pointer">
      <span className="text-caption text-black">
        {card.ctaText}
      </span>
      <ArrowIcon />
    </div>
  </div>
);

const ProductHeader: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#F3F0E6] py-12 sm:py-16 md:py-20 lg:py-[100px]">
      <div className="relative z-20 max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-[100px]">
          <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-[819px] text-center">
            <h1 className="text-heading-1 text-[#1F1514]">
              Инвестирањето наскоро достапно до секого
            </h1>
            <p className="text-body-large text-[#1F1514]">
            Имајќи предвид дека финансиските потреби на секој инвеститор се уникатни, нудиме сеопфатен спектар на инвестициски решенија – 
            од инвестициски фондови до целосно персонализирани портфолија усогласени со вашите цели и ризичен профил.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full">
            {productCards.map((card) => (
              <ProductCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;

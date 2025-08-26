import Link from "next/link";
import Image from "next/image";
import { getAllEducationItems } from "../../services/educationService";

export default async function EducationItems() {
  const items = await getAllEducationItems();

  return (
    <div className="w-full bg-[#F3F0E6] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {items.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[299px] relative"
            >
              <div className="absolute right-0 bottom-0 w-full h-full">
                <Image
                  src="/education-lines.png"
                  alt="Education Item"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8 flex flex-col h-full justify-between">
                <h3 className="text-heading-4 text-black">
                  {card.title}
                </h3>

                <div className="flex flex-col gap-4 sm:gap-6">
                  <p className="font-inter font-light text-base sm:text-lg leading-[1.388em] text-[#1F1514] max-w-full">
                    {card.description}
                  </p>

                  <div className="flex items-center gap-1">
                    <span className="font-inter font-semibold text-xs sm:text-sm leading-[1.21em] text-[#1F1514]">
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

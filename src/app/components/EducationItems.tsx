'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllEducationItems, EducationItem } from "../../services/educationService";

export default function EducationItems() {
  const [items, setItems] = useState<EducationItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        setIsLoading(true);
        const data = await getAllEducationItems();
        if (isMounted) setItems(data);
      } catch {
        if (isMounted) setError("Не успеавме да ги вчитаме едукативните содржини.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full bg-[#F3F0E6] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden w-full h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[299px] animate-pulse"
              >
                <div className="h-full w-full p-4 sm:p-6 md:p-8">
                  <div className="h-7 sm:h-8 md:h-9 w-2/3 bg-gray-200 rounded mb-6" />
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-8 sm:py-12">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {items.map((card) => (
              <Link
                key={card.id}
                href={card.link}
                className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[299px] relative"
              >
                <div className="absolute right-0 bottom-0 w-full h-full">
                  <Image
                    src="./education-lines.png"
                    alt="Education Item"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col h-full justify-between">
                  <h3 className="font-lora text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-[1.375em] text-black">
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
        )}
      </div>
    </div>
  );
}

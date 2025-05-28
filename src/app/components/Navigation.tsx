"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navigation = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-[#F3F0E6] border-b border-[#F5C322] relative z-50">
      <div className="max-w-[1444px] mx-auto px-4 md:px-8 lg:px-[120px] py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Opfolio Logo"
              width={120}
              height={40}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#1F1514] p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative ">
            <Link href={"/products"}>
              <button
                className="px-6 py-4 text-[#1F1514] hover:text-[#F5C322] transition-colors cursor-pointer"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Продукти
              </button>
            </Link>
            {isProductsOpen && (
              <div
                className="fixed left-0 right-0 w-full bg-white shadow-lg z-50 pt-2"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <div className="max-w-[1444px] mx-auto px-4 md:px-8 lg:px-[120px] py-10">
                  <div className="flex gap-16">
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/products/stocks"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Акции
                      </Link>
                      <Link
                        href="/products/funds"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Инвестициски фондови
                      </Link>
                      <Link
                        href="/products/mse"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Македонска берза
                      </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/products/dividend"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Дивиденда
                      </Link>
                      <Link
                        href="/products/trading"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Тргување со акции
                      </Link>
                      <Link
                        href="/products/bonds"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Обврзници
                      </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/products/securities"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Хартии од вредност
                      </Link>
                      <Link
                        href="/products/bond-types"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Видови обврзници
                      </Link>
                      <Link
                        href="/products/stock-index"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Берзански индекс
                      </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/products/income"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Приход
                      </Link>
                      <Link
                        href="/products/diversification"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Диверзификација
                      </Link>
                      <Link
                        href="/products/inflation"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Инфлација
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <div className="relative">
            <Link href={"/education"}>
              <button
                className="px-6 py-4 text-[#1F1514] hover:text-[#F5C322] transition-colors cursor-pointer"
                onMouseEnter={() => setIsEducationOpen(true)}
                onMouseLeave={() => setIsEducationOpen(false)}
              >
                Едукација
              </button>
            </Link>
            {isEducationOpen && (
              <div
                className="fixed left-0 right-0 w-full bg-white shadow-lg z-50 pt-2"
                onMouseEnter={() => setIsEducationOpen(true)}
                onMouseLeave={() => setIsEducationOpen(false)}
              >
                <div className="max-w-[1444px] mx-auto px-4 md:px-8 lg:px-[120px] py-10">
                  <div className="flex gap-16">
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/education/money-fund"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Паричен фонд
                      </Link>
                      <Link
                        href="/education/progressive-fund"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Прогресивен фонд (акциски фонд)
                      </Link>
                      <Link
                        href="/education/investment-funds"
                        className="px-6 py-4 hover:bg-[#F5C322] rounded"
                      >
                        Инвестициски фондови
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div> */}

          {/* <Link
            href="/blog"
            className="px-6 py-4 text-[#1F1514] hover:text-[#F5C322] transition-colors"
          >
            Блог
          </Link> */}

          <Link
            href="/calculator"
            className="px-6 py-4 text-[#1F1514] hover:text-[#F5C322] transition-colors"
          >
            Калкулатор
          </Link>

          <Link
            href="/about"
            className="px-6 py-4 text-[#1F1514] hover:text-[#F5C322] transition-colors"
          >
            За Компанијата
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className="px-6 py-4 border border-[#1F1514] rounded-xl text-[#1F1514] hover:bg-[#1F1514] hover:text-white transition-colors"
          >
            Најави се
          </Link>
          <Link
            href="/register"
            className="px-6 py-4 bg-[#F5C322] rounded-xl text-[#1F1514] hover:bg-[#1F1514] hover:text-white transition-colors"
          >
            Започни
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white p-4 shadow-lg">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <button
                className="px-4 py-2 text-[#1F1514] font-medium"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Продукти {isProductsOpen ? "▼" : "▶"}
              </button>
              {isProductsOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    href="/products/stocks"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded"
                  >
                    Акции
                  </Link>
                  <Link
                    href="/products/funds"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded"
                  >
                    Инвестициски фондови
                  </Link>
                  <Link
                    href="/products/mse"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded"
                  >
                    Македонска берза
                  </Link>
                  <Link
                    href="/products/dividend"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded"
                  >
                    Дивиденда
                  </Link>
                  <Link
                    href="/products/trading"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded"
                  >
                    Тргување со акции
                  </Link>
                  <Link
                    href="/products/bonds"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded"
                  >
                    Обврзници
                  </Link>
                </div>
              )}
            </div>

            {/* <div className="flex flex-col gap-2">
              <button
                className="px-4 py-2 text-[#1F1514] font-medium"
                onClick={() => setIsEducationOpen(!isEducationOpen)}
              >
                Едукација {isEducationOpen ? "▼" : "▶"}
              </button>
              {isEducationOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    href="/education/money-fund"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded"
                  >
                    Паричен фонд
                  </Link>
                  <Link
                    href="/education/progressive-fund"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded"
                  >
                    Прогресивен фонд
                  </Link>
                  <Link
                    href="/education/investment-funds"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded"
                  >
                    Инвестициски фондови
                  </Link>
                </div>
              )}
            </div> */}

            {/* <Link
              href="/blog"
              className="px-4 py-2 text-[#1F1514] hover:bg-[#F5C322] rounded"
            >
              Блог
            </Link> */}
            <Link
              href="/calculator"
              className="px-4 py-2 text-[#1F1514] hover:bg-[#F5C322] rounded"
            >
              Калкулатор
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-[#1F1514] hover:bg-[#F5C322] rounded"
            >
              За Компанијата
            </Link>

            <div className="flex flex-col gap-2 mt-4">
              <Link
                href="/login"
                className="px-4 py-2 border border-[#1F1514] rounded-xl text-center text-[#1F1514] hover:bg-[#1F1514] hover:text-white transition-colors"
              >
                Најави се
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-[#F5C322] rounded-xl text-center text-[#1F1514] hover:bg-[#1F1514] hover:text-white transition-colors"
              >
                Започни
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navigation = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-[#F3F0E6] border-b border-[#F5C322] sticky top-0 z-[100]">
      <div className="max-w-[1444px] mx-auto px-4 md:px-8 lg:px-[120px] py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="logo">
            <Image
              src="./logo.svg"
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
          <div className="relative nav-item">
            <Link href={"/products"}>
              <button
                className="px-6 py-4 text-[#1F1514]  transition-colors cursor-pointer"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Продукти
              </button>
            </Link>
            
            <div
              className={`nav-dropdown fixed left-0 right-0  bg-[#E6E7E5] top-[106px] shadow-lg z-[90] transition-all duration-300 ${
                isProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <div className="max-w-[1444px] mx-auto px-4 md:px-8 lg:px-[120px] py-10">
                <div className="flex gap-16">
                  {/* First Column */}
                  <div className="flex flex-col">
                  <div className="flex flex-col nav-sub-item relative"> 
                    <Link
                      href="/products"
                      className="px-6 py-4 pl-0 pb-1 rounded-lg transition-colors text-[#1F1514] font-bold  nav-sub-item"
                    >
                      Opfolio
                    </Link>
                    </div>
                    <div className="flex flex-col nav-sub-item relative"> 
                    <Link
                      href="/products/funds"
                      className="px-6 py-4 pl-0 pb-1 rounded-lg transition-colors text-[#1F1514]"
                    >
                      Инвестициски фондови
                    </Link>
                    </div>
                    <div className="flex flex-col nav-sub-item relative"> 
                    <Link
                      href="/products/mse"
                      className="px-6 py-4 pl-0 pb-1 rounded-lg transition-colors text-[#1F1514]"
                    >
                      Македонска берза
                    </Link>
                  </div>
                  </div>
                  {/* Divider */}
                  <div className="w-[1px] h-[169px] bg-gradient-to-b from-[#E6E7E5] via-[#5A7D7C] to-[#E6E7E5]"></div>

                  {/* Second Column */}
                  <div className="flex flex-col"> 
                  <div className="flex flex-col nav-sub-item relative">
                    <Link
                      href="/products/documents"
                      className="px-6 py-4 pl-0 pb-1 rounded-lg transition-colors text-[#1F1514] font-bold"
                    >
                      Документи
                    </Link>
                    </div>
                    <div className="flex flex-col nav-sub-item relative">
                    <Link
                      href="/products/trading"
                      className="px-6 py-4 pl-0 pb-1 rounded-lg transition-colors text-[#1F1514]"
                    >
                      Тргување со акции
                    </Link>
                    </div>
                    <div className="flex flex-col nav-sub-item relative">
                    <Link
                      href="/products/bonds"
                      className="px-6 py-4 pl-0 pb-1 rounded-lg transition-colors text-[#1F1514]"
                    >
                      Обврзници
                    </Link>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-[1px] h-[169px] bg-gradient-to-b from-[#E6E7E5] via-[#5A7D7C] to-[#E6E7E5]"></div>

                  {/* Third Column */}
                  <div className="flex flex-col">
                  <div className="flex flex-col nav-sub-item relative">
                    <Link
                      href="/education"
                      className="px-6 py-4 pl-0 pb-1 rounded-lg transition-colors text-[#1F1514] font-bold"
                    >
                      Едукација
                    </Link>
                    </div>
                    <div className="flex flex-col nav-sub-item relative">
                    <Link
                      href="/products/stock-index"
                      className="px-6 py-4 pl-0 pb-1 rounded-lg transition-colors text-[#1F1514]"
                    >
                      Берзански индекс
                    </Link>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-[1px] h-[169px] bg-gradient-to-b from-[#E6E7E5] via-[#5A7D7C] to-[#E6E7E5]"></div>

                  {/* Fourth Column */}
                  <div className="flex flex-col">
                  <div className="flex flex-col nav-sub-item relative">
                    <Link
                      href="/blog"
                      className="px-6 py-4 pl-0 pb-1 rounded-lg transition-colors text-[#1F1514] font-bold"
                    >
                      Блог
                    </Link>
                    </div>
                    <div className="flex flex-col nav-sub-item relative">
                    <Link
                      href="/products/inflation"
                      className="px-6 py-4 pl-0 pb-1 rounded-lg transition-colors text-[#1F1514]"
                    >
                      Инфлација
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            className="px-6 py-4 text-[#1F1514] transition-colors nav-item"
          >
            Калкулатор
          </Link>

          <Link
            href="/about"
            className="px-6 py-4 text-[#1F1514] transition-colors nav-item"
          >
            За Компанијата
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className="cta-button px-4 py-4 border border-[#1F1514] rounded-xl text-[#1F1514] bg-transparent text-sm"
          >
            Најави се
          </Link>
          <Link
            href="/register"
            className="cta-button px-4 py-4 bg-[#F5C322] rounded-xl text-[#1F1514] text-sm"
          >
            Регистрирај се
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#E6E7E5] p-4 shadow-lg">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <button
                className="px-4 py-2 text-[#1F1514] font-medium flex items-center justify-between"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                <span>Продукти</span>
                <span>{isProductsOpen ? "▼" : "▶"}</span>
              </button>
              {isProductsOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    href="/products"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded text-[#1F1514] font-bold nav-sub-item"
                  >
                    Opfolio
                  </Link>
                  <Link
                    href="/products/funds"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded text-[#1F1514]"
                  >
                    Инвестициски фондови
                  </Link>
                  <Link
                    href="/products/mse"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded text-[#1F1514]"
                  >
                    Македонска берза
                  </Link>
                  <div className="h-[1px] w-full bg-[#5A7D7C] my-2"></div>
                  <Link
                    href="/products/documents"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded text-[#1F1514] font-bold"
                  >
                    Документи
                  </Link>
                  <Link
                    href="/products/trading"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded text-[#1F1514]"
                  >
                    Тргување со акции
                  </Link>
                  <Link
                    href="/products/bonds"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded text-[#1F1514]"
                  >
                    Обврзници
                  </Link>
                  <div className="h-[1px] w-full bg-[#5A7D7C] my-2"></div>
                  <Link
                    href="/education"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded text-[#1F1514] font-bold"
                  >
                    Едукација
                  </Link>
                  <Link
                    href="/products/stock-index"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded text-[#1F1514]"
                  >
                    Берзански индекс
                  </Link>
                  <div className="h-[1px] w-full bg-[#5A7D7C] my-2"></div>
                  <Link
                    href="/blog"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded text-[#1F1514] font-bold"
                  >
                    Блог
                  </Link>
                  <Link
                    href="/products/inflation"
                    className="px-4 py-2 hover:bg-[#F5C322] rounded text-[#1F1514]"
                  >
                    Инфлација
                  </Link>
                </div>
              )}
            </div>

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

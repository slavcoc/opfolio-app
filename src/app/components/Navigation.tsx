"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Main navigation items
  const mainNavItems = [
    {
      label: "За нас",
      href: "/za-kompanijata",
      hasDropdown: true,
      dropdownColumns: [
        [
          { label: "Продукти", href: "/produkti", isBold: false },
          { label: "Едукација", href: "/education", isBold: false },
          { label: "Блог", href: "/blog", isBold: false },
          { label: "Документи", href: "/za-kompanijata/dokumenti", isBold: false },
        ],
      ],
    },
    // {
    //   label: "Продукти",
    //   href: "/products",
    //   hasDropdown: true,
    //   dropdownColumns: [
    //     [
    //       { label: "Opfolio", href: "/products", isBold: true },
    //       { label: "Инвестициски фондови", href: "/products/funds", isBold: false },
    //       { label: "Македонска берза", href: "/products/mse", isBold: false },
    //     ],
    //     [
    //       { label: "Документи", href: "/products/documents", isBold: true },
    //       { label: "Тргување со акции", href: "/products/trading", isBold: false },
    //       { label: "Обврзници", href: "/products/bonds", isBold: false },
    //     ],
    //     [
    //       { label: "Инвестициски фондови", href: "/products/funds", isBold: false },
    //       { label: "Македонска берза", href: "/products/mse", isBold: false },
    //       { label: "Едукација", href: "/education", isBold: true },
    //       { label: "Берзански индекс", href: "/products/stock-index", isBold: false },
    //     ],
    //     [
    //       { label: "Блог", href: "/blog", isBold: true },
    //       { label: "Инфлација", href: "/products/inflation", isBold: false },
    //     ],
    //   ],
    // },
    {
      label: "Калкулатор",
      href: "/calculator",
      hasDropdown: false,
    },
    // {
    //   label: "За Компанијата",
    //   href: "/about",
    //   hasDropdown: false,
    // },
  ];

  // Auth buttons
  const authButtons = [
    // {
    //   label: "Најави се",
    //   href: "/login",
    //   variant: "outline" as const,
    // },
    {
      label: "Контактирај не",
      href: "/register",
      variant: "primary",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (itemLabel: string) => {
    setOpenDropdown(openDropdown === itemLabel ? null : itemLabel);
  };

  const handleDropdownMouseEnter = (itemLabel: string) => {
    setOpenDropdown(itemLabel);
  };

  const handleDropdownMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="w-full bg-[#F3F0E6] border-b border-[#F5C322] sticky top-0 z-[100]">
      <div className="max-w-[1444px] mx-auto px-4 md:px-8 lg:px-[120px] py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="logo">
            <Image
              src="./opfolio-logo.png"
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
          {mainNavItems.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <>
                  <Link href={item.href}>
                    <button
                      className="px-6 py-4 text-[#1F1514] transition-colors cursor-pointer"
                      onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      {item.label}
                    </button>
                  </Link>
                  
                  <div
                    className={`nav-dropdown fixed left-0 right-0 bg-[#E6E7E5] top-[88px] shadow-lg z-[90] transition-all duration-300 ${
                      openDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="max-w-[1444px] mx-auto px-4 md:px-8 lg:px-[120px] py-10">
                      <div className="flex gap-16">
                        {item.dropdownColumns?.map((column, columnIndex) => (
                          <div key={columnIndex} className="flex">
                            <div className="flex flex-col">
                              {column.map((subItem, subIndex) => (
                                <div key={subIndex} className="flex flex-col nav-sub-item relative">
                                  <Link
                                    href={subItem.href}
                                    className={`px-6 py-4 pl-0 pb-1 rounded-lg transition-colors text-[#1F1514] ${
                                      subItem.isBold ? 'font-bold' : ''
                                    } nav-sub-item`}
                                  >
                                    {subItem.label}
                                  </Link>
                                </div>
                              ))}
                            </div>
                            {columnIndex < (item.dropdownColumns?.length || 0) - 1 && (
                              <div className="w-[1px] h-full bg-gradient-to-b from-[#E6E7E5] via-[#5A7D7C] to-[#E6E7E5] ml-8"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="px-6 py-4 text-[#1F1514] transition-colors nav-item"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {authButtons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={`cta-button px-4 py-4 rounded-xl text-sm ${
                button.variant === 'outline'
                  ? 'border border-[#1F1514] text-[#1F1514] bg-transparent'
                  : 'bg-[#F5C322] text-[#1F1514]'
              }`}
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#E6E7E5] p-4 shadow-lg">
          <div className="flex flex-col gap-4">
            {mainNavItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                {item.hasDropdown ? (
                  <>
                    <button
                      className="px-4 py-2 text-[#1F1514] font-medium flex items-center justify-between"
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      <span>{item.label}</span>
                      <span>{openDropdown === item.label ? "▼" : "▶"}</span>
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 flex flex-col gap-2">
                        {item.dropdownColumns?.map((column, columnIndex) => (
                          <div key={columnIndex}>
                            {column.map((subItem, subIndex) => (
                              <div key={subIndex}>
                                <Link
                                  href={subItem.href}
                                  className={`px-4 py-2 hover:bg-[#F5C322] rounded text-[#1F1514] ${
                                    subItem.isBold ? 'font-bold' : ''
                                  } nav-sub-item`}
                                >
                                  {subItem.label}
                                </Link>
                              </div>
                            ))}
                            {/* Add divider after each column except the last one */}
                            {columnIndex < (item.dropdownColumns?.length || 0) - 1 && (
                              <div className="h-[1px] w-full bg-[#5A7D7C] my-2"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-[#1F1514] hover:bg-[#F5C322] rounded"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-2 mt-4">
              {authButtons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`px-4 py-2 rounded-xl text-center transition-colors ${
                    button.variant === 'outline'
                      ? 'border border-[#1F1514] text-[#1F1514] hover:bg-[#1F1514] hover:text-white'
                      : 'bg-[#F5C322] text-[#1F1514] hover:bg-[#1F1514] hover:text-white'
                  }`}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F3F0E6] border-t border-[#F5C322]">
      <div className="max-w-[1444px] mx-auto px-4 md:px-8 lg:px-[120px] py-16">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          {/* Start Here Section */}
          <div className="flex flex-col gap-10 w-full lg:w-[255px]">
            <h3 className="text-[20px] font-bold text-[#1F1514]">
              Започни тука
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="/education"
                className="text-[20px] text-[#1F1514] hover:text-[#F5C322] transition-colors"
              >
                Едукација
              </Link>
              <Link
                href="/blog"
                className="text-[20px] text-[#1F1514] hover:text-[#F5C322] transition-colors"
              >
                Блог
              </Link>
              <Link
                href="/dictionary"
                className="text-[20px] text-[#1F1514] hover:text-[#F5C322] transition-colors"
              >
                Инвестициски речник
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="flex flex-col gap-10 w-full lg:w-[280px]">
            <h3 className="text-[20px] font-bold text-[#1F1514]">Компанија</h3>
            <div className="flex flex-col gap-4">
              <Link
                href="/privacy"
                className="text-[20px] text-[#1F1514] hover:text-[#F5C322] transition-colors"
              >
                Политика за приватност
              </Link>
              <Link
                href="/terms"
                className="text-[20px] text-[#1F1514] hover:text-[#F5C322] transition-colors"
              >
                Услови за користење
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-10 w-full lg:w-[219px]">
            <h3 className="text-[20px] font-bold text-[#1F1514]">Контакт</h3>
            <div className="flex flex-col gap-4">
              <p className="text-[20px] text-[#1F1514]">Дане Крапчев 26/1</p>
              <p className="text-[20px] text-[#1F1514]">Центар-Скопје</p>
              <a
                href="mailto:info@opfolio.mk"
                className="text-[20px] text-[#1F1514] hover:text-[#F5C322] transition-colors"
              >
                info@opfolio.mk
              </a>
              <a
                href="tel:+38976760767"
                className="text-[20px] text-[#1F1514] hover:text-[#F5C322] transition-colors"
              >
                +389 76 760 767
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="w-full lg:w-auto">
            <Image
              src="/logo.svg"
              alt="Opfolio Logo"
              width={120}
              height={40}
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#1F1514]/60 mb-8" />

        {/* Copyright */}
        <p className="text-[16px] text-[#1F1514] text-center">
          Сите права задржани 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;

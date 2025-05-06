import React from "react";

const BlogChildHeader = () => {
  return (
    <header
      className="w-full bg-gradient-to-r from-[#F4DA84] to-[#5A7D7C] py-8 sm:py-12 md:py-[59px] flex justify-center items-center px-4 lg:px-[240px]"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <h2
        className="font-bold text-base sm:text-lg md:text-xl lg:text-[16px] leading-[1.21] text-[#1F1514] text-left w-full"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Opfolio Едукација / Не можете да се одлучите или не знаете од каде да
        почнете?
      </h2>
    </header>
  );
};

export default BlogChildHeader;

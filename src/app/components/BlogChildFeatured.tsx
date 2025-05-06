import React from "react";
import Image from "next/image";
const importantConclusions = [
  "Важен заклучок од статијата број еден , овие би биле two line texts maximum sdfsdfsfsf",
  "Важен заклучок од статијата број еден , овие би биле two line texts maximumddd d",
  "Важен заклучок од статијата број еден , овие би биле two line texts maximum",
  "Важен заклучок од статијата број еден , овие би биле two line texts maximum",
  "Важен заклучок од статијата број еден , овие би биле two line texts maximum",
];

const BlogChildFeatured = () => {
  return (
    <section className="relative w-full bg-[#F3F0E6] flex flex-col items-center px-4 md:px-12 lg:px-[138px] pt-12 md:pt-[80px] pb-8 md:pb-[80px] gap-20 md:gap-[40px] overflow-hidden">
      {/* Background SVG patterns (example, adjust as needed) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Example: <img src={Pattern1} alt="Pattern" className="absolute top-0 left-0 w-40 h-40 opacity-30" /> */}
        {/* Add more patterns as needed for the background */}
        <Image
          src="/blog-slug-cap.png"
          alt="Blog Featured Background"
          fill
          className="object-fit"
        />
      </div>

      {/* Title */}
      <h1 className="font-lora font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.28] text-center text-black z-10">
        Не можете да се одлучите или не знаете од каде да почнете?
      </h1>

      {/* Featured box with important conclusions */}
      <div className="bg-[#E6E7E5] rounded-2xl p-6 md:p-10 lg:p-[40px_40px_48px] w-full max-w-3xl flex flex-col items-center gap-6 md:gap-8 z-10">
        <div className="w-full flex flex-col gap-4">
          <h2 className="font-lora font-bold text-lg md:text-xl lg:text-[18px] leading-[1.28] text-black mb-2">
            Важни заклучоци
          </h2>
          <div className="flex flex-col gap-4">
            {importantConclusions.map((conclusion, idx) => (
              <div
                key={idx}
                className="font-[Figtree,Inter,sans-serif] text-base md:text-lg lg:text-[18px] leading-[1.2] text-black bg-transparent"
              >
                {conclusion}
              </div>
            ))}
          </div>
        </div>
        {/* Example logo or SVG group can be placed here if needed */}
      </div>
    </section>
  );
};

export default BlogChildFeatured;

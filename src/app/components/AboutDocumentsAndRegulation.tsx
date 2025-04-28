import React from "react";

const AboutDocumentsAndRegulation: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF4CF] py-12 sm:py-16 md:py-20">
      {/*
        Background pattern implementation:
        1. Create a public/images directory if it doesn't exist
        2. Add the pattern SVG files from Figma to public/images/
        3. Update this div to include the pattern images with proper positioning
      */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {/* Pattern images will be added here */}
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-5">
        <h2 className="font-lora font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.28] tracking-[0.01em] text-center text-[#1F1514] mb-6 sm:mb-8 md:mb-10">
          Документи и законски регулативи
        </h2>

        <p className="font-inter font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.4] text-center text-[#1F1514] max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto mb-6 sm:mb-8 md:mb-10 px-4">
          Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до
          еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
          <br />
          <br />
          Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед до
          еиусмод темпор инцидидунт ут лаборе ет долор магна алиљуа.
        </p>

        <div className="flex justify-center">
          <button className="bg-[#F5C322] border border-white rounded-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-inter font-bold text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.21] text-[#1F1514] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            Прочитајте повеќе
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutDocumentsAndRegulation;

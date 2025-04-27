"use client";

const Stats = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F3F0E6]">
      {/* Stats content */}
      <div className="max-w-[1444px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-[160px]">
            {/* Stat 1 */}
            <div className="flex flex-col gap-1 w-full md:w-[300px]">
              <div className="flex justify-center items-center p-2">
                <h3 className="font-lora text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1F1514] leading-[1.28]">
                  $20+ милиони
                </h3>
              </div>
              <div className="px-2">
                <p className="font-inter text-base text-[#1F1514] font-normal leading-[1.5]">
                  Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед
                  до еиусмод темпор
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-1 w-full md:w-[300px]">
              <div className="flex justify-center items-center p-2">
                <h3 className="font-lora text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1F1514] leading-[1.28]">
                  10г.+ искуство
                </h3>
              </div>
              <div className="px-2">
                <p className="font-inter text-base text-[#1F1514] font-normal leading-[1.5]">
                  Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед
                  до еиусмод темпор
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-1 w-full md:w-[300px]">
              <div className="flex justify-center items-center p-2">
                <h3 className="font-lora text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1F1514] leading-[1.28]">
                  10.000+ корисници
                </h3>
              </div>
              <div className="px-2">
                <p className="font-inter text-base text-[#1F1514] font-normal leading-[1.5]">
                  Лорем ипсум долор сит амет, цонсекттеур адиписцинг елит, сед
                  до еиусмод темпор
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

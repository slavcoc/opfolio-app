"use client";


const stats = [
  {
    title: "Квалитет",
    description: "Водиме база на податоци за глобални компании, го следиме нивниот развој и утврдуваме кои од нив ги исполнуваат нашите строги критериуми за квалитет и раст.",
  },
  {
    title: "Фокус",
    description: "Нашето инвестициско портфолио е сконцентрирано во 25 до 40 компании, избрани врз основа на нивниот долгорочен потенцијал.",
  },
  {
    title: "Искуство",
    description: "Нашиот тим има преку 10 години искуство и извонредни резултати во управувањето со средства.",
  },
];  
const Stats = () => {
  return (
    <section className="w-full py-14 md:py-[56px] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1402px] h-[1402px] pointer-events-none">
        <div className="w-full h-full rounded-full" />
      </div>

      {/* Stats content */}
      <div className="relative z-10 max-w-[1444px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16 lg:gap-[160px] max-w-[1090px] mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-1 w-full md:w-[257px]">
              <div className="flex items-center p-2">
                <h3 className="font-lora text-2xl md:text-3xl lg:text-[32px] font-medium text-[#1F1514] leading-[1.28]">
                  {stat.title}
                </h3>
              </div>
              <div className="px-2">
                <p className="font-inter text-base text-[#1F1514] font-normal leading-[1.5] text-center md:text-left">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Stats;

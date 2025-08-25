import React from "react";

const AboutTimeline: React.FC = () => {
  const timelineData = [
    {
      id: 1,
      date: "January 2015",
      title: "Основање на компанијата",
      description: "Друштвото за управување со отворени и затворени инвестициски фондови ОПФОЛИО ИНВЕСТИЦИИ АД Скопје е основано во 2025 година.",
      color: "#FD4A4A"
    },
    {
      id: 2,
      date: "January 2015",
      title: "Регистрација во Трговски регистар",
      description: "Друштвото е запишано во Трговскиот регистар под матичен број 6443532 на 10.06.2025 година.",
      color: "#FD4A4A"
    },
    {
      id: 3,
      date: "January 2015",
      title: "Одобрение за работа",
      description: "Друштвото работи согласно одобрението за работа издадено од страна на Комисијата за хартии од вредност на Република Македонија.",
      color: "#FD4A4A"
    },
    {
      id: 4,
      date: "January 2015",
      title: "Започнување со управување",
      description: "Друштвото ќе управува со два отворени инвестициски фондови.",
      color: "#FD4A4A"
    }
  ];

  return (
    <section className="bg-[#F3F0E6] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-36 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1444px]">
        {/* Header Section */}
        <div className="mb-8 sm:mb-16 md:mb-20 lg:mb-22">
          <h2 className="text-heading-2 text-[#1F1514] mb-6 sm:mb-8 md:mb-10">
          За Друштвото
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[175px]">
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <p className="text-body-medium text-[#1F1514] max-w-[614px]">
              Друштвото за управување со отворени и затворени инвестициски фондови ОПФОЛИО ИНВЕСТИЦИИ АД Скопје е основано во 2025 година. Основната главнина на Друштвото изнесува 250.000 евра и е поделена на 1.000 обични акции, секоја со номинална вредност од 250 евра. Мнозински акционер во друштвото е ОПФОЛИО АД Скопје.
              </p>
              <p className="text-body-medium text-[#1F1514] max-w-[614px]">
              Друштвото ја врши својата дејност врз основа на дозволата за работа издадена од Комисијата за хартии од вредност на Република Македонија (број: УП1 08-113, од 29.05.2025 година).
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <p className="text-body-medium text-[#1F1514] max-w-[614px]">
              Друштвото е запишано во Трговскиот регистар на 10.06.2025 година, со единствен матичен број 7851499. Во рамките на својата дејност, Друштвото ќе управува со два отворени инвестициски фондови. Седиштето се наоѓа на улица „Дане Крапчев“ бр. 21/6 во Скопје.
              </p>
              <p className="text-body-medium text-[#1F1514] max-w-[614px]">
              Пречистениот текст на Статутот на Друштвото е усвоен на 18.12.2024 година.
              </p>
              <p className="text-body-medium text-[#1F1514] max-w-[614px]">
              Депозитарна банка на фондовите со кои управува Друштвото ќе е Шпаркасе Банка АД Скопје.
              </p>
            </div>
          </div>
        </div>
        <div style={{height: "8rem"}}></div>

        {/* Timeline Section */}
        <div className="relative mt-0">
          {/* Timeline Items */}
          <div>
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Mobile version */}
                <div className="lg:hidden mb-14">
                  {/* Date - Mobile version */}
                  <div className="mb-5 sm:mb-7 text-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-lora font-bold leading-1.28 tracking-0.01 text-black">
                      {item.date}
                    </span>
                  </div>

                  {/* Card - Mobile version */}
                  <div className="w-full bg-white rounded-[20px] p-5 sm:p-6 md:p-10 lg:p-13 shadow-lg">
                    <div className="space-y-5 sm:space-y-6">
                      {/* Colored header */}
                      <div 
                        className="w-full h-39 sm:h-52 md:h-65 lg:h-[247px] rounded-[20px]"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      
                      {/* Content */}
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[29px] font-lora font-normal leading-1.28 tracking-0.01 text-[#1F1514] max-w-[334px]">
                          {item.title}
                        </h3>
                        <p className="text-body-medium text-[#1F1514]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Timeline Item */}
                <div className="hidden lg:block relative min-h-[650px] mb-0">
                  {/* Centered line with yellow dots - height matches card + padding */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-[650px]">
                    {/* SVG Timeline Line - hidden for last item */}
                    {index !== timelineData.length - 1 && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full flex flex-col items-center justify-center">
                        <img 
                          src="/images/timeline/timeline-line.svg" 
                          alt="Timeline line" 
                          className="w-full h-full object-cover"
                          style={{ height: '90%' }}
                        />
                      </div>
                    )}
                    
                    {/* Yellow dot at start of line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#F5C324] rounded-full shadow-lg"></div>
                  </div>

                  {/* Relative positioned container */}
                  <div className="relative w-full h-full">
                    {/* Card positioned based on index (alternating) - aligned with top yellow dot */}
                    <div className={`absolute top-[10px] w-[517px] bg-white rounded-[20px] p-9 shadow-lg ${
                      index % 2 === 0 
                        ? 'right-1/2 transform -translate-x-20' // Left side (first, third)
                        : 'left-1/2 transform translate-x-20'  // Right side (second, fourth)
                    }`}>
                      <div className="space-y-6">
                        {/* Colored header */}
                        <div 
                          className="w-full h-[247px] rounded-[20px]"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        
                        {/* Content */}
                        <div className="space-y-3">
                          <h3 className="text-[29px] font-lora font-normal leading-1.28 tracking-0.01 text-[#1F1514] max-w-[334px]">
                            {item.title}
                          </h3>
                          <p className="text-body-medium text-[#1F1514]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Year positioned opposite to card - aligned with top yellow dot */}
                    <div className={`absolute top-[-20px] ${
                      index % 2 === 0 
                        ? 'left-1/2 transform translate-x-20'  // Right side (first, third)
                        : 'right-1/2 transform -translate-x-10' // Left side (second, fourth)
                    }`}>
                      <span className="text-[29px] font-lora font-bold leading-1.28 tracking-0.01 text-black">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;

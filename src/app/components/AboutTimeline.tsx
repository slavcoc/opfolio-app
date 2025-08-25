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
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-18">
          <h2 className="text-heading-2 text-[#1F1514] mb-6 sm:mb-8 md:mb-10">
            За Опфолио Инвестиции АД
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[175px]">
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <p className="text-body-medium text-[#1F1514] max-w-[614px]">
                Друштвото за управување со отворени и затворени инвестициски фондови ОПФОЛИО ИНВЕСТИЦИИ АД Скопје е основано во 2025 година. Почетниот капитал на Друштвото изнесува 250.000,00 евра, поделен на 2.500 обични акции со номинален износ од 1.000 евра по акција. Мнозински акционер во Друштвото за управување е ОПФОЛИО АД Скопје.
              </p>
              <p className="text-body-medium text-[#1F1514] max-w-[614px]">
                Друштвото работи согласно одобрението за работа издадено од страна на Комисијата за хартии од вредност на Република Македонија број УП1 08-113 од 29.05.2025 година.
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <p className="text-body-medium text-[#1F1514] max-w-[614px]">
                Друштвото е запишано во Трговскиот регистар под матичен број 6443532 на 10.06.2025 година. Друштвото ќе управува со два отворени инвестициски фондови. Седиштето на Друштвото е на ул. „Дане Крапчев" бр. 21/6 во Скопје, Република Македонија.
              </p>
              <p className="text-body-medium text-[#1F1514] max-w-[614px]">
                Пречистениот текст на Статутот на Друштвото е донесен на ден 18.12.2024 година. Депозитарна банка на фондовите со коишто управува Друштвото е Шпаркасе Банка АД Скопје.
              </p>
            </div>
          </div>
        </div>

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
                  <div className="w-full bg-white rounded-[20px] p-5 sm:p-7 md:p-11 lg:p-14 shadow-lg">
                    <div className="space-y-5 sm:space-y-7">
                      {/* Colored header */}
                      <div 
                        className="w-full h-43 sm:h-58 md:h-72 lg:h-[274px] rounded-[20px]"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      
                      {/* Content */}
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-lora font-normal leading-1.28 tracking-0.01 text-[#1F1514] max-w-[371px]">
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
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-[650px] top-[-22px]">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full border-l border-dashed border-[#5A7D7C]"></div>
                    
                    {/* Yellow dots at start and end of line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#F5C324] rounded-full border-4 border-white shadow-lg"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-[#F5C324] rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Relative positioned container */}
                  <div className="relative w-full h-full">
                    {/* Card positioned based on index (alternating) - aligned with top yellow dot */}
                    <div className={`absolute top-[-20px] w-[574px] bg-white rounded-[20px] p-14 shadow-lg ${
                      index % 2 === 0 
                        ? 'right-1/2 transform -translate-x-5' // Left side (first, third)
                        : 'left-1/2 transform translate-x-5'  // Right side (second, fourth)
                    }`}>
                      <div className="space-y-7">
                        {/* Colored header */}
                        <div 
                          className="w-full h-[274px] rounded-[20px]"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        
                        {/* Content */}
                        <div className="space-y-3">
                          <h3 className="text-[32px] font-lora font-normal leading-1.28 tracking-0.01 text-[#1F1514] max-w-[371px]">
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
                        ? 'left-1/2 transform translate-x-5'  // Right side (first, third)
                        : 'right-1/2 transform -translate-x-5' // Left side (second, fourth)
                    }`}>
                      <span className="text-[32px] font-lora font-bold leading-1.28 tracking-0.01 text-black">
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

import React from "react";
import Image from "next/image";
import { getAllTimelineItems } from "../../services/timelineService";
import { TimelineItem } from "../../services/timelineService";

const AboutTimeline: React.FC = async () => {
  // Fetch timeline data from Strapi
  console.log('AboutTimeline: Starting to fetch timeline data...');
  
  let timelineData: TimelineItem[] = [];
  
  try {
    timelineData = await getAllTimelineItems();
    console.log('AboutTimeline: Received timeline data:', timelineData);
  } catch (error) {
    console.error('AboutTimeline: Error fetching timeline data:', error);
    // Fallback data if API fails
    timelineData = [
      {
        id: 1,
        documentId: "fallback-1",
        date: "Март 2012",
        title: "Раѓање на идејата",
        description: "Започна развојот на концепт за инвестициски модел базиран на научни и историски податоци, со цел заштита на вредноста на средствата при нестабилни пазарни услови",
        color: "#FD4A4A",
        image: null,
        order: 1,
        createdAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z",
        publishedAt: "2025-01-01T00:00:00.000Z",
        locale: null,
        status: "published"
      },
      {
        id: 2,
        documentId: "fallback-2",
        date: "Мај 2015",
        title: "Трансформација во софтвер",
        description: "Теоретскиот модел е успешно имплементиран во софтверска апликација за извршување брзи и автоматизирани пресметки и анализи.",
        color: "#FD4A4A",
        image: null,
        order: 2,
        createdAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z",
        publishedAt: "2025-01-01T00:00:00.000Z",
        locale: null,
        status: "published"
      },
      {
        id: 3,
        documentId: "fallback-3",
        date: "Март 2021",
        title: "Основање на холдинг компанија",
        description: "Група домашни претприемачи ја основаат &ldquo;Опфолио АД&rdquo; – холдинг компанија со стратешки фокус на инвестиции во финансиската и ИКТ индустријата.",
        color: "#FD4A4A",
        image: null,
        order: 3,
        createdAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z",
        publishedAt: "2025-01-01T00:00:00.000Z",
        locale: null,
        status: "published"
      },
      {
        id: 4,
        documentId: "fallback-4",
        date: "Мај 2025",
        title: "Специјализација и почеток со работа",
        description: "Основано е друштвото &ldquo;Опфолио Инвестиции АД&rdquo;. По добивањето на дозволата за работа, друштвото официјално започнува да нуди услуги за управување со инвестициски фондови, управување со средства за клиенти и инвестиционо советување.",
        color: "#FD4A4A",
        image: null,
        order: 4,
        createdAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z",
        publishedAt: "2025-01-01T00:00:00.000Z",
        locale: null,
        status: "published"
      }
    ];
  }

  return (
    <section className="bg-[#F3F0E6] ">
      <div className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden ">
      <div className="mx-auto max-w-[1444px]">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-16 md:mb-20 lg:mb-22">
          <h1 className="text-heading-1 text-[#1F1514] text-center pb-10">
          За Друштвото
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8 md:space-y-10 text-justify">
              <p className="text-body-medium text-[#1F1514]">
              Друштвото за управување со отворени и затворени инвестициски фондови ОПФОЛИО ИНВЕСТИЦИИ АД Скопје е основано во 2025 година. Основната главнина на Друштвото изнесува 250.000 евра и е поделена на 1.000 обични акции, секоја со номинална вредност од 250 евра. Мнозински акционер во друштвото е ОПФОЛИО АД Скопје.
              </p>
              <p className="text-body-medium text-[#1F1514]">
              Друштвото ја врши својата дејност врз основа на дозволата за работа издадена од Комисијата за хартии од вредност на Република Македонија (број: УП1 08-113, од 29.05.2025 година).
              </p>
              <p className="text-body-medium text-[#1F1514]">
              Друштвото е запишано во Трговскиот регистар на 10.06.2025 година, со единствен матичен број 7851499. Во рамките на својата дејност, Друштвото ќе управува со два отворени инвестициски фондови. Седиштето се наоѓа на улица &ldquo;Дане Крапчев&rdquo; бр. 21/6 во Скопје.
              </p>
              <p className="text-body-medium text-[#1F1514]">
              Пречистениот текст на Статутот на Друштвото е усвоен на 18.12.2024 година.
              </p>
              <p className="text-body-medium text-[#1F1514]">
              Депозитарна банка на фондовите со кои управува Друштвото ќе е Шпаркасе Банка АД Скопје.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-[50%] h-[100%] z-[1]">
        <Image
          src="./forus-lines.png"
          alt="For us Item"
          fill
          className="object-cover"
        />
      </div>
          </div>
         </div>
        </div>
        </div>
        <div className="mx-auto max-w-[1444px]">
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
                    <span className="text-heading-2 font-bold tracking-0.01 text-black">
                      {item.date}
                    </span>
                  </div>

                  {/* Card - Mobile version */}
                  <div className="w-full bg-white rounded-[20px] p-5 sm:p-6 md:p-10 lg:p-13 shadow-lg">
                    <div className="space-y-5 sm:space-y-6">
                      {/* Image header */}
                      <div className="w-full h-39 sm:h-52 md:h-65 lg:h-[247px] rounded-[20px] relative overflow-hidden">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div 
                            className="w-full h-full rounded-[20px]"
                            style={{ backgroundColor: item.color }}
                          ></div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-heading-3 font-normal tracking-0.01 text-[#1F1514] max-w-[334px]">
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
                        {/* Image header */}
                        <div className="w-full h-[247px] rounded-[20px] relative overflow-hidden">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div 
                              className="w-full h-full rounded-[20px]"
                              style={{ backgroundColor: item.color }}
                            ></div>
                          )}
                        </div>
                        
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

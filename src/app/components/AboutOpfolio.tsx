import React from "react";
/* eslint-disable react/no-unescaped-entities */ 
const AboutOpfolio: React.FC = () => {
  return (
    <section className="bg-[#F3F0E6] py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-5 flex flex-col lg:flex-row items-start lg:items-end gap-8 sm:gap-12 md:gap-16 lg:gap-[95px]">
        <div className="flex-1 min-w-0 lg:min-w-[300px]">
          <h2 className="text-heading-2 text-[#1F1514] mb-6 sm:mb-8 md:mb-10">
            За Опфолио
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-body-medium text-[#1F1514]">
              Друштвото за управување со отворени и затворени инвестициски
              фондови ОПФОЛИО ИНВЕСТИЦИИ АД Скопје е основано во 2025 година.
              Почетниот капитал на Друштвото изнесува 250.000,00 евра, поделен
              на 2.500 обични акции со номинален износ од 1.000,00 евра по
              акција. Мнозински акционер во Друштвото за управување е ОПФОЛИО АД
              Скопје.
            </p>
            <p className="text-body-medium text-[#1F1514]">
              Друштвото работи согласно одобрението за работа издадено од страна
              на Комисијата за хартии од вредност на Република Македонија број
              07-3453/11 од 15.01.2025 година.
            </p>
          </div>
        </div>
        <div className="flex-1 min-w-0 lg:min-w-[300px]">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-body-medium text-[#1F1514]">
              Друштвото е запишано во Трговскиот регистар под матичен број
              6443532 на 15.01.2025 година. Моментално Друштвото управува со два
              (2) отворени инвестициски фондови.
            </p>
            <p className="text-body-medium text-[#1F1514]">
              Седиштето на Друштвото е на ул. "Дане Крапчев" бр. 21/6 во Скопје,
              Република Македонија.
            </p>
            <p className="text-body-medium text-[#1F1514]">
              Пречистениот текст на Статутот на Друштвото е донесен на ден
              12.07.2022 година.
            </p>
            <p className="text-body-medium text-[#1F1514]">
              Депозитарна банка на фондовите со коишто управува Друштвото е
              Шпаркасе Банка АД Скопје.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOpfolio;

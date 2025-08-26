import React from "react";
import Image from "next/image";

const AboutIntro = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden ">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/patterns/pattern-3.svg')] bg-repeat opacity-40" />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-[95px] items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 max-w-full lg:max-w-[614px]">
            <h2 className="text-heading-2 text-[#1F1514]">
              Вредностите кои ги изградивме за вашиот бенeфит
            </h2>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-body-medium text-[#1F1514]">
              Нашата филозофија е едноставна: довербата се докажува преку транспарентност. 
              Овозможуваме постојан увид во вашите вложувања преку онлајн сметка и разбирливи извештаи. 
              На клиентите им ги препорачуваме само оние инвестиции во кои и самите вложуваме, со што нашите интереси се целосно усогласени со вашите.
              </p>
              <p className="text-body-medium text-[#1F1514]">
              Врз основа на вашите цели, нудиме две решенија: вложување во нашите инвестициски фондови за диверзифициран раст или индивидуално управување со портфолио за целосно приспособена стратегија. 
              Во секој случај, ние сме ваш долгорочен партнер, посветен на активно следење и приспособување на инвестициите за да работат ефикасно за вас.
              </p>
              {/* <p className="text-body-medium text-[#1F1514]">
              <Link href="https://wise.com/gb/about/our-story">Wise</Link>
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[50%] h-[100%] z-[1]">
        <Image
          src="./forus-lines.png"
          alt="For us Item"
          fill
          className="object-cover"
        />
      </div>
      {/* Team photo */}
      <div className="absolute right-0 bottom-0 w-[50%] h-[90%] z-[1]">
        <Image
          src="./team-photo.png"
          alt="Theam photo"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default AboutIntro;

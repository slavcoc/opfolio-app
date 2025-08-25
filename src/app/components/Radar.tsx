"use client";


const Radar = () => {
  const categories = [
    "конкурентност",
    "предвидливост",
    "квалитет",
    "раст",
    "вреднување",
  ];

  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 xl:py-24">
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          {/* Image - Left side */}
          <div className="flex-1 relative order-2 lg:order-1 w-full max-w-[500px] lg:max-w-none mx-auto">
            <div className="relative w-full aspect-[4/3]  overflow-hidden">
              {/* Pattern top border */}
              <div
                className="absolute inset-0 "
              />

              {/* Pattern bottom border */}

              {/* Image container with shadow */}
              <div
                className="absolute inset-0  overflow-hidden"
                
              >
                <img
                  src="./raitin-pie.GIF"
                  alt="Opfolio Radar MacBook"
                  className="object-fit p-2"
                />
              </div>
            </div>
          </div>

          {/* Content - Right side */}
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2 w-full max-w-[600px] lg:max-w-none mx-auto">
            <h2 className="text-heading-3 text-[#1F1514] mb-4 sm:mb-5 md:mb-6">
              Опфолио Радар
            </h2>
            <p className="text-body-small text-[#1F1514] mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto lg:mx-0">
              Опфолио Радар е напреден модел создаден за проценка на инвестицискиот рејтинг на компаниите. Овој модел се базира на 125 внимателно одбрани коефициенти, кои се распоредени во шест главни категории:
            </p>
            <ul className="flex flex-col gap-1 sm:gap-2 list-none pl-0">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="text-body-small font-bold text-[#1F1514] flex items-center"
                  style={{ lineHeight: "1.7em" }}
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-[#1F1514] mr-3 "></span>
                  <span className="text-body-small" style={{fontWeight: "600"}}>{category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Radar;

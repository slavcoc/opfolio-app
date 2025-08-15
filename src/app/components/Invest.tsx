"use client";


const Invest = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 xl:py-24 ">
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          {/* Content - Left side */}
          <div className="flex-1 text-center lg:text-left order-1 w-full max-w-[600px] lg:max-w-none mx-auto">
            <h2 className="text-heading-3 text-[#1F1514] mb-4 sm:mb-5 md:mb-6">
              Опфолио Invest
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <p className="text-body-small text-[#1F1514]">
                За оптимална распределба на селектираните акции, го користиме софтверот Опфолио Инвест, кој го развиваме и тестираме веќе 10 години.
              </p>
              <p className="text-body-small text-[#1F1514]">
                Софтверското решение има научна и историска позадина, и ни помага да ја зачуваме вредноста на средствата, особено во време на кризи и големи флуктуации на пазарот на капитал.
              </p>
            </div>
          </div>

          {/* Image - Right side */}
          <div className="flex-1 relative order-2 w-full max-w-[500px] lg:max-w-none mx-auto">
                      
                <img
                  src="./opfolio-invest-pie.GIF"
                  alt="Opfolio Invest MacBook"
                  width={'100%'}
                  height={'100%'}
                  // priority
                />
              
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;

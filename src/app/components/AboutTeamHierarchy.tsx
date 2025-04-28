import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Васко Богатиновски",
    position: "CEO and Founder of Opfolio",
    image: "/images/vasko.jpg",
    linkedin: "https://linkedin.com/in/vasko-bogatinovski",
  },
  {
    name: "Огнен",
    position: "CEO and Founder of Opfolio",
    image: "/images/ognen.jpg",
    linkedin: "https://linkedin.com/in/ognen",
  },
  {
    name: "Игор",
    position: "CEO and Founder of Opfolio",
    image: "/images/igor.jpg",
    linkedin: "https://linkedin.com/in/igor",
  },
  {
    name: "Лазар",
    position: "CEO and Founder of Opfolio",
    image: "/images/lazar.jpg",
    linkedin: "https://linkedin.com/in/lazar",
  },
  {
    name: "Сашко",
    position: "CEO and Founder of Opfolio",
    image: "/images/sashko.jpg",
    linkedin: "https://linkedin.com/in/sashko",
  },
];

const AboutTeamHierarchy: React.FC = () => {
  return (
    <section className="bg-[#F3F0E6] py-8 sm:py-12 md:py-16 lg:py-24 xl:py-36 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="max-w-[1666px] mx-auto">
        <h2 className="font-lora font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] leading-[1.28] text-center text-[#1F1514] mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          Тимот на Opfolio
        </h2>

        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {/* First row - single member */}
          <div className="flex justify-center">
            <div className="w-full max-w-[280px] sm:max-w-[300px]">
              <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                <div className="absolute inset-0 bg-[#DADED5] rounded-full"></div>
                <div
                  className="absolute inset-0 border border-[#F5C322] rounded-full"
                  style={{ borderWidth: "0.91px" }}
                ></div>
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <Image
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-inter font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] leading-none text-black mb-1 sm:mb-2">
                  {teamMembers[0].name}
                </h3>
                <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] leading-[1.6] text-black mb-3 sm:mb-4">
                  {teamMembers[0].position}
                </p>
                {teamMembers[0].linkedin && (
                  <Link
                    href={teamMembers[0].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto bg-white rounded-full flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="#0076B2"
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Second row - two members */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {teamMembers.slice(1, 3).map((member, index) => (
              <div
                key={index}
                className="w-full max-w-[280px] sm:max-w-[300px] mx-auto"
              >
                <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  <div className="absolute inset-0 bg-[#DADED5] rounded-full"></div>
                  <div className="absolute inset-0 border border-[#F5C322] rounded-full"></div>
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-inter font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] leading-none text-black mb-1 sm:mb-2">
                    {member.name}
                  </h3>
                  <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] leading-[1.6] text-black mb-3 sm:mb-4">
                    {member.position}
                  </p>
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto">
                        <svg
                          viewBox="0 0 24 24"
                          fill="#0076B2"
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Third row - three members */}
          <div className="flex flex-col md:flex-row justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {teamMembers.slice(3).map((member, index) => (
              <div
                key={index}
                className="w-full max-w-[280px] sm:max-w-[300px] mx-auto"
              >
                <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  <div className="absolute inset-0 bg-[#DADED5] rounded-full"></div>
                  <div className="absolute inset-0 border border-[#F5C322] rounded-full"></div>
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-inter font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] leading-none text-black mb-1 sm:mb-2">
                    {member.name}
                  </h3>
                  <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] leading-[1.6] text-black mb-3 sm:mb-4">
                    {member.position}
                  </p>
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto">
                        <svg
                          viewBox="0 0 24 24"
                          fill="#0076B2"
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamHierarchy;

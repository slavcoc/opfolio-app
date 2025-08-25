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
    name: "Васко Богдановски",
    position: "CEO and Founder of Opfolio",
    image: "/images/vasko.jpg",
    linkedin: "https://linkedin.com/in/vasko-bogatinovski",
  },
  {
    name: "Васко Богдановски",
    position: "Главен извршен директор",
    image: "/images/Vasko.jpg",
    linkedin: "https://www.linkedin.com/in/vaskobog/",
  },
  {
    name: "Огнен Тилиќ",
    position: "Извршен директор",
    image: "/images/Ognen.jpg",
    linkedin: "https://www.linkedin.com/in/ognen-tilic-a173bb6/",
  },
  {
    name: "Игор Мишевски",
    position: "Претседател на одборот на директори",
    image: "/images/Igor.jpg",
    linkedin: "https://www.linkedin.com/in/mishevski/",
  },
  {
    name: "Сашко Самарџиоски",
    position: "Член на Одборот на директори",
    image: "/images/Sasho.jpg",
    linkedin: "https://www.linkedin.com/in/sasko-samardzioski-0388a7168/",
  },
  {
    name: "Лазар Неданоски",
    position: "Член на Одборот на директори",
    image: "/images/Lazar.jpg",
    linkedin: "https://www.linkedin.com/in/lazarnedanoski/",
  },
];

const AboutTeamHierarchy: React.FC = () => {
  return (
    <section className="bg-[#F3F0E6] py-8 sm:py-12 md:py-16 lg:py-24 xl:py-36 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="max-w-[1666px] mx-auto">
        <h2 className="font-lora font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] leading-[1.28] text-center text-[#1F1514] mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          Тимот на Opfolio
        </h2>

        <div className="flex flex-col gap-[88px]">
          {/* First row - single member */}
          {/* <div className="flex justify-center">
            <div className="w-full max-w-[493px]">
              <TeamMemberCard member={teamMembers[0]} />
            </div>
          </div> */}

          {/* Second row - two members */}
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-[24px]">
            {teamMembers.slice(1, 3).map((member, index) => (
              <div key={index} className="w-full max-w-[493px] mx-auto">
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>

          {/* Third row - three members */}
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-[24px]">
            {teamMembers.slice(3).map((member, index) => (
              <div key={index} className="w-full max-w-[493px] mx-auto">
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="relative h-[439px]">
      {/* Green border box - positioned to not cover the image */}
      <div className="absolute left-0 top-[140px] w-full h-[299px] border-[1px] border-[#5A7D7C] rounded-[12px]" />

      {/* Image section - positioned above the green border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <div className="relative w-[260px] h-[260px]">
          {/* Background circle */}
          <div className="absolute inset-[11.86px] bg-[#DADED5] rounded-full" />
          {/* Border circle */}
          <div
            className="absolute inset-0 rounded-full border border-[#F5C322]"
            style={{ borderWidth: "0.91px" }}
          />
          {/* Image container */}
          <div className="absolute left-[12px] top-[12px] w-[236.28px] h-[236.28px] overflow-hidden rounded-full">
            <div className="relative w-[229px] h-[229px] mt-[7px] ml-[3px]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Member info - positioned inside the green border */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[280px] text-center px-4">
        <h3 className="font-inter font-semibold text-[28px] leading-none text-black mb-[16px]">
          {member.name}
        </h3>
        <p className="font-inter text-[16px] leading-[1.4] text-black mb-[10px] max-w-[380px] mx-auto">
          {member.position}
        </p>
        {member.linkedin && (
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="w-6 h-6 mx-auto bg-white rounded-full flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                width="22.875"
                height="22.875"
                fill="#0076B2"
                className="translate-x-[0.5625px] translate-y-[0.5625px]"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AboutTeamHierarchy;

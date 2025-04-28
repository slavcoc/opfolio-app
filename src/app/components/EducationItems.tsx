import Link from "next/link";

interface EducationCard {
  title: string;
  description: string;
  link: string;
}

const educationCards: EducationCard[] = [
  {
    title: "Акции",
    description:
      "Дознајте што е Македонската берза, како е организирана и која дејност ја има",
    link: "/education/akcii",
  },
  {
    title: "Инвестициски фондови",
    description:
      "Дознајте што е Македонската берза, како е организирана и која дејност ја има",
    link: "/education/investiciski-fondovi",
  },
  {
    title: "Македонска берза",
    description:
      "Дознајте што е Македонската берза, како е организирана и која дејност ја има",
    link: "/education/makedonska-berza",
  },
  {
    title: "Дивиденда",
    description:
      "Дознајте што е Македонската берза, како е организирана и која дејност ја има",
    link: "/education/dividenda",
  },
  {
    title: "Тргување со акции",
    description:
      "Дознајте што е Македонската берза, како е организирана и која дејност ја има",
    link: "/education/trguvanje-so-akcii",
  },
  {
    title: "Обврзници",
    description:
      "Дознајте што е Македонската берза, како е организирана и која дејност ја има",
    link: "/education/obvrznici",
  },
  {
    title: "Хартии од вредност",
    description:
      "Дознајте што е Македонската берза, како е организирана и која дејност ја има",
    link: "/education/hartii-od-vrednost",
  },
  {
    title: "Видови обврзници",
    description:
      "Дознајте што е Македонската берза, како е организирана и која дејност ја има",
    link: "/education/vidovi-obvrznici",
  },
  {
    title: "Берзански индекс",
    description:
      "Дознајте што е Македонската берза, како е организирана и која дејност ја има",
    link: "/education/berzanski-indeks",
  },
  {
    title: "Приход",
    description:
      "Дознајте што е Македонската берза, како е организирана и која дејност ја има",
    link: "/education/prihod",
  },
  {
    title: "Диверзификација",
    description:
      "Дознајте што е Македонската берза, како е организирана и која дејност ја има",
    link: "/education/divverzifikacija",
  },
  {
    title: "Инфлација",
    description:
      "Дознајте што е Македонската берза, како е организирана и која дејност ја има",
    link: "/education/inflacija",
  },
];

export default function EducationItems() {
  return (
    <div className="w-full bg-[#F3F0E6] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationCards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="bg-white rounded-[20px] overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[370px] h-[299px]"
            >
              <div className="p-8 flex flex-col h-full justify-between">
                <h3 className="font-lora text-[32px] leading-[1.375em] text-black">
                  {card.title}
                </h3>

                <div className="flex flex-col gap-6">
                  <p className="font-inter font-light text-lg leading-[1.388em] text-[#1F1514] max-w-[306px]">
                    {card.description}
                  </p>

                  <div className="flex items-center gap-1">
                    <span className="font-inter font-semibold text-sm leading-[1.21em] text-[#1F1514]">
                      Дознај повеќе
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-[-90deg]"
                    >
                      <path
                        d="M12 4L4 12L12 20"
                        stroke="#1F1514"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

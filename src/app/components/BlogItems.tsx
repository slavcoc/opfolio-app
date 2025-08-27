import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../services/blogService";

interface BlogItemsProps {
  items: BlogPost[];
}

const BlogItems: React.FC<BlogItemsProps> = ({ items }) => {
  return (
    <div className="relative w-full bg-[#F3F0E6] py-12 sm:py-16 md:py-24 lg:py-36">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[20px] overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
                <Image
                  src={item.imageUrl || "/blog/blog-1.png"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 sm:p-6 md:p-8 relative">
                <div className="absolute right-0 bottom-0 w-52 h-52">
                  <Image
                    src="/.blog-lines.png"
                    alt="Blog Item"
                    fill
                    className=""
                  />
                </div>

                <div className="flex items-center gap-2 text-[#707A88] text-xs sm:text-sm tracking-wider mb-4 sm:mb-6">
                  <span>{item.date}</span>
                  <span>|</span>
                  <div className="flex items-center gap-1.5 ">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3V8H11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="text-heading-4 text-[#1F1514] mb-4 sm:mb-6">
                  {item.title}
                </h3>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1 text-[#1F1514] text-sm font-semibold font-raleway hover:opacity-80 transition-opacity"
                >
                  Дознај повеќе
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-[-180deg] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  >
                    <path
                      d="M12 4L4 12L12 20"
                      stroke="#1F1514"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogItems;

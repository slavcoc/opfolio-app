"use client";
import React, { useState } from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

interface DocumentItem {
  id: string;
  title: string;
  content: string;
}

interface DocumentItemsProps {
  items: DocumentItem[];
}

const DocumentItems: React.FC<DocumentItemsProps> = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 p-2 sm:p-3 md:p-4 lg:p-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <button
            className="w-full flex items-center justify-between p-2.5 sm:p-3.5 md:p-4 lg:p-5 hover:bg-gray-50 transition-colors"
            onClick={() => toggleItem(item.id)}
          >
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <DocumentTextIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" />
              <span className="text-sm sm:text-base md:text-lg font-medium text-gray-900 line-clamp-2">
                {item.title}
              </span>
            </div>
            <ChevronUpIcon
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600 transition-transform duration-200 ${
                expandedItem === item.id ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>
          {expandedItem === item.id && (
            <div className="px-2.5 sm:px-3.5 md:px-4 lg:px-5 pb-2.5 sm:pb-3.5 md:pb-4 lg:pb-5">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                {item.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DocumentItems;

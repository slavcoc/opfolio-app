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
    <div className="flex flex-col gap-4 p-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl overflow-hidden border border-gray-200"
        >
          <button
            className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
            onClick={() => toggleItem(item.id)}
          >
            <div className="flex items-center gap-4">
              <DocumentTextIcon className="w-6 h-6 text-gray-600" />
              <span className="text-lg font-medium text-gray-900">
                {item.title}
              </span>
            </div>
            <ChevronUpIcon
              className={`w-5 h-5 text-gray-600 transition-transform ${
                expandedItem === item.id ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>
          {expandedItem === item.id && (
            <div className="px-5 pb-5">
              <p className="text-gray-600">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DocumentItems;

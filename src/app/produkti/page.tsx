import React from "react";
import ProductHeader from "@/app/components/ProductHeader";
import Radar from "../components/Radar";
import Invest from "../components/Invest";
import Consultation from "../components/Consultation";

export default function ProductsPage() {
  return (
    <main className="w-full">
      <div className="w-full">
        <ProductHeader />
      </div>
      <div className="w-full">
        <Radar />
        <Invest />
        <Consultation />
      </div>
    </main>
  );
}

import React from "react";
import ProductHeader from "@/components/ProductHeader";
import Radar from "../components/Radar";
import Invest from "../components/Invest";
import Consultation from "../components/Consultation";

export default function ProductsPage() {
  return (
    <main>
      <ProductHeader />
      <Radar />
      <Invest />
      <Consultation />
    </main>
  );
}

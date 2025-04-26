import MainHeader from "./components/MainHeader";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Radar from "./components/Radar";
import Invest from "./components/Invest";
import Ceo from "./components/Ceo";
import Consultation from "./components/Consultation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative w-full overflow-hidden">
        {/* Background gradient container */}
        <div className="absolute inset-0 w-full h-full background: url('/background-gradient.png') lightgray 50% / cover no-repeat;">
          {/* <img
            src="/background-gradient.png"
            alt="Background gradient"
            className="w-full h-full object-cover object-center"
            style={{ height: "76%", opacity: "0.5" }}
          /> */}
        </div>
        {/* Content with gradient background */}
        <div className="relative z-10">
          <MainHeader />
          <Stats />
        </div>
      </div>
      <Products />
      <Radar />
      <Invest />
      {/* Background gradient section */}
      <div className="relative w-full">
        {/* Background gradient container */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/background-gradient-ceo.png"
              alt="Background gradient"
              className="w-full h-full object-cover"
              fill
            />
          </div>
        </div>
        {/* Content with gradient background */}
        <div className="relative z-10">
          <Ceo />
          <Consultation />
        </div>
      </div>
    </main>
  );
}

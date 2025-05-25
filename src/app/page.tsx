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
        <Image
          src="/background-gradient.png"
          alt="Background gradient"
          className="object-cover w-full h-full absolute top-0 right-0 h-full w-full opacity-50"
          fill
        />
        {/* Content with gradient background */}
        <div className="relative z-10">
          <MainHeader />
          <Stats />
        </div>
      </div>
      <div className="w-full">
        <Products />
        <Radar />
        <Invest />
      </div>
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
              priority
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

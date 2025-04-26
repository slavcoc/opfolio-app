import MainHeader from "./components/MainHeader";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Radar from "./components/Radar";
import Invest from "./components/Invest";
import Ceo from "./components/Ceo";
import Consultation from "./components/Consultation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainHeader />
      <Stats />
      <Products />
      <Radar />
      <Invest />
      {/* Background gradient section */}
      <div className="relative w-full">
        {/* Background gradient container */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <img
              src="/background-gradient-ceo.png"
              alt="Background gradient"
              className="w-full h-full object-cover"
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

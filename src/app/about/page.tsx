import React from "react";
import AboutIntro from "@/app/components/AboutIntro";
import AboutMissionAndVision from "@/app/components/AboutMissionAndVision";
import AboutOpfolio from "@/app/components/AboutOpfolio";
import AboutCeo from "@/app/components/AboutCeo";
import AboutTeamHierarchy from "@/app/components/AboutTeamHierarchy";
import AboutDocumentsAndRegulation from "@/app/components/AboutDocumentsAndRegulation";

export const metadata = {
  title: "About Us | Opfolio",
  description:
    "Learn more about Opfolio and our mission to transform the real estate industry.",
};

export default function AboutPage() {
  return (
    <main className="w-full theme-background">
      <div className="w-full">
        <AboutIntro />
      </div>
      <div className="w-full">
        <AboutMissionAndVision />
      </div>
      <div className="w-full">
        <AboutOpfolio />
      </div>
      <div className="w-full">
        <AboutCeo />
      </div>
      <div className="w-full">
        <AboutTeamHierarchy />
      </div>
      <div className="w-full">
        <AboutDocumentsAndRegulation />
      </div>
    </main>
  );
}

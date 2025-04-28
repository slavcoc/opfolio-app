import React from "react";
import AboutIntro from "@/components/AboutIntro";
import AboutMissionAndVision from "@/components/AboutMissionAndVision";
import AboutOpfolio from "@/components/AboutOpfolio";
import AboutCeo from "@/components/AboutCeo";
import AboutTeamHierarchy from "@/components/AboutTeamHierarchy";
import AboutContact from "@/components/AboutContact";
import AboutDocumentsAndRegulation from "@/components/AboutDocumentsAndRegulation";

export const metadata = {
  title: "About Us | Opfolio",
  description:
    "Learn more about Opfolio and our mission to transform the real estate industry.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutIntro />
      <AboutMissionAndVision />
      <AboutOpfolio />
      <AboutCeo />
      <AboutTeamHierarchy />
      <AboutContact />
      <AboutDocumentsAndRegulation />
    </main>
  );
}

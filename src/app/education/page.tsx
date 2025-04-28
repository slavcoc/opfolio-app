import EducationHeader from "@/app/components/EducationHeader";
import EducationItems from "@/app/components/EducationItems";
import Consultation from "../components/Consultation";

export default function EducationPage() {
  return (
    <main className="min-h-screen">
      <EducationHeader />
      <EducationItems />
      <Consultation />
    </main>
  );
}

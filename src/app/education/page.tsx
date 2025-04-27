import EducationHeader from "@/components/education/EducationHeader";
import EducationItems from "@/components/education/EducationItems";
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

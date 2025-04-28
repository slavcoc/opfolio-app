import EducationHeader from "@/app/components/EducationHeader";
import EducationItems from "@/app/components/EducationItems";
import Consultation from "../components/Consultation";

export default function EducationPage() {
  return (
    <main className="min-h-screen w-full">
      <div className="w-full">
        <EducationHeader />
      </div>
      <div className="w-full">
        <EducationItems />
      </div>
      <div className="w-full">
        <Consultation />
      </div>
    </main>
  );
}

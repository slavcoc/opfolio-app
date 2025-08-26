import EducationHeader from "@/app/components/EducationHeader";
import EducationItems from "@/app/components/EducationItems";
import EducationItemsSkeleton from "@/app/components/EducationItemsSkeleton";
import Consultation from "../components/Consultation";
import { Suspense } from "react";

export default function EducationPage() {
  return (
    <main className="min-h-screen w-full">
      <div className="w-full">
        <EducationHeader />
      </div>
      <div className="w-full">
        <Suspense fallback={<EducationItemsSkeleton />}>
          <EducationItems />
        </Suspense>
      </div>
      <div className="w-full">
        <Consultation />
      </div>
    </main>
  );
}

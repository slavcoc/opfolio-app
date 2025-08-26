export default function EducationItemsSkeleton() {
  return (
    <div className="w-full bg-[#F3F0E6] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden w-full h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[299px] animate-pulse"
            >
              <div className="h-full w-full p-4 sm:p-6 md:p-8">
                <div className="h-7 sm:h-8 md:h-9 w-2/3 bg-gray-200 rounded mb-6" />
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



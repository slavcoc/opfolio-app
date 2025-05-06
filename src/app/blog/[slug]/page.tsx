import BlogChildContent from "@/app/components/BlogChildContent";
import BlogChildFeatured from "@/app/components/BlogChildFeatured";
import BlogChildHeader from "@/app/components/BlogChildHeader";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      <BlogChildHeader />
      <BlogChildFeatured />
      <BlogChildContent />
    </div>
  );
}

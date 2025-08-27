import Consultation from "../components/Consultation";
import BlogHeader from "../components/BlogHeader";
import BlogItems from "../components/BlogItems";
import { getAllBlogPosts } from "../services/blogService";

export default async function BlogPage() {
  const data = await getAllBlogPosts();

  return (
    <main className="min-h-screen w-full">
      <div className="w-full">
        <BlogHeader />
      </div>
      <div className="w-full">
        <BlogItems items={data} />
      </div>
      <div className="w-full">
        <Consultation />
      </div>
    </main>
  );
}

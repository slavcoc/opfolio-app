import Consultation from "../components/Consultation";
import BlogHeader from "../components/BlogHeader";
import BlogItems from "../components/BlogItems";

const data = [
  {
    id: "1",
    title: "Македонска берза Македонска берза Македонска берза",
    date: "2024-01-01",
    readTime: "10 мин. за читање",
    imageUrl: "/blog/blog-1.png",
    link: "/blog/blog-1",
  },
  {
    id: "2",
    title: "Македонска берза Македонска берза Македонска берза",
    date: "2024-01-01",
    readTime: "10 мин. за читање",
    imageUrl: "/blog/blog-2.png",
    link: "/blog/blog-2",
  },
  {
    id: "3",
    title: "Македонска берза Македонска берза Македонска берза",
    date: "2024-01-01",
    readTime: "10 мин. за читање",
    imageUrl: "/blog/blog-2.png",
    link: "/blog/blog-2",
  },
  {
    id: "4",
    title: "Македонска берза Македонска берза Македонска берза",
    date: "2024-01-01",
    readTime: "10 мин. за читање",
    imageUrl: "/blog/blog-2.png",
    link: "/blog/blog-2",
  },
];
export default function BlogPage() {
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

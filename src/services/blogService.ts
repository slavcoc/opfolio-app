export interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  imageUrl: string | null;
  link: string;
  content: string | null;
  excerpt: string | null;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface BlogPostsResponse {
  data: BlogPost[];
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `${STRAPI_BASE_URL}/api/blog-posts?sort=date:desc&pagination[pageSize]=100`,
      {
        headers: {
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
    }

    const data: BlogPostsResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `${STRAPI_BASE_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
      {
        headers: {
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blog post: ${response.statusText}`);
    }

    const data: BlogPostsResponse = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
}

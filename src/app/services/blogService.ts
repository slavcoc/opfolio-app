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

// TODO: Add pagination
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!STRAPI_API_TOKEN) {
      console.warn('STRAPI_API_TOKEN not found. Please set a valid API token in your environment variables.');
      throw new Error('API token not configured');
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
    };

    const response = await fetch(
      `${STRAPI_BASE_URL}/api/blog-posts?sort=date:desc&pagination[pageSize]=100`,
      {
        headers,
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('Access forbidden. Please check your API token permissions.');
      } else if (response.status === 401) {
        throw new Error('Unauthorized. Please check your API token.');
      } else {
        throw new Error(`Failed to fetch blog posts: ${response.status} ${response.statusText}`);
      }
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
    if (!STRAPI_API_TOKEN) {
      console.warn('STRAPI_API_TOKEN not found. Please set a valid API token in your environment variables.');
      throw new Error('API token not configured');
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
    };

    const response = await fetch(
      `${STRAPI_BASE_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
      {
        headers,
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('Access forbidden. Please check your API token permissions.');
      } else if (response.status === 401) {
        throw new Error('Unauthorized. Please check your API token.');
      } else {
        throw new Error(`Failed to fetch blog post: ${response.status} ${response.statusText}`);
      }
    }

    const data: BlogPostsResponse = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
}

// Test function to verify the service is working
export async function testBlogService(): Promise<void> {
  try {
    console.log('Testing blog service...');
    console.log('STRAPI_BASE_URL:', STRAPI_BASE_URL);
    console.log('STRAPI_API_TOKEN available:', !!STRAPI_API_TOKEN);
    
    const items = await getAllBlogPosts();
    console.log(`Successfully retrieved ${items.length} blog posts:`);
    items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.title} (${item.date})`);
    });
  } catch (error) {
    console.error('Blog service test failed:', error);
  }
}

export interface EducationItem {
  id: number;
  documentId: string;
  title: string;
  description: string;
  link: string;
  date: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  status: string;
}

export interface EducationItemsResponse {
  data: EducationItem[];
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function getAllEducationItems(): Promise<EducationItem[]> {
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
      `${STRAPI_BASE_URL}/api/education-items?sort=date:desc&pagination[pageSize]=100`,
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
        throw new Error(`Failed to fetch education items: ${response.status} ${response.statusText}`);
      }
    }

    const data: EducationItemsResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching education items:', error);
    throw error;
  }
}

export async function getEducationItemBySlug(slug: string): Promise<EducationItem | null> {
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
      `${STRAPI_BASE_URL}/api/education-items?filters[slug][$eq]=${slug}&populate=*`,
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
        throw new Error(`Failed to fetch education item: ${response.status} ${response.statusText}`);
      }
    }

    const data: EducationItemsResponse = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching education item:', error);
    throw error;
  }
}

// Test function to verify the service is working
export async function testEducationService(): Promise<void> {
  try {
    console.log('Testing education service...');
    console.log('STRAPI_BASE_URL:', STRAPI_BASE_URL);
    console.log('STRAPI_API_TOKEN available:', !!STRAPI_API_TOKEN);
    
    const items = await getAllEducationItems();
    console.log(`Successfully retrieved ${items.length} education items:`);
    items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.title} (${item.date})`);
    });
  } catch (error) {
    console.error('Education service test failed:', error);
  }
}

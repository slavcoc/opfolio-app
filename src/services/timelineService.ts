export interface TimelineItem {
  id: number;
  documentId: string;
  date: string;
  title: string;
  description: string;
  color: string;
  image: string | null;
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  status: string;
}

export interface TimelineItemsResponse {
  data: TimelineItem[];
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function getAllTimelineItems(): Promise<TimelineItem[]> {
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
      `${STRAPI_BASE_URL}/api/timeline-items?sort=order:asc&populate=*`,
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
        throw new Error(`Failed to fetch timeline items: ${response.status} ${response.statusText}`);
      }
    }

    const data: TimelineItemsResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching timeline items:', error);
    throw error;
  }
}

export async function getTimelineItemById(id: number): Promise<TimelineItem | null> {
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
      `${STRAPI_BASE_URL}/api/timeline-items/${id}?populate=*`,
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
        throw new Error(`Failed to fetch timeline item: ${response.status} ${response.statusText}`);
      }
    }

    const data: TimelineItemsResponse = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching timeline item:', error);
    throw error;
  }
}

// Test function to verify the service is working
export async function testTimelineService(): Promise<void> {
  try {
    console.log('Testing timeline service...');
    console.log('STRAPI_BASE_URL:', STRAPI_BASE_URL);
    console.log('STRAPI_API_TOKEN available:', !!STRAPI_API_TOKEN);
    
    const items = await getAllTimelineItems();
    console.log(`Successfully retrieved ${items.length} timeline items:`);
    items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.title} (${item.date})`);
    });
  } catch (error) {
    console.error('Timeline service test failed:', error);
  }
}

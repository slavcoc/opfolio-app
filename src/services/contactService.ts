export interface ContactSubmission {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ContactSubmissionRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface ContactSubmissionResponse {
  data: ContactSubmission;
  meta: {
    message: string;
  };
}

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function submitContactForm(formData: ContactSubmissionRequest): Promise<ContactSubmission> {
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
      `${STRAPI_BASE_URL}/api/contact-submissions`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          data: formData
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('Access forbidden. Please check your API token permissions.');
      } else if (response.status === 401) {
        throw new Error('Unauthorized. Please check your API token.');
      } else {
        const errorText = await response.text();
        throw new Error(`Failed to submit contact form: ${response.status} ${response.statusText} - ${errorText}`);
      }
    }

    const data: ContactSubmissionResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

export async function getAllContactSubmissions(): Promise<ContactSubmission[]> {
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
      `${STRAPI_BASE_URL}/api/contact-submissions?sort=createdAt:desc&pagination[pageSize]=100`,
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
        throw new Error(`Failed to fetch contact submissions: ${response.status} ${response.statusText}`);
      }
    }

    const data: { data: ContactSubmission[] } = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    throw error;
  }
}

export async function getContactSubmissionById(id: string): Promise<ContactSubmission | null> {
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
      `${STRAPI_BASE_URL}/api/contact-submissions/${id}`,
      {
        headers,
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      } else if (response.status === 403) {
        throw new Error('Access forbidden. Please check your API token permissions.');
      } else if (response.status === 401) {
        throw new Error('Unauthorized. Please check your API token.');
      } else {
        throw new Error(`Failed to fetch contact submission: ${response.status} ${response.statusText}`);
      }
    }

    const data: ContactSubmissionResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching contact submission:', error);
    throw error;
  }
}

// Test function to verify the service is working
export async function testContactService(): Promise<void> {
  try {
    console.log('Testing contact service...');
    console.log('STRAPI_BASE_URL:', STRAPI_BASE_URL);
    console.log('STRAPI_API_TOKEN available:', !!STRAPI_API_TOKEN);
    
    const submissions = await getAllContactSubmissions();
    console.log(`Successfully retrieved ${submissions.length} contact submissions:`);
    submissions.forEach((submission, index) => {
      console.log(`${index + 1}. ${submission.firstName} ${submission.lastName} (${submission.email}) - ${submission.createdAt}`);
    });
  } catch (error) {
    console.error('Contact service test failed:', error);
  }
}

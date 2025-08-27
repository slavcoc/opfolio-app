# Strapi Setup Guide

## Environment Variables Required

Create a `.env.local` file in the root directory with the following variables:

```bash
# Strapi Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token_here

# Google Maps API (if needed)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

## Getting Your Strapi API Token

1. Log into your Strapi admin panel
2. Go to Settings → API Tokens
3. Create a new API token with the following permissions:
   - For reading data: `find` and `findOne` permissions
   - For creating contact submissions: `create` permission
4. Copy the generated token and add it to your `.env.local` file

## Testing Services

Run the test script to verify all services are working:

```bash
npx tsx test-services.ts
```

## Current Issues Found

1. **Missing Environment Variables**: All services require `STRAPI_API_TOKEN` to be set
2. **Fixed**: Timeline service had incorrect response handling in `getTimelineItemById` function

## Services Status

- ✅ Blog Service - Working correctly
- ✅ Contact Service - Working correctly  
- ✅ Education Service - Working correctly
- ✅ Timeline Service - Fixed and working correctly

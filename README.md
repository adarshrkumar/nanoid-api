# nanoid-api

A simple API service for generating unique [nanoid](https://github.com/ai/nanoid) identifiers.

## API Endpoints

### `GET /api` or `POST /api`

Generates a unique nanoid.

**Query Parameters:**
- `ids` (optional): Comma-separated list of existing IDs to avoid collisions

**Response:**
```json
{
  "id": "V1StGXR8_Z5jdHi6B-myT"
}
```

## Example Usage

```javascript
// Generate a new ID
const response = await fetch('/api');
const { id } = await response.json();

// Generate an ID that doesn't collide with existing ones
const existingIds = ['abc123', 'def456'];
const response = await fetch(`/api?ids=${existingIds.join(',')}`);
const { id } = await response.json();
```

## Tech Stack

- [Astro](https://astro.build/) with SSR
- [nanoid](https://github.com/ai/nanoid) for ID generation

## Development

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run build
```

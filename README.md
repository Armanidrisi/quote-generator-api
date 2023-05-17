[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Armanidrisi/quote-generator-api/blob/master/LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Armanidrisi/quote-generator-api/releases)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/Armanidrisi/quote-generator-api/issues)
[![Docs](https://img.shields.io/badge/DOCS-red.svg)](https://armanidrisi.github.io/quote-generator-api/)

### &#8627; Stargazers

[![Stargazers repo roster for @Armanidrisi/quote-generator-api](https://reporoster.com/stars/Armanidrisi/quote-generator-api)](https://github.com/Armanidrisi/quote-generator-api/stargazers)

# Quote Generator API

The Quote Generator API provides endpoints to retrieve quotes from various categories. It allows you to get multiple quotes with a limit, a random quote, and a random quote by category.

## Base URL

The base URL for the API is `https://quote-generator-api-six.vercel.app`.

## Authentication

No authentication is required to access the endpoints of this API.

## Endpoints

### Get Multiple Quotes

Retrieves multiple quotes with a specified limit.

```
GET /api/quotes/?limit=<limit>
```

**Parameters:**

- `limit` (optional): The maximum number of quotes to retrieve. If not provided, the default limit is applied.

**Response:**

- `200 OK`: Returns JSON response with an array of quotes, status, and total count.

### Get a Random Quote

Retrieves a random quote.

```
GET /api/quotes/random
```

**Response:**

- `200 OK`: Returns a single random quote with status.

### Get Random Quote by Category

Retrieves a random quote from a specific category.

```
GET /api/quotes/random?category=<category name>
```

**Parameters:**

- `category` (optional): The name of the category from which to retrieve a random quote. If not provided, a random quote from any category will be returned.

**Response:**

- `200 OK`: Returns JSON response with a random quote, category, and status from the specified category. If no category is provided, a random quote from any category is returned.

### Example Usage

#### Get Multiple Quotes

**Request:**

```
GET /api/quotes/?limit=5
```

**Response:**

```json
{
  "status": true,
  "data": [
    {
      "quote": "The only way to do great work is to love what you do.",
      "category": "Motivation"
    },
    {
      "quote": "Innovation distinguishes between a leader and a follower.",
      "category": "Innovation"
    },
    {
      "quote": "Your time is limited, don't waste it living someone else's life.",
      "category": "Life"
    },
    {
      "quote": "Stay hungry, stay foolish.",
      "category": "Motivation"
    },
    {
      "quote": "The best way to predict the future is to create it.",
      "category": "Innovation"
    }
  ],
  "total": 5
}
```

#### Get a Random Quote

**Request:**

```
GET /api/quotes/random
```

**Response:**

```json
{
  "status": true,
  "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "category": "Inspiration"
}
```

#### Get Random Quote by Category

**Request:**

```
GET /api/quotes/random?category=Motivation
```

**Response:**

```json
{
  "status": true,
  "quote": "The only way to do great work is to love what you do.",
  "category": "Motivation"
}
```

If no category is provided in the request, a random quote from any category will be returned.

## Error Handling

- `400 Bad Request`: Returned when a category is not found or an invalid request is made.
- `500 Internal Server Error`: Returned when an unexpected error occurs on the server.

## Rate Limiting

The API does not impose any rate limiting restrictions at the moment. You can make requests to the API freely without any rate limitations.

## Conclusion

The Quote Generator API provides a convenient way to retrieve quotes from various categories. Whether you need multiple quotes with a limit, a random quote, or a random quote from a specific category, this API has you covered. Feel free to integrate these endpoints into your applications or services to enrich your content with inspiring and motivational quotes.

If you have any further questions or need assistance, please don't hesitate to contact our support team at idrisiarman19@gmail.com!

## Contributing 🤝

We welcome contributions to the quote generator API! If you would like to contribute, please follow these steps:

1. Fork this repository.
2. Make your changes in a new branch.
3. Submit a pull request.

---
---

# Templates

### Templates Endpoint

#### Get List of Templates

```http
GET /templates
```

Retrieves a list of templates.

- **Parameters**:

  - `filetype` (optional): The type of file to retrieve, either `html` or `json`.

- **Example Request**:

  ```sh
  curl -X GET https://api.example.com/v1/templates?filetype=html \
    -H "X-Api-Key: YOUR_API_KEY" \
    -H "X-Client-Token: YOUR_CLIENT_TOKEN" \
  ```

- **Example Response**:
  ```json
  {
    "count": 2,
    "list": ["main_v1.html", "main_v1.schema.json"]
  }
  ```

---

#### Create a Template

```http
POST /upload_template
```

Creates a new template file or replaces an existing one.

- **Parameters**:

  - `templateName` (required): The name of the template.
  - `templateFile` (required): The file to upload.
  - `validationSchema` (required): The schema to validate the data.

- **Example Request**:

  ```sh
  curl -X POST https://api.example.com/v1/upload_template \
    -H "X-Api-Key: YOUR_API_KEY" \
    -H "X-Client-Token: YOUR_CLIENT_TOKEN" \
    -H "Content-Type: multipart/form-data" \
    -F "templateName=main_v1" \
    -F "templateFile=@main_v1.html" \
    -F "validationSchema=@main_v1.schema.json"
  ```

- **Example Response**:
  ```json
  {
    "message": "Template uploaded successfully"
  }
  ```

---

### Error Handling

Errors are returned using standard HTTP status codes.

- **Example Error Response**:

  ```json
  {
    "error": {
      "message": "Invalid parameters",
      "type": "invalid_request_error",
      "status": 400
    }
  }
  ```

- **Common Errors**:
  - `400 Bad Request`: The request was unacceptable, often due to missing a required parameter.
  - `401 Unauthorized`: No valid API key provided.
  - `404 Not Found`: The requested resource doesn't exist.
  - `500 Internal Server Error`: Something went wrong on the server.

---

### Rate Limiting

All API requests are subject to rate limits. The rate limit is `1000` requests per hour.

- **Rate Limit Headers**:

  - `X-RateLimit-Limit`: The maximum number of requests per hour.
  - `X-RateLimit-Remaining`: The number of requests remaining in the current hour.
  - `X-RateLimit-Reset`: The time at which the current rate limit window resets in UTC epoch seconds.

- **Example Rate Limit Headers**:
  ```http
  X-RateLimit-Limit: 1000
  X-RateLimit-Remaining: 999
  X-RateLimit-Reset: 1609459200
  ```

---

This structure provides a clear and concise presentation of the API endpoints, similar to Stripe's documentation style. Each endpoint is clearly defined with example requests and responses, and additional sections like error handling and rate limiting are included to offer a complete guide for users.

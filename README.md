# 🛋️ Schair Data API

A serverless API for the Schair e-commerce project, built with Vercel Functions.

## 🚀 Features

- **Serverless API** - Built with Vercel Functions
- **CORS Enabled** - Accessible from any origin
- **Error Handling** - Comprehensive error responses
- **Type Safety** - Proper HTTP method validation
- **Performance** - Fast response times with Vercel's edge network

## 📡 API Endpoints

### Get All Items

```
GET /api/items
```

Returns all products from the catalog.

**Response:**

```json
[
  {
    "id": 1,
    "name": "Product Name",
    "price": 99.99,
    "image": "image-url.png",
    "colors": ["red", "blue"],
    "description": "Product description"
  }
]
```

### Get Item by ID

```
GET /api/items/[id]
```

Returns a specific product by its ID.

**Response:**

```json
{
  "id": 1,
  "name": "Product Name",
  "price": 99.99,
  "image": "image-url.png",
  "colors": ["red", "blue"],
  "description": "Product description"
}
```

### Get All Services

```
GET /api/services
```

Returns all available services.

**Response:**

```json
[
  {
    "id": 1,
    "name": "Service Name",
    "description": "Service description"
  }
]
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- Vercel CLI

### Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Or use Vercel CLI directly
vercel dev
```

### Deploy to Production

```bash
# Deploy to Vercel
npm run deploy

# Or use Vercel CLI
vercel --prod
```

## 📁 Project Structure

```
data-api-repo/
├── api/
│   ├── items/
│   │   ├── index.js          # GET /api/items
│   │   └── [id].js           # GET /api/items/[id]
│   └── services/
│       └── index.js          # GET /api/services
├── data.json                 # Data source
├── package.json              # Dependencies & scripts
├── vercel.json              # Vercel configuration
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🔧 Configuration

### Vercel Configuration (`vercel.json`)

- **Version 3** - Latest Vercel configuration
- **Node.js 18.x** runtime for all functions
- **Automatic routing** for API endpoints

### Package Configuration

- **Minimal dependencies** for fast deployment
- **Vercel CLI** for development and deployment
- **Node.js 18+** engine requirement

## 🌐 CORS

All endpoints support CORS and are accessible from any origin:

- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type`

## 📊 Error Handling

The API provides detailed error responses:

### 400 Bad Request

```json
{
  "error": "Item ID is required",
  "message": "Please provide a valid item ID"
}
```

### 404 Not Found

```json
{
  "error": "Item not found",
  "message": "No item found with ID: 999",
  "availableIds": [1, 2, 3, 4, 5, 6, 7, 8]
}
```

### 405 Method Not Allowed

```json
{
  "error": "Method POST Not Allowed",
  "allowedMethods": ["GET", "OPTIONS"]
}
```

### 500 Internal Server Error

```json
{
  "error": "Failed to fetch items",
  "message": "Error details"
}
```

## 🚀 Deployment Steps

1. **Create GitHub Repository**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/schair-data-api.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

3. **Get Your API URL**
   - After deployment, you'll get a URL like:
   - `https://schair-data-api-xyz.vercel.app`

4. **Update Your Vue Project**
   - Replace local API calls with your Vercel URL
   - Example: `https://schair-data-api-xyz.vercel.app/api/items`

## 🔗 Integration with Vue Project

After deployment, update your Vue components:

```javascript
// Before (local)
fetch('http://localhost:4000/items')

// After (Vercel)
fetch('https://your-api-url.vercel.app/api/items')
```

## 📝 License

MIT License - feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Built with ❤️ for Schair E-commerce**

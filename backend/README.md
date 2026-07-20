# Portfolio Backend API

Node.js और Express के साथ बनाया गया RESTful API

## Quick Start

```bash
# Dependencies install करें
npm install

# .env file बनाएं
cp .env.example .env

# MongoDB URI configure करें .env में

# Server start करें (Development)
npm run dev

# Server start करें (Production)
npm start

# Sample data add करें
npm run seed
```

## API Documentation

### Health Check
```
GET /api/health
```

### Projects API

#### सभी Projects
```
GET /api/projects
```

#### Featured Projects
```
GET /api/projects?featured=true
```

#### Category के base पर
```
GET /api/projects?category=web
```

#### Single Project
```
GET /api/projects/:id
```

#### नया Project (Admin)
```
POST /api/projects
Content-Type: application/json

{
  "title": "Project Title",
  "description": "Project Description",
  "image": "https://example.com/image.jpg",
  "technologies": ["React", "Node.js"],
  "liveUrl": "https://example.com",
  "githubUrl": "https://github.com/user/repo",
  "featured": true,
  "category": "web"
}
```

### Contact API

#### Message Send करें
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a project..."
}
```

#### सभी Messages (Admin)
```
GET /api/contact
```

#### Single Message
```
GET /api/contact/:id
```

## Environment Variables

```env
MONGO_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## Scripts

- `npm start` - Production mode में server start करें
- `npm run dev` - Development mode (nodemon के साथ)
- `npm run seed` - Sample projects database में add करें

## Models

### Project Model
```javascript
{
  title: String (required),
  description: String (required),
  image: String,
  technologies: [String],
  liveUrl: String,
  githubUrl: String,
  featured: Boolean,
  category: String (web/mobile/desktop/other),
  createdAt: Date,
  updatedAt: Date
}
```

### Message Model
```javascript
{
  name: String (required, 2-50 chars),
  email: String (required, valid email),
  subject: String (max 100 chars),
  message: String (required, 10-1000 chars),
  status: String (new/read/replied),
  createdAt: Date,
  updatedAt: Date
}
```

## Error Handling

API सभी errors के लिए consistent format return करता है:

```json
{
  "success": false,
  "message": "Error description"
}
```

## CORS Configuration

Frontend से requests accept करने के लिए CORS enabled है. FRONTEND_URL को `.env` में configure करें.

# Full Stack Portfolio Website

एक modern और professional portfolio website जो React frontend और Node.js/Express backend के साथ बनाया गया है।

## 🚀 Features

### Frontend (React)
- ⚛️ React 18 with Vite
- 🎨 Modern और responsive UI/UX design
- 🎭 Smooth animations और transitions
- 📱 Mobile-first approach
- 🔄 Dynamic routing with React Router
- 🌐 API integration with Axios

### Backend (Node.js + Express)
- 🔥 RESTful API
- 🗄️ MongoDB database
- ✅ Data validation
- 🔒 CORS enabled
- 📧 Contact form functionality
- 📊 Project management

## 📋 Prerequisites

Install करने से पहले ये ensure करें कि आपके system में ये installed हैं:

- Node.js (v16 या higher)
- MongoDB (v4 या higher)
- npm या yarn package manager

## 🛠️ Installation & Setup

### 1. Repository Clone करें

```bash
git clone <repository-url>
cd fullstack-portfolio
```

### 2. Backend Setup

```bash
# Backend directory में जाएं
cd backend

# Dependencies install करें
npm install

# .env file बनाएं
cp .env.example .env

# .env file को edit करें और अपनी MongoDB URI add करें
# MONGO_URI=mongodb://localhost:27017/portfolio
```

### 3. Frontend Setup

```bash
# Frontend directory में जाएं
cd ../frontend

# Dependencies install करें
npm install

# .env file बनाएं (optional)
# Frontend के लिए environment variables
```

### 4. MongoDB Setup

#### Option A: Local MongoDB
```bash
# MongoDB को start करें
mongod

# या MongoDB service को start करें
sudo systemctl start mongod
```

#### Option B: MongoDB Atlas (Cloud)
1. MongoDB Atlas पर account बनाएं: https://www.mongodb.com/cloud/atlas
2. Cluster create करें
3. Connection string को copy करें
4. Backend के `.env` file में paste करें

### 5. Sample Data Add करें (Optional)

```bash
# Backend directory में
cd backend

# Sample projects add करने के लिए seeder run करें
npm run seed
```

## 🚀 Running the Application

### Development Mode

#### Terminal 1 - Backend को start करें:
```bash
cd backend
npm run dev
# Backend will run on http://localhost:5000
```

#### Terminal 2 - Frontend को start करें:
```bash
cd frontend
npm run dev
# Frontend will run on http://localhost:5173
```

### Production Build

#### Frontend Build:
```bash
cd frontend
npm run build
# Build files will be in the 'dist' folder
```

#### Backend Production:
```bash
cd backend
npm start
```

## 📁 Project Structure

```
fullstack-portfolio/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── models/
│   │   ├── Message.js         # Contact message model
│   │   └── Project.js         # Project model
│   ├── routes/
│   │   ├── contactRoute.js    # Contact endpoints
│   │   └── projectRoute.js    # Project endpoints
│   ├── seeders/
│   │   └── projectSeeder.js   # Sample data seeder
│   ├── .env.example           # Environment variables template
│   ├── package.json
│   └── server.js              # Main server file
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Navbar.css
    │   │   ├── Footer.jsx
    │   │   └── Footer.css
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Home.css
    │   │   ├── Projects.jsx
    │   │   ├── Projects.css
    │   │   ├── Contact.jsx
    │   │   ├── Contact.css
    │   │   ├── ProjectDetail.jsx
    │   │   └── ProjectDetail.css
    │   ├── services/
    │   │   └── api.js           # API service
    │   ├── styles/
    │   │   └── index.css        # Global styles
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🔌 API Endpoints

### Projects
- `GET /api/projects` - सभी projects get करें
- `GET /api/projects?category=web` - Category के base पर filter करें
- `GET /api/projects?featured=true` - Featured projects get करें
- `GET /api/projects/:id` - Single project get करें
- `POST /api/projects` - नया project create करें

### Contact
- `POST /api/contact` - नया message send करें
- `GET /api/contact` - सभी messages get करें (Admin)
- `GET /api/contact/:id` - Single message get करें

## 🎨 Customization

### Colors और Theme बदलना:
`frontend/src/styles/index.css` file को edit करें:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* अपने colors add करें */
}
```

### Personal Information Update करें:
- `frontend/src/pages/Home.jsx` - Hero section में अपना naam और details
- `frontend/src/pages/Contact.jsx` - Contact information
- `frontend/src/components/Footer.jsx` - Social media links

## 📦 Dependencies

### Backend
- express - Web framework
- mongoose - MongoDB ODM
- cors - Cross-Origin Resource Sharing
- dotenv - Environment variables
- validator - Data validation

### Frontend
- react - UI library
- react-router-dom - Routing
- axios - HTTP client
- vite - Build tool

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Check MongoDB is running
sudo systemctl status mongod

# या MongoDB को manually start करें
mongod
```

### Port Already in Use
```bash
# Backend port change करने के लिए .env file में PORT update करें
# Frontend port change करने के लिए vite.config.js edit करें
```

### CORS Error
Backend के `server.js` में CORS configuration check करें

## 📝 Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env.local - optional)
```
VITE_API_URL=http://localhost:5000/api
```

## 🤝 Contributing

1. Fork करें repository
2. अपना feature branch बनाएं (`git checkout -b feature/AmazingFeature`)
3. अपने changes commit करें (`git commit -m 'Add some AmazingFeature'`)
4. Branch को push करें (`git push origin feature/AmazingFeature`)
5. Pull Request खोलें

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- React Documentation
- MongoDB Documentation
- Express.js Documentation
- Vite Documentation

---

बनाया गया ❤️ के साथ

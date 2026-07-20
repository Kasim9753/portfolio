# 🚀 Quick Start Guide - Portfolio Website

## Step-by-Step Setup (Hindi)

### 📥 Step 1: Files Download Karein
Sabse pehle `fullstack-portfolio` folder download kar lein.

### 🔧 Step 2: Prerequisites Check Karein

Ye install hona chahiye:
- **Node.js** (v16 ya upar) - https://nodejs.org
- **MongoDB** (v4 ya upar) - https://www.mongodb.com/try/download/community

Check karne ke liye terminal mein:
```bash
node --version
npm --version
mongod --version
```

### 🗄️ Step 3: MongoDB Start Karein

**Option A - Local MongoDB:**
```bash
# Windows
net start MongoDB

# Mac/Linux
sudo systemctl start mongod
# ya
mongod
```

**Option B - MongoDB Atlas (Cloud - Recommended):**
1. https://www.mongodb.com/cloud/atlas par jaakar free account banayein
2. Cluster create karein (M0 Free tier)
3. Database User banayein
4. Network Access mein "0.0.0.0/0" allow karein
5. Connection string copy karein

### 💾 Step 4: Backend Setup

Terminal 1 mein:
```bash
# Backend folder mein jaayein
cd fullstack-portfolio/backend

# Dependencies install karein
npm install

# .env file banayein
copy .env.example .env          # Windows
# ya
cp .env.example .env            # Mac/Linux

# .env file edit karein aur MongoDB URI add karein
# Notepad/VS Code mein .env file kholen aur edit karein:
# MONGO_URI=mongodb://localhost:27017/portfolio
# ya MongoDB Atlas ka connection string

# Sample projects add karein (Optional)
npm run seed

# Backend start karein
npm run dev
```

✅ Backend ab chal raha hai: http://localhost:5000

### 🎨 Step 5: Frontend Setup

Terminal 2 mein (naya terminal kholen):
```bash
# Frontend folder mein jaayein
cd fullstack-portfolio/frontend

# Dependencies install karein
npm install

# Frontend start karein
npm run dev
```

✅ Frontend ab chal raha hai: http://localhost:5173

### 🌐 Step 6: Browser Mein Kholein

Apne browser mein jaayein: **http://localhost:5173**

Aapka portfolio website ab chal raha hai! 🎉

---

## 🎯 Customize Karein

### 1. Apni Information Add Karein

**Home Page (`frontend/src/pages/Home.jsx`):**
```javascript
// Line 23 ke aas-paas
<h1 className="hero-title">
  Hi, I'm <span className="gradient-text">Apna Naam</span>
</h1>
```

**Contact Page (`frontend/src/pages/Contact.jsx`):**
```javascript
// Lines 65-85 ke aas-paas
<p>your.email@example.com</p>  // Apna email
<p>+91 1234567890</p>          // Apna phone
<p>Your City, India</p>        // Apni location
```

### 2. Colors Change Karein

**`frontend/src/styles/index.css` mein:**
```css
:root {
  --primary-color: #6366f1;      /* Apna primary color */
  --secondary-color: #8b5cf6;    /* Apna secondary color */
}
```

### 3. Social Media Links Update Karein

**Footer (`frontend/src/components/Footer.jsx`):**
```javascript
// Lines 23-35 ke aas-paas
<a href="https://github.com/apka-username">GitHub</a>
<a href="https://linkedin.com/in/apka-profile">LinkedIn</a>
```

---

## 📝 Projects Add Karein

### Option 1: Seeder Se (Recommended for Testing)
```bash
cd backend
npm run seed
```

### Option 2: Manually Database Mein
MongoDB Compass ya Atlas dashboard use karein aur projects collection mein documents add karein.

### Option 3: API Se (Future - Admin Panel)
POST request send karein `/api/projects` endpoint par.

---

## 🚨 Common Problems aur Solutions

### Problem 1: "Cannot connect to MongoDB"
**Solution:**
- Check karein MongoDB chal raha hai: `mongod` command run karein
- .env file mein sahi connection string hai check karein
- MongoDB Atlas use kar rahe hain to IP whitelist check karein

### Problem 2: "Port 5000 already in use"
**Solution:**
```bash
# .env file mein port change karein
PORT=5001
```

### Problem 3: "npm install" mein error
**Solution:**
```bash
# Node modules delete karke phir se install karein
rm -rf node_modules package-lock.json
npm install
```

### Problem 4: Frontend backend se connect nahi ho raha
**Solution:**
- Backend chal raha hai check karein (http://localhost:5000)
- CORS error hai to backend/server.js mein CORS config check karein

---

## 📚 Next Steps

1. **Content Customize Karein**: Apni personal information add karein
2. **Projects Add Karein**: Apne real projects database mein add karein
3. **Images Update Karein**: Project images ko better ones se replace karein
4. **Deploy Karein**: `DEPLOYMENT.md` file dekhen production deployment ke liye

---

## 🆘 Help Chahiye?

- **README.md** - Complete documentation
- **DEPLOYMENT.md** - Deployment guide
- **backend/README.md** - Backend API documentation
- **frontend/README.md** - Frontend documentation

---

## ✅ Final Checklist

- [ ] MongoDB chal raha hai
- [ ] Backend chal raha hai (http://localhost:5000)
- [ ] Frontend chal raha hai (http://localhost:5173)
- [ ] Sample data database mein hai
- [ ] Website browser mein dikh raha hai
- [ ] Contact form kaam kar raha hai
- [ ] Projects page par projects dikh rahe hain

---

**Happy Coding! 🎉**

Agar koi problem aaye to error message carefully padhen aur Google par search karein.

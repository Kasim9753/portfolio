# Deployment Guide

Apne Full Stack Portfolio को production में deploy karne ka complete guide

## 🚀 Deployment Options

### Option 1: Frontend (Vercel) + Backend (Render/Railway)

#### Frontend - Vercel पर Deploy करें

1. **Vercel Account बनाएं**: https://vercel.com

2. **GitHub से Repository Connect करें**:
   ```bash
   # Repository को GitHub पर push करें
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

3. **Vercel Dashboard में**:
   - "New Project" click करें
   - अपनी repository select करें
   - Build settings:
     ```
     Framework Preset: Vite
     Root Directory: frontend
     Build Command: npm run build
     Output Directory: dist
     ```
   - Environment Variables add करें:
     ```
     VITE_API_URL=<your-backend-url>/api
     ```

4. Deploy button click करें

#### Backend - Render पर Deploy करें

1. **Render Account बनाएं**: https://render.com

2. **New Web Service बनाएं**:
   - अपनी repository connect करें
   - Settings:
     ```
     Name: portfolio-backend
     Root Directory: backend
     Environment: Node
     Build Command: npm install
     Start Command: npm start
     ```

3. **Environment Variables add करें**:
   ```
   MONGO_URI=<your-mongodb-atlas-uri>
   PORT=5000
   NODE_ENV=production
   FRONTEND_URL=<your-vercel-url>
   ```

4. Deploy button click करें

---

### Option 2: Frontend (Netlify) + Backend (Railway)

#### Frontend - Netlify

1. **Netlify Account**: https://netlify.com

2. **Deploy Settings**:
   ```
   Base directory: frontend
   Build command: npm run build
   Publish directory: frontend/dist
   ```

3. **Environment Variables**:
   ```
   VITE_API_URL=<your-backend-url>/api
   ```

#### Backend - Railway

1. **Railway Account**: https://railway.app

2. **New Project से**:
   - GitHub repository connect करें
   - Root directory: `backend`
   - Start command: `npm start`

3. **Environment Variables**:
   ```
   MONGO_URI=<mongodb-uri>
   PORT=5000
   NODE_ENV=production
   FRONTEND_URL=<netlify-url>
   ```

---

### Option 3: Full Stack on Single Platform (Render)

1. **Frontend Web Service**:
   ```
   Root: frontend
   Build: npm install && npm run build
   Start: npx serve dist -s
   ```

2. **Backend Web Service**:
   ```
   Root: backend
   Build: npm install
   Start: npm start
   ```

---

## 🗄️ MongoDB Atlas Setup

1. **Account बनाएं**: https://mongodb.com/cloud/atlas

2. **Cluster Create करें**:
   - Free tier (M0) select करें
   - Region choose करें
   - Cluster name दें

3. **Database User बनाएं**:
   - Database Access → Add New User
   - Username और strong password set करें
   - Built-in Role: "Read and write to any database"

4. **Network Access Configure करें**:
   - Network Access → Add IP Address
   - "Allow Access from Anywhere" (0.0.0.0/0) select करें
   - या specific IPs add करें

5. **Connection String Copy करें**:
   - Clusters → Connect → Connect your application
   - Connection string copy करें:
     ```
     mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
     ```
   - `<password>` को अपने actual password से replace करें

---

## 🔧 Pre-Deployment Checklist

### Backend
- [ ] `.env.example` file है और updated है
- [ ] MongoDB Atlas URI configured है
- [ ] CORS में production URL add है
- [ ] Error handling properly implemented है
- [ ] API endpoints test किए हैं

### Frontend
- [ ] API URL environment variable में है
- [ ] All images और assets accessible हैं
- [ ] Mobile responsiveness test की है
- [ ] Browser compatibility check की है
- [ ] Console में errors नहीं हैं

### General
- [ ] Git repository clean है
- [ ] `node_modules` .gitignore में है
- [ ] `.env` files .gitignore में हैं
- [ ] README updated है
- [ ] All dependencies updated हैं

---

## 🐛 Common Deployment Issues

### CORS Error
**Problem**: Frontend backend से connect नहीं हो रहा

**Solution**:
```javascript
// backend/server.js में
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true
}));
```

### MongoDB Connection Failed
**Problem**: Database connect नहीं हो रहा

**Solution**:
- MongoDB Atlas में IP whitelist check करें
- Connection string में password special characters encode करें
- Network access "Allow from anywhere" है check करें

### Build Failed
**Problem**: Frontend build fail हो रही है

**Solution**:
```bash
# Local में build test करें
npm run build

# Dependencies clear करके फिर से install करें
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Not Working
**Problem**: Environment variables load नहीं हो रहे

**Solution**:
- Deployment platform में variables properly set हैं check करें
- Variable names sahi हैं verify करें
- Redeploy करें after adding variables

---

## 📊 Post-Deployment

### Monitor Your Application

1. **Logs Check करें**:
   - Backend logs में errors check करें
   - Frontend console errors monitor करें

2. **Performance**:
   - Google Lighthouse test run करें
   - Loading times check करें

3. **Functionality Test**:
   - सभी pages visit करें
   - Contact form test करें
   - Project filtering test करें

### Custom Domain Setup

#### Vercel
1. Settings → Domains
2. अपना domain add करें
3. DNS records update करें

#### Netlify
1. Domain settings
2. Custom domain add करें
3. DNS configure करें

---

## 🔒 Security Best Practices

1. **Environment Variables**:
   - कभी भी secrets commit न करें
   - Strong passwords use करें
   - Regular rotation करें

2. **MongoDB**:
   - Strong credentials use करें
   - Network access restrict करें
   - Regular backups लें

3. **API**:
   - Rate limiting implement करें (future)
   - Input validation करें
   - HTTPS use करें

---

## 📈 Scaling Tips

1. **Database**:
   - MongoDB Atlas में higher tier upgrade करें
   - Indexes add करें slow queries के लिए

2. **Backend**:
   - Caching implement करें
   - Load balancing consider करें
   - CDN use करें static assets के लिए

3. **Frontend**:
   - Image optimization करें
   - Code splitting implement करें
   - Lazy loading use करें

---

## 🆘 Support

अगर deployment में कोई problem आए:

1. Platform-specific documentation check करें
2. Error logs carefully read करें
3. Stack Overflow पर search करें
4. GitHub Issues check करें

---

Happy Deploying! 🚀

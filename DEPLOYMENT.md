# Deployment Guide

## GitHub Pages (Recommended - Easiest & Free)

### Setup Steps:

1. **Create GitHub Repository**
   ```bash
   cd gantt-chart-generator
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gantt-chart-generator.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/gantt-chart-generator/`

3. **Done!** ✅
   - No build process needed
   - Updates automatically when you push changes
   - Free SSL certificate included

---

## Netlify (Alternative - Also Free)

### Option 1: Drag & Drop
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your `gantt-chart-generator` folder onto the page
3. Done! You get a live URL instantly

### Option 2: GitHub Integration
1. Push your code to GitHub (see steps above)
2. Go to [netlify.com](https://www.netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Deploy settings:
   - **Build command:** (leave empty)
   - **Publish directory:** (leave empty or use `/`)
6. Click "Deploy site"

---

## Vercel (Alternative - Also Free)

### Setup:
```bash
# Install Vercel CLI (requires Node.js)
npm i -g vercel

# Deploy
cd gantt-chart-generator
vercel
```

Follow the prompts, and you'll get a live URL.

### Or Use Vercel Dashboard:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click "Deploy"

---

## Railway (Not Needed for This Project)

**Note:** Railway is designed for backend applications with servers. Since this is a **static HTML/CSS/JS project**, you don't need Railway.

However, if you insist on using Railway for learning purposes:

1. Create `railway.json`:
   ```json
   {
     "build": {
       "builder": "NIXPACKS"
     },
     "deploy": {
       "startCommand": "python -m http.server 8080",
       "restartPolicyType": "ON_FAILURE",
       "restartPolicyMaxRetries": 10
     }
   }
   ```

2. Deploy:
   ```bash
   # Install Railway CLI (requires Node.js)
   npm i -g @railway/cli
   
   # Login and deploy
   railway login
   railway init
   railway up
   ```

**But seriously, use GitHub Pages instead!** It's simpler and perfect for static sites.

---

## Cloudflare Pages (Another Free Option)

1. Push your code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click "Create a project"
4. Connect your repository
5. Deploy settings:
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
6. Click "Save and Deploy"

---

## Local Development (No Deployment)

### Python Server (Recommended)
```bash
cd gantt-chart-generator

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Visit: `http://localhost:8000`

### VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

### PHP Server
```bash
php -S localhost:8000
```

### Node.js (if you have it)
```bash
npx http-server
```

---

## Updating Your Deployed Site

### GitHub Pages / Netlify / Vercel
```bash
# Make changes to your JSON files
git add .
git commit -m "Updated timeline"
git push
```

Your site updates automatically! ✨

---

## Custom Domain Setup

### GitHub Pages
1. Buy a domain (e.g., from Namecheap, Google Domains)
2. Add a `CNAME` file to your repository:
   ```
   your-domain.com
   ```
3. Configure DNS:
   - Add a CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A records for apex domain (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

### Netlify
1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

---

## Best Choice for You

Since you mentioned:
- ❌ No Node.js
- ❌ No admin rights

**Recommendation: GitHub Pages**

Why?
- ✅ No installation needed (use GitHub web interface)
- ✅ Free forever
- ✅ Automatic SSL
- ✅ Easy to update (just edit files on GitHub)
- ✅ Professional hosting
- ✅ Fast CDN

You can even edit your JSON files directly on GitHub's website without any local tools!

---

## Next Steps

1. Create a GitHub account (if you don't have one)
2. Create a new repository
3. Upload your files using GitHub's web interface
4. Enable Pages in settings
5. Share your live URL!

No Node.js, no CLI, no complications! 🎉

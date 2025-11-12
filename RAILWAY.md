# Railway Deployment Guide for Gantt Chart Generator

## 🚂 Deploy to Railway

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub** (already done ✅)
   ```
   https://github.com/mjpensa/gantt-2
   ```

2. **Go to Railway**
   - Visit: https://railway.app
   - Click "Start a New Project"
   - Select "Deploy from GitHub repo"
   - Choose `mjpensa/gantt-2`

3. **Railway Auto-Detects**
   - Railway will find the `Dockerfile`
   - Builds automatically
   - Deploys in ~2 minutes

4. **Get Your URL**
   - Click "Settings" → "Generate Domain"
   - Your app will be live at: `https://your-app.railway.app`

### Option 2: Deploy via Railway CLI

If you have Node.js installed:

```powershell
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

### Option 3: Deploy Without CLI (Web Interface)

1. Go to: https://railway.app/new
2. Click "Deploy from GitHub repo"
3. Authorize GitHub access
4. Select `mjpensa/gantt-2` repository
5. Click "Deploy Now"
6. Wait ~2 minutes
7. Click "Settings" → "Generate Domain"
8. Done! Your URL is live 🎉

## 🔧 Configuration Files Created

- **`Dockerfile`** - Tells Railway how to build your app
- **`railway.json`** - Railway configuration

## 💰 Pricing

- **Free Tier**: $5 credit/month
- **Your app**: Uses ~$0.50/month (minimal usage)
- **Perfect for**: Static sites and demos

## 🔄 Updating Your Deployment

After making changes:

```powershell
cd "C:\Users\PensaMatthew(BipMont\Downloads\gantt-chart-generator"
git add .
git commit -m "Updated chart"
git push
```

Railway auto-deploys from GitHub! ✨

## 🌐 Your URLs

- **GitHub Repo**: https://github.com/mjpensa/gantt-2
- **Railway App**: Will be `https://gantt-2-production.up.railway.app` (or similar)

## 📝 Environment Variables (Optional)

If needed, you can set in Railway dashboard:
- Click "Variables" tab
- Add any custom settings

## ✅ Benefits of Railway

- ✅ Automatic HTTPS
- ✅ Auto-deploys from GitHub
- ✅ Free tier available
- ✅ Fast global CDN
- ✅ Zero configuration needed

## 🆚 Railway vs GitHub Pages

| Feature | Railway | GitHub Pages |
|---------|---------|--------------|
| Cost | $5 free credit | 100% Free |
| Setup | Needs Dockerfile | Just enable Pages |
| Speed | Fast | Very Fast (CDN) |
| Custom Domain | ✅ Easy | ✅ Easy |
| Best For | Dynamic sites | Static sites |

**For this project:** GitHub Pages is actually better (free forever, faster, simpler).
**But Railway works great too!** Use whichever you prefer.

## 🚀 Next Steps

1. Go to https://railway.app
2. Sign in with GitHub
3. Deploy from `mjpensa/gantt-2` repo
4. Generate domain
5. Share your link!

Need help? Railway has great docs: https://docs.railway.app

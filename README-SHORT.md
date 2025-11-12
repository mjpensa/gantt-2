# Gantt Chart Generator

🎯 **Zero-dependency, client-side Gantt chart generator** - No Node.js required!

Create beautiful, customizable project timelines by editing simple JSON files.

## ✨ Key Features

- 📝 **JSON-Driven** - Define timelines in easy-to-edit JSON
- 🎨 **Fully Customizable** - Colors, durations, swimlanes
- 📸 **PNG Export** - Download high-quality images
- 🚀 **Deploy Anywhere** - GitHub Pages, Netlify, or run locally
- ⚡ **No Build Tools** - Just HTML, CSS, and JavaScript

## 🚀 Quick Start

### Run Locally
```bash
# Clone the repository
git clone https://github.com/yourusername/gantt-chart-generator.git
cd gantt-chart-generator

# Open in browser (or use a local server)
python -m http.server 8000
```

Visit `http://localhost:8000`

### Deploy to GitHub Pages

1. Fork this repository
2. Go to Settings → Pages
3. Select "Deploy from main branch"
4. Visit `https://yourusername.github.io/gantt-chart-generator/`

## 📝 Create Your Timeline

Edit `config.json`:

```json
{
  "title": "My Project",
  "weeks": 10,
  "swimlanes": [
    {
      "name": "PHASE 1",
      "tasks": [
        { "name": "Task A", "start": 1, "end": 3, "color": "blue" }
      ]
    }
  ]
}
```

Refresh browser → See your chart!

## 📚 Documentation

See [README.md](README.md) for:
- Complete JSON reference
- Color customization
- Deployment guides
- Troubleshooting

## 🎯 Use Cases

✅ Software roadmaps  
✅ Product launches  
✅ Marketing campaigns  
✅ Event planning  
✅ Academic projects

## 📦 What's Included

- `index.html` - Main application
- `gantt-generator.js` - Chart engine
- `gantt-styles.css` - Styling
- `config.json` - Your timeline
- `examples/` - Sample timelines

## 🤝 Contributing

Feel free to fork, modify, and share! Open issues for bugs or feature requests.

## 📄 License

MIT - Use freely in any project!

---

**No npm install. No webpack. Just create!** 🎉

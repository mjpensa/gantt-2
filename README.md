# Customizable Gantt Chart Generator

A pure client-side Gantt chart generator that requires **no Node.js or build tools**. Simply edit JSON files to create custom roadmaps and timelines.

![Gantt Chart Example](screenshot.png)

## 🚀 Features

- ✅ **Zero Dependencies** - No Node.js, npm, or build tools required
- ✅ **JSON-Driven** - Define your entire timeline in a simple JSON file
- ✅ **Multiple Templates** - Switch between different roadmaps with a dropdown
- ✅ **PNG Export** - Export your charts as high-quality images
- ✅ **Fully Customizable** - Colors, durations, swimlanes, and tasks
- ✅ **GitHub Pages Ready** - Deploy for free in minutes
- ✅ **Offline Capable** - Works by opening `index.html` locally

## 📂 Project Structure

```
gantt-chart-generator/
├── index.html              # Main application
├── gantt-generator.js      # Core chart generation engine
├── gantt-styles.css        # Styling
├── config.json             # Default chart configuration
├── examples/               # Example configurations
│   ├── product-launch.json
│   └── marketing-campaign.json
└── README.md
```

## 🎯 Quick Start

### Option 1: Run Locally (No Server Needed)

1. Download all files to a folder
2. Open `index.html` in your web browser
3. That's it! The chart will load automatically

**Note:** Some browsers may block local file loading. If you see errors, use Option 2.

### Option 2: Local Development Server

If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

### Option 3: Deploy to GitHub Pages (Free Hosting)

1. Create a new GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select "Deploy from main branch"
5. Your chart will be live at: `https://yourusername.github.io/repository-name/`

## 📝 Creating Your Own Timeline

### Step 1: Create a JSON Configuration File

Create a new file in the root or `examples/` folder (e.g., `my-project.json`):

```json
{
  "title": "My Project Timeline",
  "weeks": 10,
  "weekLabel": "W",
  "colors": {
    "blue": "#008FFB",
    "orange": "#FF4560",
    "green": "#00E396"
  },
  "swimlanes": [
    {
      "name": "PHASE 1",
      "tasks": [
        {
          "name": "Task A",
          "start": 1,
          "end": 3,
          "color": "blue"
        },
        {
          "name": "Task B",
          "start": 2,
          "end": 5,
          "color": "blue"
        }
      ]
    },
    {
      "name": "PHASE 2",
      "tasks": [
        {
          "name": "Task C",
          "start": 4,
          "end": 7,
          "color": "orange"
        }
      ]
    }
  ]
}
```

### Step 2: Add to the Dropdown (Optional)

Edit `index.html` and add your config to the selector:

```html
<select id="config-select">
  <option value="config.json">App Development</option>
  <option value="examples/product-launch.json">Product Launch</option>
  <option value="examples/marketing-campaign.json">Marketing Campaign</option>
  <option value="my-project.json">My Project</option> <!-- Add this -->
</select>
```

### Step 3: Refresh Your Browser

The new timeline will appear in the dropdown!

## 🎨 JSON Configuration Reference

### Root Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | string | ✅ | Chart title displayed at the top |
| `weeks` | number | ✅ | Number of time periods (weeks, months, etc.) |
| `weekLabel` | string | ❌ | Label prefix for time periods (default: "W") |
| `colors` | object | ❌ | Custom color definitions (hex values) |
| `swimlanes` | array | ✅ | Array of swimlane objects |

### Swimlane Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | ✅ | Swimlane header name (e.g., "PLANNING") |
| `tasks` | array | ✅ | Array of task objects |

### Task Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | ✅ | Task name displayed in the left column |
| `start` | number | ✅ | Starting week/period (1-indexed) |
| `end` | number | ✅ | Ending week/period (exclusive) |
| `color` | string | ✅ | Color key from the `colors` object |
| `showLabel` | boolean | ❌ | Show task name inside the bar (default: false) |

## 🎨 Customizing Colors

Define your color palette in the `colors` object:

```json
{
  "colors": {
    "blue": "#008FFB",
    "purple": "#775DD0",
    "teal": "#00D9E9",
    "green": "#00E396",
    "orange": "#FF4560",
    "pink": "#E91E63"
  }
}
```

Then reference these colors in your tasks:

```json
{
  "name": "My Task",
  "start": 1,
  "end": 3,
  "color": "purple"
}
```

## 📊 Export Options

Click the **"Export as PNG"** button to download your chart as a high-resolution image. Perfect for:
- Presentations
- Documentation
- Sharing with stakeholders
- Embedding in reports

## 🌐 Deployment Options

### GitHub Pages (Recommended - Free)
1. Push code to GitHub
2. Enable Pages in repository settings
3. Done! Your chart is live

### Netlify (Free)
1. Drag & drop your folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Get instant hosting

### Vercel (Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Deploy in seconds

**Note:** Railway is not needed for this project since it's pure static HTML/CSS/JS. The free options above are simpler!

## 💡 Use Cases

- **Software Development Roadmaps**
- **Product Launch Timelines**
- **Marketing Campaign Planning**
- **Event Planning**
- **Academic Project Schedules**
- **Construction Project Management**
- **Content Creation Calendars**

## 🔧 Advanced Customization

### Changing the Time Period Labels

Want to show "Month 1, Month 2" instead of "W1, W2"?

```json
{
  "weekLabel": "Month ",
  "weeks": 12
}
```

### Adding More Weeks

Simply increase the `weeks` value:

```json
{
  "weeks": 20
}
```

### Creating Overlapping Tasks

Tasks can overlap! Just set appropriate start/end values:

```json
{
  "tasks": [
    { "name": "Design", "start": 1, "end": 5, "color": "blue" },
    { "name": "Development", "start": 3, "end": 8, "color": "orange" }
  ]
}
```

## 🐛 Troubleshooting

**Chart doesn't load:**
- Check browser console (F12) for errors
- Ensure JSON syntax is valid (use [JSONLint](https://jsonlint.com/))
- Verify all file paths are correct

**Export button doesn't work:**
- Make sure html2canvas is loading (check Network tab in DevTools)
- Try a different browser (Chrome/Firefox recommended)

**Local files not loading:**
- Use a local server (Python, VS Code Live Server, etc.)
- Or deploy to GitHub Pages

## 📄 License

MIT License - Feel free to use this in any project!

## 🤝 Contributing

This is a simple, standalone project. Feel free to:
- Fork and modify for your needs
- Submit issues or improvements
- Share your custom templates

## 📧 Support

For questions or issues, please open a GitHub issue.

---

**Made with ❤️ for developers who value simplicity**

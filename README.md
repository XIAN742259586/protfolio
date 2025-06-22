# Sarah Jones - UX Designer Portfolio

A modern, responsive portfolio website for UX Designer Sarah Jones, built with React and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design based on Figma specifications
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **React Components**: Modular, reusable components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **GitHub Pages Ready**: Configured for easy deployment

## 🛠️ Tech Stack

- **React** - Frontend library
- **Tailwind CSS** - Styling framework
- **Google Fonts** - Typography (Montserrat & Inter)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/protfolio.git
cd protfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🖼️ Profile Image Setup

To display the profile image correctly, please save the Figma profile image as `public/profile-image.png`.

**Image Requirements:**
- Format: PNG
- Recommended size: 380x400px or higher resolution
- Location: `public/profile-image.png`

The image will be automatically loaded by the Hero section component.

## 🌐 Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
```json
"homepage": "https://yourusername.github.io/protfolio"
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.js           # Main Hero section wrapper
│   ├── Navbar.js         # Navigation bar component
│   └── HeroSection.js    # Hero content section
├── App.js                # Main App component
├── index.js              # React entry point
└── index.css             # Global styles with Tailwind
```

## 🎨 Design System

### Colors
- **Primary Pink**: `#ffd4d0`
- **Primary Red**: `#fc3314`
- **Primary Dark**: `#1f1f1f`
- **Gray Light**: `#f7f7f7`

### Typography
- **Headings**: Montserrat (Bold)
- **Body Text**: Montserrat (Regular)
- **Logo**: Inter (Extra Bold & Semi Bold)

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages
- `npm test` - Launches the test runner

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Feel free to submit issues and pull requests!
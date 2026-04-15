# 🌍 European Countries Interactive Table

An interactive web application showcasing all 50 European countries with detailed information, bilingual support (English/Czech), and real-time flag display.

![GitHub last commit](https://img.shields.io/github/last-commit/Bigblue007/european-countries-app)
![GitHub](https://img.shields.io/badge/license-MIT-blue)
![Built with](https://img.shields.io/badge/built%20with-VSCode%20%2B%20GitHub%20Copilot-blue)

## 🎯 Features

✨ **50 European Countries** — Complete dataset with all European nations
🌐 **Bilingual Interface** — Full support for English and Czech
🚩 **Country Flags** — High-quality flag icons from flagcdn.com CDN
📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
🎨 **Beautiful UI** — Modern gradient design with smooth animations
🔄 **Language Persistence** — Your language choice is saved in browser
♻️ **Modal Popup** — Detailed country information with smooth transitions

## 📋 Information Displayed

Each country card includes:
- **Country Name** (English & Czech)
- **Capital City** (English & Czech translations)
- **Region** (categorized by geography)
- **Population** (in millions)
- **Area** (in km²)
- **Primary Language** (English & Czech)
- **Currency**
- **EU Membership Status** (Yes/No with color coding)
- **Country Flag** (large display in modal)

## 🛠️ Built With

- **HTML5** — Semantic markup
- **CSS3** — Modern styling with flexbox and grid
- **Vanilla JavaScript** — No frameworks, pure JS
- **CDN Integration** — flagcdn.com for real-time flag images
- **localStorage API** — Browser storage for language preference

### Development Tools
- **VS Code** — Code editor
- **GitHub Copilot** — AI-powered code assistant
- **Git** — Version control
- **GitHub** — Repository hosting

## 📁 Project Structure

```
├── index.html       # Main HTML structure
├── styles.css       # Responsive styling
├── script.js        # Interactive functionality & language switching
├── i18n.js          # Translation dictionary (English/Czech)
├── data.js          # 50 European countries dataset
└── README.md        # This file
```

## 🚀 Quick Start

### Option 1: Online (No Installation)
Simply open `index.html` in your web browser:
```bash
cd /path/to/european-countries-app
# Then open index.html in your browser (double-click or drag to browser)
```

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server
```

Then visit: `http://localhost:8000`

## 💻 Usage

1. **Browse Countries** — Scroll through the interactive table of all 50 European countries
2. **View Details** — Click any row to open a modal with comprehensive country information
3. **Switch Language** — Click the button in the top-right (🇨🇿 Česky / 🇬🇧 English) to toggle languages
4. **Close Modal** — Click the X button, click outside the modal, or press Escape

## 🌐 Languages

| Language | Flag | Button Text |
|----------|------|------------|
| English | 🇬🇧 | 🇨🇿 Česky |
| Czech | 🇨🇿 | 🇬🇧 English |

All content is fully translated including:
- Country names
- Capital cities
- Geographic regions
- Language names
- UI labels and buttons

## 📊 Data Coverage

**50 European Countries** organized by region:
- Western Europe (7 countries)
- Southern Europe (6 countries)
- Nordic/Scandinavian (5 countries)
- Central Europe (6 countries)
- Eastern Europe (6 countries)
- Baltic Countries (3 countries)
- Balkans (8 countries)
- Caucasus & Anatolia (2 countries)
- Microstates (5 countries)

## 🎨 Design Features

### Color Scheme
- **Primary Gradient** — Purple to violet (667eea → 764ba2)
- **Accent Colors** — White text with shadow effects
- **UI Elements** — Consistent spacing and rounded corners

### Interactive Elements
- ✨ Smooth fade-in animations for modals
- 🔄 Scale effects on hover
- 💫 Slide-in animations for country details
- 📱 Touch-friendly on mobile devices

### Accessibility
- Semantic HTML structure
- Proper alt text for all images
- Keyboard navigation (Escape to close modal)
- High contrast for readability

## 📱 Browser Compatibility

✅ Chrome/Chromium (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

## 🔧 Development Notes

### Created with GitHub Copilot Assistance

This project was developed with AI-powered code assistance from GitHub Copilot in Visual Studio Code. The following features were implemented with Copilot support:

- Bilingual i18n system implementation
- Responsive CSS Grid/Flexbox layouts
- Modal interaction logic
- Country dataset structure and translations
- Language switching with localStorage persistence

### Key Implementation Details

**Language System:**
```javascript
// Dynamic translation with language switching
currentLanguage = 'en'; // or 'cs'
const translation = getTranslation('key.path');
```

**Data Structure:**
```javascript
{
  name: "France",
  nameCz: "Francie",
  capital: "Paris",
  capitalCz: "Paříž",
  // ... more fields
}
```

**Flag Images:**
```javascript
// CDN-powered flag images
https://flagcdn.com/w[SIZE]/[COUNTRY_CODE].png
```

## 🐛 Known Issues

- None currently. Please report issues via GitHub Issues.

## 🚀 Future Enhancements

- [ ] Add more languages (German, Spanish, Polish)
- [ ] Sorting & filtering by region, population, EU status
- [ ] Search functionality for quick country lookup
- [ ] Compare two countries side-by-side
- [ ] Export country data as CSV/PDF
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA) support
- [ ] Additional country statistics (GDP, languages, etc.)

## 📄 License

MIT License - Feel free to use this project for personal or educational purposes.

## 👤 Author

Created with ❤️ using VS Code + GitHub Copilot

## 🔗 Links

- **Repository**: [github.com/Bigblue007/european-countries-app](https://github.com/Bigblue007/european-countries-app)
- **Live Demo**: Open `index.html` in your browser

## 📞 Support

For issues or suggestions:
1. Check existing GitHub Issues
2. Create a new Issue on GitHub
3. Include browser, OS, and steps to reproduce

---

**Made with VS Code + GitHub Copilot** 🤖✨

![News PWA](https://github.com/stackblitz/news-pwa/assets/demo-header.png)

# AI-Powered News PWA

A modern Progressive Web App for news consumption with AI-powered translations and summaries. Built with React, TypeScript, and Tailwind CSS.

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- 🌐 **Multi-language Support**: Switch between 6 languages seamlessly
- 📍 **Location-based News**: Select multiple locations for personalized news feed
- 🔍 **Source Selection**: Choose from verified news sources
- 💡 **AI-powered Summaries**: Get concise article summaries
- 🎯 **PWA Ready**: Install as a native app on any device
- ⚡ **Infinite Scroll**: Smooth loading of news articles
- 🎨 **Beautiful UI**: Modern, responsive design with animations

## 🎬 Demo

### Language Selection
![Language Selection](https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60)

### Location Settings
![Location Settings](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60)

### News Sources
![News Sources](https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=60)

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/news-pwa.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Date Formatting**: date-fns
- **UI Components**: Headless UI
- **PWA**: Vite PWA Plugin

## 📱 PWA Features

- Offline support
- Push notifications
- Home screen installation
- Fast loading and performance
- Responsive design for all devices

## 🔄 State Management

User preferences are managed through React Context and persisted in localStorage:
- Language selection
- Location preferences
- News source selection
- Reading history

## 🎨 UI/UX Features

- Smooth animations and transitions
- Skeleton loading states
- Pull-to-refresh
- Infinite scroll
- Dark mode support (coming soon)

## 📦 Project Structure

```
src/
├── components/         # Reusable UI components
├── contexts/          # React Context providers
├── types/            # TypeScript type definitions
├── hooks/            # Custom React hooks
└── utils/            # Helper functions
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for the beautiful images
- [Lucide](https://lucide.dev) for the icons
- [Tailwind CSS](https://tailwindcss.com) for the styling system
- [Vite](https://vitejs.dev) for the build tool
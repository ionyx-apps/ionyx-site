---
title: Installation
description: Get Ionyx up and running on your system in minutes
---

Ionyx'i kurmak ve çalıştırmak çok basittir. Sadece birkaç dakika içinde hazır olacaksınız.

## Prerequisites

Ionyx kullanmak için ihtiyacınız olanlar:

- **Node.js** (v16 veya üstü) - CLI için
- **Rust** (isteğe bağlı) - Eğer backend'e dokunmak isterseniz
- **Sistem WebView** - Genellikle sistemde zaten kurulu

### Sistem WebView Kontrolü

```bash
# Windows
# Edge WebView2 genellikle kurulu gelir

# macOS  
# WKWebView zaten mevcut

# Linux
# WebKitGTK kurulu olmalı
sudo apt-get install libwebkit2gtk-4.0-dev
```

## Installation Methods

### Method 1: NPM (Recommended)

```bash
# Global olarak kur
npm install -g ionyx

# Veya proje bazında
npm install --save-dev ionyx

# Veya npx ile direkt kullanım
npx ionyx create my-app
```

### Method 2: Direct Download

[GitHub Releases](https://github.com/ionyx-apps/ionyx/releases) sayfasından binary'i indirin.

### Method 3: Source Build

```bash
git clone https://github.com/ionyx-apps/ionyx.git
cd ionyx
cargo build --release
```

## Verify Installation

```bash
ionyx --version
# Expected output: Ionyx CLI v1.0.7
```

## Create Your First App

```bash
# Yeni proje oluştur
ionyx create my-app

# Veya template ile
ionyx create my-react-app --template react
ionyx create my-svelte-app --template svelte
ionyx create my-vue-app --template vue
ionyx create my-vanilla-app --template vanilla

# Proje dizinine gir
cd my-app

# Geliştirme sunucusunu başlat
ionyx dev
```

## Project Structure

```
my-app/
├── src/
│   ├── frontend/     # Frontend kodunuz
│   └── backend/      # Rust backend (isteğe bağlı)
├── public/           # Static assets
├── ionyx.config.js   # Ionyx konfigürasyonu
└── package.json      # Node.js bağımlılıkları
```

## Configuration

`ionyx.config.js` dosyası ile uygulamanızı özelleştirin:

```javascript
export default {
  // Uygulama bilgileri
  app: {
    name: 'My Ionyx App',
    version: '1.0.0',
    description: 'Built with Ionyx'
  },
  
  // Pencere ayarları
  window: {
    width: 1200,
    height: 800,
    resizable: true,
    title: 'My App'
  },
  
  // Frontend ayarları
  frontend: {
    framework: 'react', // 'vue', 'svelte', 'vanilla'
    devServer: {
      port: 3000,
      hot: true
    }
  }
}
```

## Available Commands

```bash
# Development
ionyx dev              # Geliştirme sunucusu
ionyx dev --hot        # Hot reload ile

# Build
ionyx build            # Production build
ionyx build --prod     # Tek parça binary için

# Utilities
ionyx clean            # Build temizle
ionyx info             # Proje bilgileri
ionyx doctor           # Sistem kontrolü
```

## Troubleshooting

### Common Issues

#### "WebView not found" Hatası

**Windows:** Edge WebView2 kurun
```powershell
# Microsoft Edge WebView2 Runtime
winget install Microsoft.EdgeWebView2Runtime
```

**Linux:** WebKitGTK kurun
```bash
# Ubuntu/Debian
sudo apt-get install libwebkit2gtk-4.0-dev

# Fedora
sudo dnf install webkit2gtk3-devel
```

#### "Permission denied" Hatası

```bash
# Linux/macOS için
chmod +x ~/.npm-global/bin/ionyx

# Veya sudo ile kur
sudo npm install -g @ionyx/cli
```

#### Rust Derleme Hataları

```bash
# Rust güncelleyin
rustup update

# Veya pre-compiled binary kullanın
npm install -g ionyx
```

## Next Steps

- [Quick Start](./quick-start) - İlk uygulamanızı oluşturun
- [Architecture](./architecture) - Ionyx mimarisini anlayın
- [Configuration](./configuration) - Detaylı konfigürasyon

---

**Sorun mu yaşıyorsunuz?** [GitHub Discussions](https://github.com/ionyx-apps/ionyx/discussions) sayfasında bize ulaşın.

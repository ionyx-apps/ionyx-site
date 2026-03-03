# 🌐 Ionyx Framework Website

> Official website for Ionyx Framework - Universal desktop framework with Rust backend and agnostic frontend

[![Ionyx Framework](https://img.shields.io/badge/Ionyx-Framework-blue?style=flat-square&logo=)](https://img.shields.io/badge/Ionyx-Framework-blue?style=flat-square&logo=)
[![Astro](https://img.shields.io/badge/Astro-FF5E1F?style=flat-square&logo=astro)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0))

## 🚀 Hızlı Başlangıç

### Kurulum
```bash
# Repository'yi klonla
git clone https://github.com/ionyx-apps/ionyx-site.git
cd ionyx-site

# Dependencies kur
npm install

# Development server'ı başlat
npm run dev
```

### Geliştirme
```bash
# Development modunda çalıştır
npm run dev

# Build et
npm run build

# Preview
npm run preview
```

## ✨ Özellikler

### 🎨 **Teknoloji Stack**
- **Astro**: Modern static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Tip güvenli geliştirme
- **Responsive**: Mobil uyumlu tasarım
- **SEO Optimized**: Arama motoru dostu

### 📱 **Site Özellikleri**
- **Ana Sayfa**: Hero section, özellikler, karşılaştırma
- **Dokümantasyon**: API ve kullanım kılavuzları
- **Örnekler**: Showcase projeler
- **Blog**: Güncellemeler ve haberler
- **Topluluk**: Discord, GitHub, katkıda bulunma

### 🎯 **SEO ve Performans**
- **Static Generation**: Hızlı yükleme
- **Image Optimization**: Otomatik resim optimizasyonu
- **Code Splitting**: Otomatik kod bölme
- **Minification**: Optimizasyonlu build

## 📁 Proje Yapısı

```
ionyx-site/
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Ana layout
│   ├── pages/
│   │   └── index.astro       # Ana sayfa
│   ├── components/           # Astro bileşenleri
│   └── globals.css          # Global stiller
├── public/                   # Statik dosyalar
├── astro.config.mjs          # Astro konfigürasyonu
├── tailwind.config.mjs       # Tailwind konfigürasyonu
└── package.json              # NPM konfigürasyonu
```

## 🛠️ Geliştirme

### Local Development
```bash
# Development server
npm run dev

# Browser'da aç
http://localhost:4321/
```

### Build ve Deployment
```bash
# Production build
npm run build

# Preview
npm run preview

# Build sonucu
dist/ klasörü
```

### Tailwind CSS
```bash
# Tailwind config
tailwind.config.mjs

# Global stiller
src/globals.css

# Component stilleri
src/layouts/Layout.astro
```

## 🌐 Deployment

### GitHub Pages
```bash
# Build et
npm run build

# dist/ klasörünü GitHub Pages'e gönder
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
```

### Vercel
```bash
# Build command: npm run build
# Output directory: dist
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **ionyx-50**: #f0f9ff
- **ionyx-500**: #0ea5e9
- **ionyx-600**: #0284c7
- **ionyx-700**: #0369a1

### Font'lar
- **Inter**: Ana font
- **JetBrains Mono**: Kod font'u

### Komponentler
- **Navigation**: Header ve footer
- **Hero**: Ana sayfa hero section
- **Features**: Özellik kartları
- **Comparison**: Karşılaştırma tablosu

## 📊 Performans

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### Optimizasyonlar
- **Static Generation**: Pre-rendered pages
- **Image Optimization**: WebP format
- **CSS Minification**: Optimized stiller
- **JS Bundling**: Tree shaking

## 🤝 Katkıda Bulunma

### Geliştirme
1. Repository'yi fork et
2. Feature branch oluştur: `git checkout -b feature/yeni-ozellik`
3. Değişiklikleri yap: `git commit -m 'Yeni özellik eklendi'`
4. Push et: `git push origin feature/yeni-ozellik`
5. Pull request oluştur

### Kod Standartları
- **TypeScript**: Tip güvenli kod
- **Tailwind**: Utility-first stiller
- **Astro**: Best practices
- **SEO**: Meta tag'ler ve yapılandırma

## 📄 Lisans

Apache License 2.0 - [LICENSE](./LICENSE) dosyasına bakın

## 🔗 Linkler

- **Ionyx Framework**: https://github.com/ionyx-apps/ionyx
- **Ionyx CLI**: https://github.com/ionyx-apps/ionyx-cli
- **NPM Paketi**: https://www.npmjs.com/package/ionyx
- **CLI Komutu**: `npx ionyx create`
- **Discord**: https://discord.gg/ionyx (Yakında)
- **Website**: https://ionyx.app (Yakında)

---

**🌐 Ionyx Framework Website - Modern web teknolojileri ile inşa edildi!**

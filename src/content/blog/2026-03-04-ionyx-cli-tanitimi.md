---
title: "Ionyx CLI: Geliştirme Deneyimini Kolaylaştıran Araç"
description: "Ionyx Framework'ünün güçlü CLI aracı ile frontend ve backend geliştirme süreçlerini nasıl otomatikleştireceğinizi keşfedin."
pubDate: 2026-03-04
author: "Ionyx Apps"
tags: ["cli", "development", "automation", "rust", "frontend", "backend"]
---

# Ionyx CLI: Geliştirme Deneyimini Kolaylaştıran Araç

Ionyx Framework, masaüstü uygulama geliştirmeyi kolaylaştırmak için tasarlanmış kapsamlı bir çözüm sunar. Bu çözümün kalbinde, geliştirme sürecini otomatikleştiren güçlü bir CLI (Command Line Interface) aracı yer alır.

## CLI Nedir ve Neden Önemli?

CLI, geliştiricilerin komut satırı üzerinden uygulamaları kontrol etmelerine olanak sağlayan araçtır. Ionyx CLI, geleneksel geliştirme süreçlerindeki karmaşıklığı ortadan kaldırarak, tek bir komutla tüm geliştirme ortamını ayağa kaldırır.

## Temel Özellikler

### 🚀 Otomatik Dev Server Başlatma

```bash
cargo run --bin ionyx
```

Bu tek komut ile:
- Frontend dev server'ı (Vite) otomatik olarak başlatılır
- Backend Rust uygulaması derlenir ve çalıştırılır
- WebView penceresi açılır ve uygulamaya bağlanır

### 🔄 Process Orchestration

CLI, frontend ve backend process'lerini akıllıca yönetir:

1. **Frontend Kontrolü**: `npm run dev` komutunu çalıştırır
2. **Port Takibi**: 5173 portunun aktif olmasını bekler
3. **Backend Başlatma**: Rust uygulamasını çalıştırır
4. **Environment Yönetimi**: `IONYX_URL` değişkenini set eder

### 🛡️ Single Instance Kontrolü

CLI, aynı anda sadece bir geliştirme ortamının çalışmasına izin verir:
- Lock file sistemi ile çoklu çalıştırma engellenir
- "Another Ionyx dev instance is already running" uyarısı

### 🌐 Environment Variable Yönetimi

CLI, process'ler arası iletişimi environment variable'lar aracılığıyla sağlar:

```bash
IONYX_URL=http://127.0.0.1:5173 cargo run --bin ionyx-host
```

## Teknik Detaylar

### Workspace Yapısı

Ionyx CLI, Cargo workspace sistemi ile entegre çalışır:

```toml
[workspace]
members = [
    "src-ionyx",      # Backend
    "cargo-ionyx",    # CLI
    "frontend"        # Web uygulaması
]
```

### Tauri-Benzersiz Mimari

CLI, Tauri'nin CLI yaklaşımından ilham alarak geliştirilmiştir:

- **Modüler Yapı**: `commands/dev.rs` gibi ayrı modüller
- **Error Handling**: Kapsamlı hata yönetimi
- **Cross-Platform**: Windows, macOS, Linux desteği

### Frontend-Backend Integration

```rust
// CLI tarafı
be_cmd.env("IONYX_URL", "http://127.0.0.1:5173");

// Backend tarafı  
let dev_url = std::env::var("IONYX_URL")
    .unwrap_or_else(|_| format!("http://127.0.0.1:{}", port));

WebViewBuilder::new()
    .with_url(&dev_url)
```

## Kullanım Senaryoları

### Yeni Proje Geliştirme

```bash
# Proje oluşturma
cargo new my-ionyx-app
cd my-ionyx-app

# Geliştirme ortamını başlatma
cargo run --bin ionyx
```

### Hızlı Prototyping

CLI, fikirlerinizi hızlıca test etmenizi sağlar:
- Otomatik dependency kurulumu
- Hot reload desteği
- Anında preview

### Production Build

```bash
# Release build
cargo build --release

# Paketleme
# (Gelecek özellik)
```

## Gelişmiş Özellikler

### 🔍 Dependency Yönetimi

CLI, hem Rust hem de Node.js dependency'lerini otomatik olarak yönetir:

- `npm install` otomatik çalıştırılır
- `node_modules` kontrolü yapılır
- Missing dependency hataları yakalanır

### 🌍 Cross-Platform Uyumluluk

CLI, tüm major işletim sistemlerinde çalışır:

- **Windows**: CMD ve PowerShell desteği
- **macOS/Linux**: Terminal ve shell desteği
- **Environment Detection**: Otomatik platform algılama

### 📊 Process Lifecycle Management

```rust
tokio::select! {
    res = fe_child.wait() => { /* Frontend kapandı */ }
    res = be_child.wait() => { /* Backend kapandı */ }
}
```

## Gelecek Özellikler

Ionyx CLI sürekli gelişiyor. Yakında eklenecek özellikler:

- **Hot Module Replacement**: Daha hızlı development
- **Plugin Sistemi**: Özel komutlar için genişletme
- **Build Optimization**: Daha hızlı derleme süreçleri
- **Deployment Tools**: Otomatik publish

## Sonuç

Ionyx CLI, modern masaüstü uygulama geliştirmenin gerektirdiği karmaşıklığı basitliğe dönüştürür. Tek bir komutla tüm geliştirme ortamınızı ayağa kaldırabilir, process'leri yönetebilir ve verimli bir şekilde çalışabilirsiniz.

Bu araç sayesinde, fikirlerinizi koddan ürüne dönüştürme süreci artık çok daha hızlı ve keyifli!

🎉 **Happy coding with Ionyx CLI!**

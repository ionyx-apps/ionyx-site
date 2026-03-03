---
title: Quick Start
description: Build your first Ionyx application in 5 minutes
---

5 dakikada ilk Ionyx uygulamanızı oluşturalım!

## Step 1: Create New Project

```bash
# Yeni Ionyx projesi oluştur
ionyx create hello-world

# Proje dizinine gir
cd hello-world
```

## Step 2: Choose Your Framework

Ionyx size frontend framework seçme özgürlüğü tanır:

```bash
# React (default)
ionyx create hello-world --template react

# Svelte
ionyx create hello-world --template svelte

# Vue
ionyx create hello-world --template vue

# Vanilla JavaScript
ionyx create hello-world --template vanilla
```

## Step 3: Project Structure

Oluşturulan proje yapısı:

```
hello-world/
├── src/
│   ├── frontend/
│   │   ├── index.html
│   │   ├── main.js
│   │   └── style.css
│   └── backend/
│       └── main.rs (isteğe bağlı)
├── public/
│   └── icon.png
├── ionyx.config.js
└── package.json
```

## Step 4: Run Development Server

```bash
# Geliştirme sunucusunu başlat
ionyx dev

# Veya belirli bir port ile
ionyx dev --port 3001
```

Uygulamanız otomatik olarak açılacak! 🚀

## Step 5: Build for Production

```bash
# Production build
ionyx build

# Tek parça binary dağıtımı için
ionyx build --prod

# Çıktı: dist/hello-world.exe (Windows)
# Çıktı: dist/hello-world.app (macOS)
# Çıktı: dist/hello-world (Linux)
```

## Hello World Example

### Frontend (React)

```jsx
// src/frontend/App.jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Ionyx backend API çağrısı
    window.ionyx?.hello().then(response => {
      setMessage(response.message);
    });
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Hello Ionyx! 🎉</h1>
      <p>Backend mesajı: {message}</p>
      <button onClick={() => window.ionyx?.showNotification('Merhaba!')}>
        Bildirim Göster
      </button>
    </div>
  );
}

export default App;
```

### Backend (Rust - İsteğe Bağlı)

```rust
// src/backend/main.rs
use serde_json::json;

#[tauri::command]
fn hello() -> serde_json::Value {
    json!({
        "message": "Ionyx backend'den selam!",
        "timestamp": chrono::Utc::now().to_rfc3339()
    })
}

#[tauri::command]
fn show_notification(message: String) {
    // Bildirim gösterme mantığı
    println!("Bildirim: {}", message);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![hello, show_notification])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

## Available Commands

```bash
# Development
ionyx dev              # Geliştirme sunucusu
ionyx dev --hot        # Hot reload ile

# Build
ionyx build            # Production build
ionyx build --prod     # Tek parça binary dağıtımı

# Utilities
ionyx clean            # Build temizle
ionyx info             # Proje bilgileri
ionyx doctor           # Sistem kontrolü
```

## Configuration

`ionyx.config.js` ile uygulamanızı özelleştirin:

```javascript
export default {
  app: {
    name: 'Hello World',
    version: '1.0.0'
  },
  
  window: {
    width: 800,
    height: 600,
    resizable: true,
    title: 'Hello Ionyx App'
  },
  
  frontend: {
    framework: 'react',
    devServer: {
      port: 3000,
      hot: true
    }
  },
  
  build: {
    target: 'all', // 'windows', 'macos', 'linux', 'all'
    output: './dist'
  }
}
```

## What's Next?

- [Architecture](./architecture) - Ionyx mimarisini anlayın
- [Frontend Integration](./frontend) - Frontend entegrasyonu
- [Backend API](./backend) - Backend API kullanımı
- [Building Apps](./building) - Uygulama geliştirme rehberi

## Need Help?

- [GitHub Discussions](https://github.com/ionyx-apps/ionyx/discussions)
- [Discord Community](https://discord.gg/ionyx)
- [Documentation](./)
- [ionyx.app](https://ionyx.app)

---

**Tebrikler!** İlk Ionyx uygulamanızı oluşturdunuz. 🎉

Şimdi daha karmaşık özellikler eklemeye hazır mısınız?

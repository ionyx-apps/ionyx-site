---
title: Introduction
description: Ionyx - Ultra-minimalist desktop application framework that solves the bloat problem in desktop development
---

import { Card, CardGrid } from '@astrojs/starlight/components';

Ionyx, masaüstü uygulama dünyasındaki **"bloat" (hantallık) sorununu** en radikal şekilde çözen, **1.66MB binary boyutlu** ultra-minimalist bir mühendislik harikasıdır.

## The Problem We Solve

Masaüstü uygulama geliştirme yıllardır aynı sorunla mücadele ediyor: **gereksiz büyüklük**.

- **Electron**: 120MB+ binary boyutu, Chromium taşır
- **Electrobun**: 13.1MB (sıkıştırılmış), ama ekstra runtime gerektirir
- **Tauri**: Harika bir standart, ama devasa bir ekosistem

## Our Solution

Ionyx, **cerrahi bir yaklaşım** sunuyor: sadece en gerekli özellikler, hiçbir fazlalık.

<CardGrid>
  <Card title="1.66MB Binary" icon="lightning">
    0.44 WRY + 0.28 TAO + 0.94 Ionyx Core = mükemmel minimalizm
  </Card>
  <Card title="Zero Dependencies" icon="package">
    Ekstra runtime yok, sadece sistem WebView ve saf Rust
  </Card>
  <Card title="Agnostic Frontend" icon="code">
    React, Vue, Svelte, vanilla... İstediğini kullan
  </Card>
</CardGrid>

## Philosophy

> **"Tauri bizim 'Büyük Abimiz' ve esin kaynağımızdır."**

Tauri devasa bir ekosistem ve harika bir standarttır. Ionyx ise bu standartları koruyarak, sadece en gerekli (core) özelliklere odaklanan, **sub-3MB runtime hedefleyen cerrahi bir araçtır**.

## Performance Comparison

| Framework | Binary Size | Startup Time | Memory Usage | Runtime |
|-----------|-------------|--------------|--------------|---------|
| Electron | 120MB+ | 2-5s | 100-200MB | Chromium |
| Electrobun | 13.1MB | <50ms | 30-50MB | Bun + WebView |
| **Ionyx** | **1.66MB** | **<30ms** | **10-20MB** | **System WebView** |

## Who Is Ionyx For?

Ionyx, **performans ve minimalizm** tutkunu geliştiriciler için:

- **Hızlı startup** kritik olan uygulamalar
- **Düşük kaynak kullanımı** gerektiren sistemler
- **Minimal dağıtım** boyutu hedefleyen projeler
- **Mühendislik harikası** sevdikleri

## What's Next?

- [Installation](./installation) - Ionyx'i kurun
- [Quick Start](./quick-start) - İlk uygulamanızı 5 dakikada oluşturun
- [Architecture](./architecture) - Ionyx mimarisini anlayın

---

**Ionyx: Masaüstü uygulama hantallığına son.**

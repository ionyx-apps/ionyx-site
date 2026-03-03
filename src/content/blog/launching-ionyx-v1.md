---
title: "Announcing Ionyx v1.0.7: The Binary-First Revolution"
description: "A major step forward for the Ionyx ecosystem with pre-compiled binaries and a unified CLI experience."
pubDate: "Mar 03 2026"
heroImage: "/blog-placeholder-1.jpg"
---

Today, we are thrilled to announce the release of **Ionyx v1.0.7**. This isn't just another version bump; it represents a fundamental shift in how we deliver Ionyx to developers.

## 🚀 The Binary-First Architecture

Previously, the Ionyx CLI required a Rust toolchain to be installed on the user's system to compile the core framework during the first run. While powerful, this created friction for web developers who just wanted to get started quickly.

With v1.0.7, we've moved to a **Binary-First** approach. We now distribute pre-compiled, optimized binaries for Windows, macOS, and Linux directly via NPM.

### What does this mean for you?
- **Zero Rust Dependency**: You no longer need `cargo` or `rustc` locally to use the CLI.
- **Instant Start**: `npx ionyx create` works immediately without waiting for builds.
- **Maximum Stability**: Every binary is tested and signed before release.

## 🔧 Simplified CLI Commands

We've unified our CLI under the single `ionyx` command. The old `create-ionyx-app` package has been deprecated in favor of the new, faster `ionyx` package.

### Getting Started

```bash
# Install the new CLI globally
npm install -g ionyx

# Create a new project
ionyx create my-app

# Start development instantly
cd my-app
ionyx dev
```

## 🌐 New Dedicated Repository

To better manage the CLI and its cross-platform binaries, we've moved the source code to a dedicated repository: [github.com/ionyx-apps/ionyx-cli](https://github.com/ionyx-apps/ionyx-cli).

This move allows us to implement robust CI/CD pipelines that automatically build and publish binaries for all supported platforms on every release.

## ✨ What's Next?

This is just the beginning for Ionyx. With the core infrastructure now stable and easier to install than ever, we're shifting our focus to:
- **More Templates**: Official support for more frontend frameworks.
- **Plugin System**: Allow developers to extend the Rust backend easily.
- **Enhanced Documentation**: A completely revamped guide for building production-ready desktop apps.

Thank you for being part of the Ionyx community. Go ahead and try the new CLI today!

-- The Ionyx Team

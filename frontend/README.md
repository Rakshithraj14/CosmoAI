# CosmoAI

A modern AI chat interface built with React.

## Features

- 💬 **Chat Interface** — ChatGPT-style conversation UI
- 🖼️ **Smart Image Generation** — Auto-detects prompts like "draw..." or "generate image..."
- ⚡ **Real-time Loading** — Animated indicators while waiting for responses
- 🌙 **Dark Theme** — Modern, clean dark UI
- 🧩 **Modular Codebase** — Clean separation of components, hooks, and utilities

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS v4 |
| **HTTP Client** | Axios |

## Project Structure

```
src/
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
├── index.css               # Global styles + Tailwind
│
├── types/
│   └── index.ts            # TypeScript interfaces
│
├── utils/
│   └── api.ts              # API utilities
│
├── hooks/
│   └── useChat.ts          # Chat logic hook
│
└── components/
    ├── index.ts            # Barrel exports
    ├── Header.tsx          # CosmoAI logo header
    ├── WelcomeScreen.tsx   # Welcome message
    ├── ChatMessage.tsx     # Message bubble
    ├── ChatInput.tsx       # Input form
    └── LoadingIndicator.tsx # Loading animation
```


Built with ⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖

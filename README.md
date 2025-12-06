# CosmoAI

A full-stack AI wrapper application that demonstrates how modern AI apps work from frontend to backend to AI model integration.

## What This Project Teaches

- **What a wrapper is** : A system that connects users to AI models
- **Frontend ↔ Backend** : How the UI communicates with the server
- **Backend ↔ AI** : How the server talks to AI providers
- **Full data flow** : User input → API processing → Response display

## Features

- 💬 **Chat Interface** : ChatGPT-style conversation UI
- 🖼️ **Image Generation** : Auto-detects prompts like "draw a cat"
- ⚡ **Real-time Loading** : Animated indicators while waiting
- 🌙 **Dark Theme** : Modern, clean UI
- 🧩 **Modular Code** : Clean separation of concerns

## Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Frontend  │────▶│   Backend   │────▶│  AI Models  │
│   (React)   │◀────│   (Hono)    │◀────│ (Groq/HF)   │
└─────────────┘     └─────────────┘     └─────────────┘
     :5173              :3000
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React + TypeScript + Vite + Tailwind CSS |
| **Backend** | Bun + Hono |
| **Text AI** | Groq (Llama 3.1) |
| **Image AI** | HuggingFace (Stable Diffusion) |

## Project Structure

```
CosmoAI/
├── frontend/
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── hooks/         # useChat hook
│   │   ├── utils/         # API utilities
│   │   └── types/         # TypeScript types
│   └── package.json
│
├── backend/
│   ├── index.ts           # Hono server
│   └── package.json
│
└── README.md
```

## Quick Start

### 1. Clone & Install

```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
bun install
```

### 2. Configure Environment

**frontend/.env**
```env
VITE_API_BASE_URL=http://localhost:3000
```

**backend/.env**
```env
GROQ_API_KEY=gsk_your_key_here
HF_TOKEN=hf_your_token_here
```

### 4. Run

```bash
# Terminal 1 - Backend
cd backend && bun run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

Open http://localhost:5173

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/chat` | POST | Text generation |
| `/api/image` | POST | Image generation |
| `/` | GET | Health check |

## Why Build This?

This simple pattern is the foundation of ChatGPT, Claude, and every AI app. Master it, and you can build anything:

- 💬 Chat applications
- 🖼️ Image generation tools
- 🎵 Music creation apps
- 📝 Writing assistants

---

Built with ⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖


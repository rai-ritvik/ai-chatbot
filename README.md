# React AI Chatbot

A modern, responsive AI chatbot built to fulfill the project requirements of integrating React, Redux Toolkit, and Axios with an external AI API (Google Gemini 3.8 Flash).

## 🎯 Project Requirements Fulfilled

This repository contains all required deliverables:
* **React Code:** Modular, component-based architecture (e.g., `ChatWindow` and `ChatInput`) utilizing modern React hooks (`useState`, `useRef`, `useEffect`).
* **Redux Toolkit Store:** Centralized global state management implemented in `src/store/chatSlice.js`, handling the chat history array and loading states via reducers and actions.
* **Axios Integration:** Asynchronous network requests isolated in `src/services/geminiApi.js`, utilizing `axios.post` to securely communicate with the Google Gemini API and handle errors gracefully.
* **Setup Instructions:** Complete step-by-step local execution guide provided below.

## 🚀 Additional Features
* **Markdown Rendering:** AI responses are parsed into formatted HTML (code blocks, lists, bold text) using `react-markdown` and Tailwind Typography.
* **Auto-Scrolling UI:** The chat window automatically snaps to the latest message for seamless UX.
* **Secure Environment:** API keys are protected using Vite's strictly scoped `.env` configuration and excluded from version control via `.gitignore`.
* **Live Deployment:** Fully deployed and hosted on Vercel.

## 💻 Setup Instructions

Follow these steps to run the code locally on your machine:

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd <your-repository-name>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure the Environment
Create a file named exactly `.env` in the root directory of the project. Add your Google Gemini API key using the Vite-required prefix:
```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

### 4. Start the development server
```bash
npm run dev
```
Open the provided `localhost` URL in your browser to interact with the application.
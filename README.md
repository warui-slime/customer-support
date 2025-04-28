# SupportAI 🤖✨

**Automate Customer Support in 5 Minutes with AI Power**  
_24/7 instant responses • No coding required • Multi-channel support_

![SupportAI Mockup](https://via.placeholder.com/1280x600.png?text=SupportAI+Interface+Showcase)

## 🌟 Features

- 🚀 **5-Minute Setup** - Go live faster than making coffee
- 🧠 **Smart AI Assistant** - RAG-powered accurate responses
- 🎨 **Customizable Widget** - Match your brand perfectly
- 🔄 **Human Handoff** - Seamless agent escalation
- 📊 **Real-time Analytics** - Track performance metrics
- 🌐 **Multi-Platform** - Web, email & future social integrations
- 🔒 **Secure & Private** - Enterprise-grade data protection

## 📁 Project Structure

```markdown
```bash
supportai/
├── frontend/                 # Next.js 14 Application
│   ├── app/                  # Page routes
│   │   ├── login/
│   │   ├── setup/
│   │   └── page.tsx         # Landing page
│   ├── components/           # Reusable UI components
│   ├── lib/                  # Utility functions
│   └── styles/               # Global CSS styles
│
├── backend/                  # Python AI Services
│   ├── voice_agent.py        # AssemblyAI + Ollama implementation
│   ├── voice_agent_openai.py # OpenAI + Cartesia implementation
│   └── requirements.txt      # Python dependencies
│
├── public/                   # Static assets
└── .env.example              # Environment configuration
```

## 🖥 Frontend Setup

### 🛠 Technologies Used
- Next.js 14 (App Router)
- Tailwind CSS + shadcn/ui
- Lucide React Icons
- Framer Motion (Animations)
- Zod (Validation)

### 💻 Installation

```bash
# Clone repository
git clone https://github.com/yourusername/supportai.git
cd supportai/frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

### 🔧 Environment Variables (`.env.local`)
```ini
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_LIVEKIT_URL=your_livekit_url
```

## 🔧 Backend Setup

### 🛠 Technologies Used
- Python 3.11+
- Cartesia (Voice Synthesis)
- LiveKit (Real-time Communication)
- OpenAI/AssemblyAI (Speech Processing)
- Ollama (Local LLM)

### 📦 Installation

```bash
cd ../backend

# Install Python requirements
pip install -r requirements.txt

# For OpenAI implementation
cp .env.example .env
# Add your keys to .env file
```

### 🔑 Required Services
1. [Cartesia API Key](https://go.cartesia.ai/akshay)
2. [LiveKit Credentials](https://livekit.io/)
3. Choose either:
   - OpenAI API Key **OR**
   - AssemblyAI API Key + Ollama (Local LLM)

### 🚀 Running the Backend

**Option 1: OpenAI + Cartesia**
```bash
python voice_agent_openai.py start
```

**Option 2: AssemblyAI + Ollama (Local)**
```bash
# First terminal
ollama serve

# Second terminal
python voice_agent.py start
```

## ⚙️ Configuration Guide

### Frontend Customization
```tsx
// components/chat-widget.tsx
const ChatWidget = () => {
  // Customize colors, positions and behavior
  const config = {
    primaryColor: '#6d28d9',
    position: 'bottom-right',
    greeting: 'How can I help you today?'
  }
}
```

### Backend RAG Configuration
```python
# voice_agent.py
RAG_CONFIG = {
    'model': 'gemma3',
    'temperature': 0.7,
    'max_tokens': 500,
    'knowledge_sources': ['faqs', 'policies', 'product_data']
}
```

## 🚨 Common Issues

**🔴 Module Not Found**  
✅ Run `npm install`/`pip install` again  
✅ Verify Python/Node versions

**🔴 API Connection Failed**  
✅ Check `.env` file formatting  
✅ Verify API keys are active  
✅ Ensure CORS is configured properly

**🔴 Audio Processing Issues**  
✅ Check microphone permissions  
✅ Verify Cartesia/LiveKit credits

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create feature branch:  
   `git checkout -b feat/amazing-feature`
3. Commit changes:  
   `git commit -m 'Add amazing feature'`
4. Push to branch:  
   `git push origin feat/amazing-feature`
5. Open a Pull Request

## 📜 License

MIT License - See [LICENSE](LICENSE) for details

---

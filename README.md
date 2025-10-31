# Prompt Buddy - AI Prompt Engineering Assistant

![Prompt Buddy](https://img.shields.io/badge/AI-Prompt%20Engineering-blue)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

A production-grade web application that helps users craft and structure prompts for large language models (LLMs) using industry-standard prompt engineering frameworks.

## 🌟 Features

- **25+ Prompt Frameworks**: Industry-standard frameworks including RACE, TEAM, COT, TOT, CRISPE, CO-STAR, and many more
- **Dual Output Modes**: Generate both text-based and JSON-formatted prompts
- **Purpose-Driven**: Optimized for specific use cases (image generation, research, code generation, etc.)
- **Modern UI**: VS Code-inspired dark theme with smooth animations
- **Mobile Responsive**: Fully optimized for all devices
- **Copy to Clipboard**: One-click copying of generated prompts
- **Real-time Generation**: Fast prompt generation with loading states

## 🎯 Supported Frameworks

### Popular Frameworks
- **RACE** - Role, Action, Context, Expectation
- **TEAM** - Task, Example, Action, Motivation
- **COT** - Chain of Thought (step-by-step reasoning)
- **TOT** - Tree of Thoughts (branching reasoning)
- **CRISPE** - Capacity, Role, Insight, Strategy, Process, Execution
- **CO-STAR** - Context, Objective, Style, Tone, Audience, Response

### Advanced Frameworks
- **REACT** - Reason + Act
- **STaR** - Self-Taught Reasoner
- **PEARL** - Persona, Example, Action, Reflection, Learning
- **INSPIRE** - Instruction, Strategy, Process, Input, Reflection, Evaluation
- **FABRIC** - Facts, Assumptions, Background, Reasoning, Inference, Conclusion
- **LASER** - Limitations, Assumptions, Scope, Examples, Reasoning
- **LEAP** - Learn, Evaluate, Apply, Produce

...and 12 more frameworks! See [src/lib/promptFrameworks.ts](src/lib/promptFrameworks.ts) for the complete list.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui
- **State Management**: React Hooks
- **Icons**: Lucide React
- **Toast Notifications**: Sonner

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prompt-buddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Vercel will auto-detect Vite configuration
4. Deploy!

### Environment Variables

For backend integration, create a `.env` file:

```env
VITE_API_URL=https://api.promptbuddy.app
```

## 🔌 API Integration

The application currently uses a placeholder API endpoint. To connect a real backend:

1. **Update the API endpoint** in `src/lib/promptGenerator.ts`:
   ```typescript
   const response = await fetch(`${import.meta.env.VITE_API_URL}/generate`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(request)
   });
   ```

2. **Backend Requirements**:
   - Endpoint: `POST /generate`
   - Request body:
     ```json
     {
       "baseIdea": "string",
       "type": "text" | "json",
       "purpose": "string",
       "framework": "string" (optional)
     }
     ```
   - Response:
     ```json
     {
       "prompt": "string",
       "framework": "string",
       "type": "text" | "json"
     }
     ```

### Sample Flask Backend

```python
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/generate', methods=['POST'])
def generate_prompt():
    data = request.json
    # Add your LLM integration here (OpenAI, Gemini, etc.)
    
    return jsonify({
        'prompt': generated_prompt,
        'framework': data.get('framework'),
        'type': data['type']
    })

if __name__ == '__main__':
    app.run(debug=True)
```

## 📖 Prompt Frameworks Guide

| Framework | Best For | Complexity |
|-----------|----------|------------|
| RACE | Quick, structured prompts | Beginner |
| COT | Step-by-step reasoning | Intermediate |
| CRISPE | Comprehensive tasks | Advanced |
| CO-STAR | Communication tasks | Intermediate |
| FABRIC | Analytical reasoning | Advanced |
| LEAP | Learning-focused tasks | Intermediate |

## 🎨 Customization

### Design System

The application uses a centralized design system in:
- `src/index.css` - Color tokens and base styles
- `tailwind.config.ts` - Tailwind configuration

### Color Scheme

```css
--primary: 210 100% 58%;      /* Electric blue */
--accent: 190 95% 50%;         /* Cyan */
--background: 220 15% 7%;      /* Dark charcoal */
--card: 220 15% 10%;          /* Card background */
```

## 🗺️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PromptInput.tsx
│   └── ...
├── lib/                # Utilities and logic
│   ├── promptFrameworks.ts
│   ├── promptGenerator.ts
│   └── utils.ts
├── pages/              # Application pages
│   ├── Index.tsx
│   └── NotFound.tsx
├── types/              # TypeScript types
│   └── prompt.ts
└── index.css           # Global styles
```

## 🔮 Future Roadmap

- [ ] User authentication and prompt history
- [ ] Save and share prompts
- [ ] Export prompts as PDF/Markdown
- [ ] Real LLM API integration
- [ ] Prompt templates library
- [ ] Community-shared prompts
- [ ] Analytics and usage tracking
- [ ] Multi-language support
- [ ] AI-powered prompt suggestions
- [ ] Batch prompt generation

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

Built with ❤️ by **Shanmukha** using AI

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For questions or support, please open an issue on GitHub.

---

**Happy Prompt Engineering! 🚀**

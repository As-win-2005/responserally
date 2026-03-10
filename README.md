# 🚀 ResponseRally
### Agentic AI Research & Benchmarking Suite for Multi-LLM Comparison

ResponseRally is a modern **AI benchmarking platform** that allows users to submit a single prompt and **compare responses from multiple Large Language Models (LLMs)** side-by-side.

The system collects responses from different AI models, evaluates them using **performance metrics and AI-based judging**, and displays results in a **clean dashboard with analytics and charts**.

This platform helps **developers, researchers, and AI engineers evaluate model performance, response quality, and efficiency**.

---
<img width="1917" height="632" alt="image" src="https://github.com/user-attachments/assets/8ede31b6-fb95-4e6d-9f00-c6a61a78d1c8" />
<img width="1919" height="744" alt="image" src="https://github.com/user-attachments/assets/87d83eb2-6588-4f5d-a8d8-08be93396e90" />
<img width="1891" height="907" alt="image" src="https://github.com/user-attachments/assets/6a7b4a57-5e5c-4841-9b80-5e2a6e6334c3" />
<img width="1889" height="754" alt="image" src="https://github.com/user-attachments/assets/2df3dee8-3846-4b34-869a-e73722aaff7d" />
<img width="1876" height="900" alt="image" src="https://github.com/user-attachments/assets/84f5baea-853c-4c10-b384-d8575127dbd2" />


<img width="1513" height="90" alt="image" src="https://github.com/user-attachments/assets/ff18c81f-7102-4e18-996d-bd34ad0faa91" />



# 🌟 Features

## 🔹 Multi-Model Prompt Comparison
Submit one prompt and compare responses from multiple AI models simultaneously.

Supported models include:

- OpenAI GPT-4o Mini
- Meta Llama-3
- DeepSeek Chat

---

## 🔹 AI Judge Evaluation
An AI model evaluates responses based on:

- Accuracy
- Clarity
- Completeness

Each response receives a **quality score (1-10)** and the system recommends the **best performing model**.

---

## 🔹 Benchmark Metrics
ResponseRally measures important performance metrics:

| Metric | Description |
|------|------|
| Latency | Time taken to generate response |
| Tokens | Total tokens used |
| Word Count | Length of generated response |
| Quality Score | AI-evaluated response score |

---

## 🔹 Interactive Benchmark Dashboard

The dashboard visualizes performance using charts such as:

- Latency comparison
- Token usage comparison
- Word count comparison
- Quality score comparison

This helps users quickly identify **which model performs best**.

---

## 🔹 Modern Dashboard UI

The frontend includes:

- Clean **white + green professional design**
- Markdown formatted responses
- Interactive metric bars
- Smooth UI transitions
- Responsive layout

---

## 🔹 Dockerized Deployment

The entire application is containerized using **Docker**, which provides:

- Easy setup
- Consistent environment
- Portable deployment
- Simplified hosting

---

# 🧠 System Architecture

```
User Prompt
     │
     ▼
Frontend (React Dashboard)
     │
     ▼
Backend API (Node.js / Express)
     │
     ▼
OpenRouter API
     │
     ▼
Multiple LLM Providers
(GPT-4o | Llama-3 | DeepSeek)
     │
     ▼
AI Judge Evaluation
     │
     ▼
Metrics Calculation
     │
     ▼
Benchmark Dashboard
```

---

# 🧰 Technology Stack

## Frontend
- React.js
- Tailwind CSS
- Chart.js
- Framer Motion
- React Markdown

## Backend
- Node.js
- Express.js
- Axios

## AI Infrastructure
- OpenRouter API
- Multiple LLM Providers
- AI Judge Evaluation

## DevOps
- Docker
- Docker Compose

---

# ⚙️ System Requirements

Before running the project ensure the following tools are installed.

| Tool | Version |
|-----|------|
| Node.js | v18 or higher |
| npm | v9 or higher |
| Docker | Latest |
| Docker Compose | Latest |
| Internet connection | Required for API calls |

---

# 🔑 Environment Setup

Create a `.env` file in the root directory.

```
OPENROUTER_API_KEY=your_openrouter_api_key
```

You can generate an API key from:

https://openrouter.ai/keys

---

# 📦 Installation

Clone the repository:

```
git clone https://github.com/yourusername/responserally.git
```

Navigate to the project directory:

```
cd responserally
```

---

# ▶️ Running the Project (Local Development)

## 1️⃣ Start Backend

Navigate to backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Start backend server:

```
node server.js
```

Backend runs at:

```
http://localhost:5000
```

---

## 2️⃣ Start Frontend

Open another terminal and navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start frontend server:

```
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# 🐳 Running the Project with Docker (Recommended)

Docker provides the easiest way to run the entire application.

## Build Docker Containers

```
docker compose build
```

## Start Containers

```
docker compose up
```

---

## Access the Application

Frontend:

```
http://localhost:3000
```

Backend:

```
http://localhost:5000
```

---

# 📂 Project Structure

```
LLM_Project
│
├── backend
│   ├── providers
│   │   └── openrouterProvider.js
│   │
│   ├── routes
│   │   └── prompt.js
│   │
│   ├── utils
│   │   ├── aiJudge.js
│   │   └── metrics.js
│   │
│   └── server.js
│
├── frontend
│   ├── components
│   │   ├── PromptBox.js
│   │   ├── ResponseCard.js
│   │   ├── ComparisonGrid.js
│   │   ├── MetricsChart.js
│   │   └── BenchmarkChart.js
│   │
│   ├── services
│   │   └── api.js
│   │
│   └── App.js
│
├── docker-compose.yml
├── README.md
└── .env
```

---

# 📊 Example Workflow

1️⃣ User enters a prompt

Example:

```
Explain Photosynthesis
```

2️⃣ Backend sends request to multiple LLM providers

3️⃣ Models generate responses

4️⃣ AI Judge evaluates the responses

5️⃣ Metrics are calculated

6️⃣ Dashboard displays:

- Model responses
- Latency
- Token usage
- Quality score
- Best model recommendation

---

# 🔮 Future Improvements

Possible future upgrades:

- Model leaderboard
- Prompt dataset benchmarking
- Historical benchmark analytics
- Export benchmark reports
- Cloud deployment
- Advanced evaluation metrics



# ⭐ Support

If you found this project useful:

⭐ Star the repository  
🍴 Fork the project  
📢 Share with the AI community  

---

🚀 **ResponseRally – Benchmarking the Future of AI Models**

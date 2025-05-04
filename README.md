# FreqAsk: Resolve Your Queries, Instantly

FreqAsk is a modern FAQ management system with a chatbot interface, designed to provide instant answers to common questions. Built with React, Node.js, and MongoDB, and deployed using Kubernetes.

## Features

- **Interactive FAQ Interface**: Browse through categorized FAQs with an intuitive UI
- **Smart Search**: Real-time search functionality with instant results
- **Chatbot Integration**: AI-powered chatbot for natural language queries
- **Responsive Design**: Works seamlessly across all devices
- **Category-based Navigation**: Easy access to different FAQ categories
- **Modern UI/UX**: Clean and user-friendly interface

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios for API calls
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB
- CORS for cross-origin requests

### Chat Service
- Python
- Natural Language Processing
- Custom AI model

### Infrastructure
- Docker
- Kubernetes
- Minikube for local development

## Prerequisites

- Docker
- Docker Compose
- Minikube
- kubectl
- Node.js (v18 or higher)
- Python (v3.8 or higher)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/FreqAsk.git
cd FreqAsk
```

### 2. Start Minikube
```bash
minikube start
```

### 3. Build Docker Images
```bash
docker-compose build
```

### 4. Deploy to Kubernetes
```bash
kubectl apply -f k8s/
```

### 5. Set up Port Forwarding
```bash
kubectl port-forward service/backend 7001:7000 & kubectl port-forward service/frontend 3000:3000
```

## Accessing the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:7001
- Chat Service: http://localhost:8000

## Project Structure

```
FreqAsk/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── views/         # Page components
│   │   └── assets/        # Static assets
├── backend/               # Node.js backend
│   ├── routes/            # API routes
│   ├── models/            # MongoDB models
│   └── controllers/       # Business logic
├── chat/                  # Python chat service
├── k8s/                   # Kubernetes manifests
└── docker-compose.yml     # Docker Compose configuration
```

## API Endpoints

### FAQ Endpoints
- `GET /api/faqs` - Get all FAQs
- `GET /api/faqs/:categorySlug` - Get FAQs by category
- `GET /api/faqs/wocat/search` - Search FAQs
- `POST /api/faqs` - Create new FAQ
- `DELETE /api/faqs/:id` - Delete FAQ

### Chat Endpoints
- `POST /ask` - Submit query to chatbot

## Development

### Running Locally
1. Start MongoDB:
```bash
docker-compose up mongodb
```

2. Start Backend:
```bash
cd backend
npm install
npm start
```

3. Start Frontend:
```bash
cd frontend
npm install
npm start
```

4. Start Chat Service:
```bash
cd chat
pip install -r requirements.txt
python app.py
```

### Building for Production
```bash
# Build all services
docker-compose build

# Deploy to Kubernetes
kubectl apply -f k8s/
```


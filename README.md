# VectorShift Pipeline Visualization

A modern web application for visualizing and validating pipeline workflows using React and FastAPI.

## 🚀 Features

- Interactive pipeline visualization using ReactFlow
- Real-time pipeline validation
- DAG (Directed Acyclic Graph) detection
- Modern Material-UI based interface
- RESTful API backend

## 🛠️ Tech Stack

### Frontend
- React 18
- Material-UI (MUI) v7
- ReactFlow for graph visualization
- Emotion for styled components

### Backend
- FastAPI
- Python 3.x
- Pydantic for data validation

## 📋 Prerequisites

- Node.js (v14 or higher)
- Python 3.x
- pip (Python package manager)

## 🚀 Getting Started

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd Vectorshift/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd Vectorshift/backend
```

2. Install Python dependencies:
```bash
pip install fastapi uvicorn
```

3. Start the backend server:
```bash
uvicorn main:app --reload
```

The backend API will be available at `http://localhost:8000`

## 🔍 API Endpoints

### GET /
- Health check endpoint
- Returns: `{"Ping": "Pong"}`

### POST /pipelines/parse
- Validates pipeline structure
- Request Body:
  ```json
  {
    "nodes": [
      {"id": "node1"},
      {"id": "node2"}
    ],
    "edges": [
      {
        "id": "edge1",
        "source": "node1",
        "target": "node2"
      }
    ]
  }
  ```
- Returns:
  ```json
  {
    "num_nodes": 2,
    "num_edges": 1,
    "is_dag": true
  }
  ```

## 🧪 Testing

### Frontend Tests
```bash
cd frontend
npm test
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📫 Contact

For any questions or concerns, please open an issue in the repository. 

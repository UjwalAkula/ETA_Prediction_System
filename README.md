---

# 🚚 ETA Prediction System

**Machine Learning–based Delivery Time Estimation**

🌐 **Frontend (Live):**
[https://eta-prediction-system-frontend.onrender.com](https://eta-prediction-system-frontend.onrender.com)

🔌 **Backend API (Docs):**
[https://eta-prediction-system-backend.onrender.com/docs](https://eta-prediction-system-backend.onrender.com/docs)

---

## 📖 Project Overview

The **ETA Prediction System** is a full-stack machine learning project that predicts **delivery time (in minutes)** using multiple real-world logistics factors.

The goal of this project is to simulate how modern delivery platforms like **Amazon, Swiggy, Blinkit, or Flipkart** estimate ETAs using data and machine learning models.

Users enter delivery details through a web interface, and the system returns a predicted delivery time powered by a trained ML model served via an API.

---

## ✨ Features

* Real-time delivery ETA prediction
* Machine learning–based regression model
* Responsive frontend built with React & Tailwind CSS
* FastAPI backend with a production-ready ML pipeline
* Fully Dockerized application
* Deployed as separate frontend & backend services

---

## 🧠 Machine Learning Approach

### Dataset

* Synthetic food delivery dataset (inspired by Kaggle datasets)
* 1,000+ samples
* Combination of numerical and categorical features

### Features Used

* Distance (km)
* Preparation time (minutes)
* Courier experience (years)
* Weather conditions
* Traffic level
* Time of day
* Vehicle type

### Data Preprocessing

* Missing value handling using `SimpleImputer`
* Categorical encoding:

  * `OneHotEncoder`: Weather, Time of Day, Vehicle Type
  * `OrdinalEncoder`: Traffic Level
* All preprocessing and modeling handled using
  **scikit-learn Pipelines & ColumnTransformer**

### Models Evaluated

| Model             | R² Score |
| ----------------- | -------- |
| Linear Regression | **0.82** |
| Ridge Regression  | 0.82     |
| Random Forest     | 0.79     |
| XGBoost           | 0.78     |

**Linear Regression** was chosen due to its strong performance, simplicity, and interpretability.

---

## 🧱 Tech Stack

### Backend

* FastAPI
* scikit-learn
* Pandas / NumPy
* Joblib
* Docker
* Render

### Frontend

* React (Vite)
* Tailwind CSS
* Font Awesome
* Fetch API
* Render

---

## 🏗️ Project Structure

```
Monorepo
│
├── backend   → FastAPI + ML model
│
└── frontend  → React + Tailwind UI
```

* Frontend and backend are deployed as **independent services**
* Communication handled via environment variables (`VITE_API_URL`)
* Each service is containerized using Docker

---

## 🔗 API Usage

### `POST /predict`

**Request Example**

```json
{
  "distance_km": 5.4,
  "preparation_time_min": 18,
  "courier_experience_yrs": 4,
  "weather": "Sunny",
  "traffic_level": "Low",
  "time_of_day": "Evening",
  "vehicle_type": "Bike"
}
```

**Response Example**

```json
{
  "predicted_delivery_time_min": 25.86
}
```

---

## 🛠️ Running Locally

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🚀 Deployment

* **Backend:** Render (Dockerized FastAPI service)
* **Frontend:** Render (Dockerized Nginx static build)

---
Just tell me 👍


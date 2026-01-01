# 🚚 ETA Prediction System

**AI-powered delivery time estimation using Machine Learning**

🔗 **Live Demo:** [https://etapredictionsystem-production.up.railway.app/](https://etapredictionsystem-production.up.railway.app/)

📦 **Backend API:** [https://adaptable-trust-production-76c1.up.railway.app/docs](https://adaptable-trust-production-76c1.up.railway.app/docs)

---

## 📌 Overview

The **ETA Prediction System** is a full-stack machine learning application that predicts **delivery time (in minutes)** based on real-world logistics factors such as:

* Distance
* Traffic conditions
* Weather
* Time of day
* Courier experience
* Vehicle type

This project simulates how companies like **Amazon, Flipkart, Blinkit, and Swiggy** estimate delivery ETAs using data-driven models.

---

## 🎯 Key Features

* ✅ Real-time ETA prediction
* ✅ Machine Learning–based regression model
* ✅ Clean & responsive UI (React + Tailwind)
* ✅ FastAPI backend with trained ML pipeline
* ✅ Dockerized & deployed on Railway
* ✅ Monorepo with independent frontend & backend deployments

---

## 🧠 Machine Learning Details

### 📊 Dataset

* Synthetic food delivery dataset (Kaggle-inspired)
* 1,000+ samples with numerical & categorical features

### ⚙️ Preprocessing

* Missing value handling (SimpleImputer)
* Categorical encoding:

  * OneHotEncoder (Weather, Time of Day, Vehicle Type)
  * OrdinalEncoder (Traffic Level)
* Feature processing handled using **ColumnTransformer & Pipeline**

### 🤖 Models Trained & Evaluated

| Model             | R² Score   |
| ----------------- | ---------- |
| Linear Regression | **0.82** ✅ |
| Ridge Regression  | 0.82       |
| Random Forest     | 0.79       |
| XGBoost           | 0.78       |

👉 **Linear Regression** was selected for its simplicity, interpretability, and strong performance.

---

## 🧱 Tech Stack

### 🔙 Backend

* **FastAPI**
* **scikit-learn**
* **Pandas / NumPy**
* **Joblib**
* **Docker**
* **Railway**

### 🎨 Frontend

* **React (Vite)**
* **Tailwind CSS**
* **FontAwesome Icons**
* **Fetch API**
* **Docker + Nginx**

---

## 🚀 Architecture

```
Monorepo
│
├── backend  → FastAPI + ML model (Railway service)
│
└── frontend → React + Tailwind (Railway service)
```

* Frontend & backend deployed as **separate services**
* Connected using environment variables (`VITE_API_URL`)
* Railway handles networking & scaling

---

## 🔗 API Endpoint

### `POST /predict`

**Request**

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

**Response**

```json
{
  "predicted_delivery_time_min": 25.86
}
```

---
## 🛠️ Local Setup (Optional)

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

## 🌍 Deployment

* **Backend:** Railway (Dockerized FastAPI service)
* **Frontend:** Railway (Dockerized Nginx static build)

---

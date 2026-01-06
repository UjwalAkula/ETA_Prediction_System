---

# ETA Prediction System 🚚

A full-stack machine learning project that predicts **delivery time (ETA in minutes)** based on real-world delivery factors.

The system takes delivery details from a user interface, sends them to a backend ML service, and returns an estimated delivery time — similar to how modern logistics and food delivery platforms work.

---

## Live Application

**Frontend:**
[https://eta-prediction-system-frontend.onrender.com](https://eta-prediction-system-frontend.onrender.com)

**Backend API (Swagger Docs):**
[https://eta-prediction-system-backend.onrender.com/docs](https://eta-prediction-system-backend.onrender.com/docs)

---

## What This Project Does

The ETA Prediction System estimates delivery time using factors such as:

* Distance of delivery
* Order preparation time
* Traffic conditions
* Weather
* Time of day
* Courier experience
* Vehicle type

The prediction is generated using a trained machine learning regression model served via a FastAPI backend.

---

## Key Features

* Real-time ETA prediction
* Machine learning–based regression model
* Clean and responsive UI
* REST API built with FastAPI
* End-to-end ML pipeline using scikit-learn
* Fully Dockerized
* Frontend and backend deployed as separate services

---

## Machine Learning Details

### Dataset

* Synthetic food delivery dataset (Kaggle-inspired)
* 1,000+ data points
* Mix of numerical and categorical features

### Preprocessing

* Missing values handled using `SimpleImputer`
* Categorical encoding:

  * OneHotEncoder for weather, time of day, and vehicle type
  * OrdinalEncoder for traffic level
* Preprocessing and model combined using `Pipeline` and `ColumnTransformer`

### Models Tested

| Model             | R² Score |
| ----------------- | -------- |
| Linear Regression | **0.82** |
| Ridge Regression  | 0.82     |
| Random Forest     | 0.79     |
| XGBoost           | 0.78     |

Linear Regression was selected for its balance of performance, simplicity, and interpretability.

---

## Tech Stack

### Backend

* FastAPI
* scikit-learn
* Pandas, NumPy
* Joblib
* Docker
* Render

### Frontend

* React (Vite)
* Tailwind CSS
* Font Awesome
* Fetch API
* Docker + Nginx
* Render

---

## Project Structure

```
.
├── backend
│   └── FastAPI app with trained ML model
│
└── frontend
    └── React + Tailwind UI
```

* Frontend and backend run as independent services
* API base URL configured using environment variables
* Both services are containerized with Docker

---

## API Endpoint

### POST `/predict`

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

## Running the Project Locally

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

## Deployment

* Backend deployed on **Render** as a Dockerized FastAPI service
* Frontend deployed on **Render** as a Dockerized Nginx static build

---

## Future Improvements

* Add real traffic and weather APIs
* Model retraining with real delivery data
* ETA confidence intervals
* Authentication and request logging
* Model monitoring and drift detection

---

from fastapi import FastAPI
import joblib
import pandas as pd

from schemas import ETAPredictionInput, ETAPredictionOutput
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Delivery ETA Prediction API",
    description="Predict food delivery ETA using ML",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained pipeline
model = joblib.load("model/delivery_eta_model.pkl")


@app.get("/")
def home():
    return {"message": "Delivery ETA Prediction API is running 🚀"}


@app.post("/predict", response_model=ETAPredictionOutput)
def predict_eta(data: ETAPredictionInput):

    input_df = pd.DataFrame([{
        "Distance_km": data.distance_km,
        "Preparation_Time_min": data.preparation_time_min,
        "Courier_Experience_yrs": data.courier_experience_yrs,
        "Weather": data.weather,
        "Traffic_Level": data.traffic_level,
        "Time_of_Day": data.time_of_day,
        "Vehicle_Type": data.vehicle_type
    }])

    prediction = model.predict(input_df)[0]

    return {
        "predicted_delivery_time_min": round(float(prediction), 2)
    }

from pydantic import BaseModel, Field
from typing import Literal

class ETAPredictionInput(BaseModel):
    distance_km: float = Field(..., gt=0, example=5.4)
    preparation_time_min: int = Field(..., ge=0, example=18)
    courier_experience_yrs: float = Field(..., ge=0, example=4)

    weather: str = Field(..., example="Sunny")
    traffic_level: Literal["Low", "Medium", "High"]
    time_of_day: str = Field(..., example="Evening")
    vehicle_type: str = Field(..., example="Bike")


class ETAPredictionOutput(BaseModel):
    predicted_delivery_time_min: float
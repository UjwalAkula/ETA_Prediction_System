import { useState } from "react";
import ResultCard from "./ResultCard";

const EtaForm = () => {
  const [formData, setFormData] = useState({
    distance_km: "",
    preparation_time_min: "",
    courier_experience_yrs: "",
    weather: "Sunny",
    traffic_level: "Low",
    time_of_day: "Morning",
    vehicle_type: "Bike",
  });

  const [eta, setEta] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError("");
    setEta(null);
    
    if (
      !formData.distance_km ||
      !formData.preparation_time_min ||
      !formData.courier_experience_yrs
    ) {
      setError(
        "Please enter valid distance, preparation time, and courier experience."
      );
      return;
    }

    setLoading(true);

    const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

    try {
      const response = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          distance_km: parseFloat(formData.distance_km),
          preparation_time_min: parseInt(formData.preparation_time_min),
          courier_experience_yrs: parseFloat(
            formData.courier_experience_yrs
          ),
          weather: formData.weather,
          traffic_level: formData.traffic_level,
          time_of_day: formData.time_of_day,
          vehicle_type: formData.vehicle_type,
        }),
      });

      if (!response.ok) {
        throw new Error("Prediction failed");
      }

      const data = await response.json();
      setEta(data.predicted_delivery_time_min);
    } catch (err) {
      setError("Failed to predict ETA. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-800 " +
    "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500";

  return (
    <div className="max-w-3xl mx-auto py-14 px-4">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10">
        <h2 className="text-xl font-medium text-gray-900 text-center mb-6 tracking-wide">
          Delivery ETA Prediction
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Distance */}
          <input
            type="number"
            min="0.5"
            max="50"
            step="0.1"
            name="distance_km"
            placeholder="Distance (km) e.g. 5.4"
            className={inputClass}
            onChange={handleChange}
          />

          {/* Preparation Time */}
          <input
            type="number"
            min="5"
            max="60"
            name="preparation_time_min"
            placeholder="Preparation time (5–60 min)"
            className={inputClass}
            onChange={handleChange}
          />

          {/* Courier Experience */}
          <input
            type="number"
            min="0"
            max="15"
            step="0.5"
            name="courier_experience_yrs"
            placeholder="Courier experience (years)"
            className={inputClass}
            onChange={handleChange}
          />

          {/* Weather */}
          <select
            name="weather"
            className={inputClass}
            onChange={handleChange}
          >
            <option selected disabled>Weather Condition</option>
            <option>Sunny</option>
            <option>Rainy</option>
            <option>Cloudy</option>
            <option>Foggy</option>
          </select>

          {/* Traffic */}
          <select
            name="traffic_level"
            className={inputClass}
            onChange={handleChange}
          >
            <option selected disabled>Traffic Level</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          {/* Time of Day */}
          <select
            name="time_of_day"
            className={inputClass}
            onChange={handleChange}
          >
            <option selected disabled>Time of Day</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>Night</option>
          </select>

          {/* Vehicle */}
          <select
            name="vehicle_type"
            className={inputClass}
            onChange={handleChange}
          >
            <option selected disabled>Vehicle</option>
            <option>Bike</option>
            <option>Scooter</option>
            <option>Car</option>
          </select>
        </div>

        {/* Error */}
        {error && (
          <p className="mt-4 text-sm text-red-600 text-center">{error}</p>
        )}

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-8 w-full bg-indigo-600 text-white py-3.5 rounded-xl
                     text-sm font-medium hover:bg-indigo-700
                     transition-all shadow-sm hover:shadow-md"
        >
          {loading ? "Predicting..." : "Predict ETA"}
        </button>

        {/* Result */}
        <ResultCard eta={eta} />
      </div>
    </div>
  );
};

export default EtaForm;

import { useState } from "react";
import ResultCard from "./ResultCard";

const EtaForm = () => {
  const [formData, setFormData] = useState({
    distance_km: "",
    preparation_time_min: "",
    courier_experience_yrs: "",
    weather: "",
    traffic_level: "",
    time_of_day: "",
    vehicle_type: "",
  });

  const [eta, setEta] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL =
    import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

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
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          distance_km: Number(formData.distance_km),
          preparation_time_min: Number(formData.preparation_time_min),
          courier_experience_yrs: Number(formData.courier_experience_yrs),
          weather: formData.weather,
          traffic_level: formData.traffic_level,
          time_of_day: formData.time_of_day,
          vehicle_type: formData.vehicle_type, 
        }),
      });

      if (!response.ok) throw new Error();

      const data = await response.json();
      setEta(data.predicted_delivery_time_min);
    } catch {
      setError("Failed to predict ETA. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-slate-300 rounded-lg px-4 py-3 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-indigo-500";

  const labelClass = "text-sm font-medium text-slate-700 mb-1";

  return (
    <div className="max-w-3xl mx-auto py-14 px-4">
      <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-10">
        <h2 className="text-2xl font-semibold text-slate-900 text-center mb-8">
          Delivery ETA Prediction
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Distance */}
          <div>
            <label className={labelClass}>Delivery Distance (km)</label>
            <input
              type="number"
              step="0.1"
              name="distance_km"
              placeholder="e.g. 5.4"
              className={inputClass}
              onChange={handleChange}
            />
          </div>

          {/* Preparation Time */}
          <div>
            <label className={labelClass}>Food Preparation Time (min)</label>
            <input
              type="number"
              name="preparation_time_min"
              placeholder="e.g. 20"
              className={inputClass}
              onChange={handleChange}
            />
          </div>

          {/* Courier Experience */}
          <div>
            <label className={labelClass}>Courier Experience (years)</label>
            <input
              type="number"
              step="0.5"
              name="courier_experience_yrs"
              placeholder="e.g. 3"
              className={inputClass}
              onChange={handleChange}
            />
          </div>

          {/* Weather */}
          <div>
            <label className={labelClass}>Weather Condition</label>
            <select
              name="weather"
              value={formData.weather}
              className={inputClass}
              onChange={handleChange}
            >
              <option value="" disabled>Select weather</option>
              <option value="Sunny">Sunny</option>
              <option value="Rainy">Rainy</option>
              <option value="Cloudy">Cloudy</option>
              <option value="Foggy">Foggy</option>
            </select>
          </div>

          {/* Traffic */}
          <div>
            <label className={labelClass}>Traffic Level</label>
            <select
              name="traffic_level"
              value={formData.traffic_level}
              className={inputClass}
              onChange={handleChange}
            >
              <option value="" disabled>Select traffic</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Time of Day */}
          <div>
            <label className={labelClass}>Time of Day</label>
            <select
              name="time_of_day"
              value={formData.time_of_day}
              className={inputClass}
              onChange={handleChange}
            >
              <option value="" disabled>Select time</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>

          {/* Vehicle */}
          <div className="md:col-span-2">
            <label className={labelClass}>Delivery Vehicle</label>
            <select
              name="vehicle_type"
              value={formData.vehicle_type}
              className={inputClass}
              onChange={handleChange}
            >
              <option value="" disabled>Select vehicle</option>

              <option value="Bike">2-Wheeler (Bike)</option>
              <option value="Scooter">2-Wheeler (Scooter)</option>
              <option value="Car">4-Wheeler (Car)</option>
            </select>
          </div>
        </div>

        {error && (
          <p className="mt-4 text-sm text-red-600 text-center">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-10 w-full bg-indigo-600 text-white py-3 rounded-lg
                     font-medium hover:bg-indigo-700 transition"
        >
          {loading ? "Predicting ETA..." : "Predict ETA"}
        </button>

        <ResultCard eta={eta} />
      </div>
    </div>
  );
};

export default EtaForm;

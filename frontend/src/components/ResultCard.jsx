const ResultCard = ({ eta }) => {
  if (!eta) return null;

  let insight;
  if (eta <= 25) {
    insight = "Likely smooth delivery under current conditions";
  } else if (eta <= 45) {
    insight = "Typical delivery duration for the selected inputs";
  } else {
    insight = "Extended ETA due to traffic, distance, or weather conditions";
  }

  return (
    <div className="mt-8 bg-emerald-50 border border-emerald-200
                    rounded-2xl p-8 text-center">
      <p className="text-sm uppercase tracking-wide text-emerald-700">
        Estimated Delivery Time
      </p>

      <p className="text-5xl font-semibold text-emerald-900 mt-3 tracking-tight">
        ≈ {Number(eta).toFixed(1)} min
      </p>

      <p className="mt-3 text-sm text-emerald-800">
        {insight}
      </p>

      <p className="mt-1 text-xs text-emerald-600">
        Estimate based on distance, traffic level, weather, and courier experience
      </p>
    </div>
  );
};

export default ResultCard;

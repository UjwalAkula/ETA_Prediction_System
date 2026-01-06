import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 text-white p-2 rounded-lg">
            <FontAwesomeIcon icon={faTruckFast} className="text-sm" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">
              Delivery ETA Prediction
            </p>
            <p className="text-xs text-slate-500">
              AI-powered intelligence
            </p>
          </div>
        </div>

        {/* Right label */}
        <span className="hidden sm:block text-xs text-slate-500 tracking-wide uppercase">
          Machine Learning System
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

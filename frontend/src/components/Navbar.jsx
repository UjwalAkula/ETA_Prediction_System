import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-900 font-semibold">
          <FontAwesomeIcon icon={faTruck} />
          ETA Predictor
        </div>
        <span className="text-sm text-gray-500 hidden sm:block">
          AI Delivery ETA
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

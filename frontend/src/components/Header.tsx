import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="mx-auto max-w-7xl flex justify-between px-6">
        <span>
          <Link to="/" className="text-white font-semibold text-xl">
            Booking.com
          </Link>
        </span>
        <span>
          <Link
            to="/sign-in"
            className="bg-white px-4 py-2 rounded text-blue-700 font-medium text-sm"
          >
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;

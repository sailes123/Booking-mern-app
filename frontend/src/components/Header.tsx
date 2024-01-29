import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 py-6 ">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-light">
          <Link to="/">My Holiday</Link>
        </span>
        <span className="flex space-x-2">
          <Link to="/sign-in" className="flex items-center bg-white text-blue-600 font-bold px-3 hover:bg-gray-100 hover:text-green-500">Sign In</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;

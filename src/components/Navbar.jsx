import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">MyWebsite</h1>
      <div>
        <Link className="mx-2 hover:underline" to="/">
          Home
        </Link>
        <Link className="mx-2 hover:underline" to="/services">
          Services
        </Link>
        <Link className="mx-2 hover:underline" to="/get-started">
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

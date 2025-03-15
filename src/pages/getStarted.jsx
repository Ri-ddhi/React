import { useState } from "react";

const GetStarted = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold">Get Started Now</h2>
      <p className="mt-4 text-lg">Join us today and build amazing projects!</p>

      {/* Buttons */}
      <div className="mt-6">
        <button className="px-4 py-2 bg-green-600 text-white rounded mr-4">
          Sign Up
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setShowLogin(!showLogin)}
        >
          Login
        </button>
      </div>

      {/* Login Form (Shown when showLogin is true) */}
      {showLogin && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow-md w-80 mx-auto">
          <h3 className="text-xl font-semibold mb-2">Login</h3>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-2 border rounded"
          />
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded mt-2">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default GetStarted;

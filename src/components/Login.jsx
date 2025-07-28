import React from "react";
import SideImage from "../assets/bmit.png";

function Login() {
  return (
    <div className="flex flex-row h-screen w-full">
      {/* Left side image */}
      <div className="w-1/2 h-full bg-orange-500 flex justify-center items-center" >
        <img
          src={SideImage}
          alt="Printer Illustration"
          className="h-4/5 object-contain"
        />
      </div>

      {/* Right side form */}
      <div className="w-1/2 h-full flex px-8 bg-white">
        <h1 className="text-3xl font-bold mb-2 text-center text-blue-700">
          India’s First Printing App
        </h1>
        <h2 className="text-lg font-semibold text-gray-600 mb-6">Admin Login</h2>

        {/* Your login form goes here */}
        {/* Example: */}
        <form className="w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

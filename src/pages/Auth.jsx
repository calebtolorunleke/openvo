import React, { useState } from "react";

const Auth = () => {
  const [mode, setMode] = useState("login");
  return (
    <div className="max-w-7xl mx-auto px-12 flex justify-center">
      <div className="pt-10">
        <div className="bg-white px-10 py-10 rounded w-87.5">
          <h1 className="text-xl font-bold text-gray-700 pb-4">
            {mode === "signup" ? "Sign Up" : "Sign In"}
          </h1>
          <form action="" className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-200 rounded py-1"
              />
            </div>{" "}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="password" className="text-gray-500 text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-200 rounded py-1"
              />
            </div>{" "}
            <div className="pt-5">
              <button className="px-4 py-2 bg-blue-400 rounded text-white text-sm">
                {mode === "signup" ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </form>

          <div className="pt-5 text-center">
            {mode === "signup" ? (
              <p className="text-sm text-gray-500">
                {" "}
                Already have an account?{" "}
                <span
                  className="text-blue-400 cursor-pointer"
                  onClick={() => setMode("login")}
                >
                  Login
                </span>{" "}
              </p>
            ) : (
              <p className="text-sm text-gray-500">
                {" "}
                Don't have an account?{" "}
                <span
                  className="text-blue-400 cursor-pointer"
                  onClick={() => setMode("signup")}
                >
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

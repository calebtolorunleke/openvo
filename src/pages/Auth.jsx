import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [mode, setMode] = useState("login");
  const [error, setError] = useState(null);
  const { signup, login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signup(data);
    } else {
      result = login(data);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-12 flex justify-center">
      <div className="pt-10">
        <div className="bg-white px-10 py-7 rounded w-87.5">
          <h1 className="text-xl font-bold text-gray-700 pb-4">
            {mode === "signup" ? "Sign Up" : "Sign In"}
          </h1>
          <span className="text-red-600">{error}</span>
          <form
            action=""
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="border border-gray-200 rounded py-1"
              />
            </div>
            {errors.email && <span>{errors.email.message}</span>}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="password" className="text-gray-500 text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password must be less than 12 characters",
                  },
                })}
                className="border border-gray-200 rounded py-1"
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </div>{" "}
            <div className="pt-5">
              <button
                className="px-4 py-2 bg-blue-400 rounded text-white text-sm"
                type="submit"
              >
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

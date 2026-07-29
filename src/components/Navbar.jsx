import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-purple-600 flex justify-between min-w-2xl pb-10">
      <div className="flex gap-10">
        {" "}
        <Link to="/">Home</Link>
        <Link to="/about">Profile</Link>
      </div>
      <Link to="/login">{user.isAuth ? "Logout" : "Login"}</Link>
    </div>
  );
};

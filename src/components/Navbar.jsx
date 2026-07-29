import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const hanldeLogout = ({ name }) => {
    logout(name);
  };
  return (
    <div className="text-purple-600 flex justify-between min-w-2xl pb-10">
      <div className="flex gap-10">
        {" "}
        <Link to="/">Home</Link>
        <Link to="/about">Profile</Link>
      </div>

      {user.isAuth ? <button>Logout</button> : <Link to="/login">Login</Link>}
    </div>
  );
};

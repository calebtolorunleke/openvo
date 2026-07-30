// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../AuthContext";

// export const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   const hanldeLogout = ({ name }) => {
//     logout(name);
//   };
//   return (
//     <div className="text-purple-600 flex justify-between min-w-2xl pb-10">
//       <div className="flex gap-10">
//         {" "}
//         <Link to="/">Home</Link>
//         <Link to="/about">Profile</Link>
//       </div>

//       {user.isAuth ? <button>Logout</button> : <Link to="/login">Login</Link>}
//     </div>
//   );
// };

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navList = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Cart", url: "/checkout" },
  ];
  return (
    <nav className="bg-white py-3 max-w-7xl mx-auto px-12">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-semibold text-xl">
          ShopHub
        </Link>{" "}
        <div className="flex gap-10">
          {navList.map((n) => (
            <Link
              to={n.url}
              className="text-gray-700-400 hover:text-blue-400"
              key={n.id}
            >
              {n.name}
            </Link>
          ))}{" "}
        </div>
        <div className="flex gap-3 items-center">
          <Link
            to="/auth"
            className="text-white bg-gray-400 px-3 py-2 text-sm rounded "
          >
            Login
          </Link>
          <Link
            to="/auth"
            className="bg-blue-400 text-sm text-white px-3 py-2 rounded"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

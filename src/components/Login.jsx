import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const { user, login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name) {
      return alert("kindly enter a default name");
    }

    login(name);
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold pb-5">Login</h1>
      <form className="text-white flex gap-5">
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-400"
        />
        <button className="bg-gray-600 p-1 rounded px-3" onClick={handleLogin}>
          Login
        </button>
      </form>

      {user.isAuth && <h1>user logged in</h1>}
    </div>
  );
};

export default Login;

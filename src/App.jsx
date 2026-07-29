import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Notfound from "./components/Notfound";
import { Navbar } from "./components/Navbar";
import { AuthContext } from "./AuthContext";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({ name: "", isAuth: false });

  const login = (name) => {
    setUser({ name: name, isAuth: true });
  };

  return (
    <BrowserRouter>
      <Navbar />{" "}
      <AuthContext.Provider value={{ user, login }}>
        {" "}
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Login />} path="/login" />
          <Route element={<Notfound />} path="*" />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;

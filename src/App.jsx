// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Login from "./components/Login";
// import Notfound from "./components/Notfound";
// import { Navbar } from "./components/Navbar";
// import { AuthContext } from "./AuthContext";
// import { useState } from "react";

// const App = () => {
//   const [user, setUser] = useState({ name: "", isAuth: false });

//   const login = (name) => {
//     setUser({ name: name, isAuth: true });
//   };

//   const logout = (name) => {
//     setUser({ name: "", isAuth: false });
//   };

//   return (
//     <BrowserRouter>
//       <AuthContext.Provider value={{ user, login, logout }}>
//         <Navbar />{" "}
//         <Routes>
//           <Route element={<Home />} path="/" />
//           <Route element={<About />} path="/about" />
//           <Route element={<Login />} path="/login" />
//           <Route element={<Notfound />} path="*" />
//         </Routes>
//       </AuthContext.Provider>
//     </BrowserRouter>
//   );
// };

// export default App;

// import React, { useEffect } from "react";

// const App = () => {

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users",
//         );
//         const data = response.json();
//         console.log(data);
//       } catch (error) {}
//     };
//     fetchUser();
//   }, []);

//   return <div>App</div>;
// };

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Auth />} path="/auth" />
        <Route element={<Checkout />} path="/checkout" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

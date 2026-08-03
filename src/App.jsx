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
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./context/CartContext";
import ProtectedRoute from "./guards/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Auth />} path="/auth" />
            <Route
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
              path="/checkout"
            />
            <Route
              element={
                <ProtectedRoute>
                  <ProductDetails />
                </ProtectedRoute>
              }
              path="/products/:id"
            />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

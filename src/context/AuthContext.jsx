import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("currentUserEmail")
      ? { email: localStorage.getItem("currentUserEmail") }
      : null,
  );

  const signup = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      return { success: false, error: "Email already exists" };
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("user", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);

    setUser({ email });

    return { success: true };
  };

  const login = () => {};

  const logout = () => {
    localStorage.removeItem("currentUserEmail");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signup, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

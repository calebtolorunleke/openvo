import { createContext, useContext, useState } from "react";

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
    localStorage.setItem("users", JSON.stringify(users));
    // localStorage.setItem("currentUserEmail", email);

    setUser({ email });

    return { success: true, message: "user signed up" };
  };

  const login = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      return { success: false, error: "invalid email or password" };
    }

    localStorage.setItem("currentUserEmail", email);
    setUser({ email });
  };

  const logout = () => {
    localStorage.removeItem("currentUserEmail");
    // localStorage.removeItem("users");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signup, user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

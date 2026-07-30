import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      return { success: false, error: "Email already exists" };
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setUser({ email });

    return { success: true };
  };

  const login = () => {};

  return (
    <AuthContext.Provider value={{ signup, user }}>
      {children}
    </AuthContext.Provider>
  );
};

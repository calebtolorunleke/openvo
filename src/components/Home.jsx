import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Home</h1>
      {user.isAuth ? (
        <p>User is logged in</p>
      ) : (
        <p>You are not logged in. Go to the login page to sign in</p>
      )}
    </div>
  );
};

export default Home;

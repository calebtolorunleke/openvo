import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Profile</h1>
      <p>Name:{user.name}</p>
    </div>
  );
};

export default About;

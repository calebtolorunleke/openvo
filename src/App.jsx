import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />{" "}
    </div>
  );
};

export default App;

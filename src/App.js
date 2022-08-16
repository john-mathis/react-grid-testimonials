import React from "react";
import Card from "./Components/Cards/Card";
import userData from "./Components/User Data/userData";

import "..//src//App.css";

const App = () => {
  return (
    <div className="main-container">
      <Card data={userData} />
    </div>
  );
};

export default App;

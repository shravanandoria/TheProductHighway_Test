import React, { useState } from "react";
import List from "./Component/List";

export default function App() {
  const [isLevelChecked, setIsLevelChecked] = useState({
    level: 0,
    isChecked: false,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10vh",
      }}
    >
      <List
        setIsLevelChecked={setIsLevelChecked}
        isLevelChecked={isLevelChecked}
      />
    </div>
  );
}

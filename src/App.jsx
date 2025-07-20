import { useState } from "react";
import List from "./Component/List";
import "./App.css";

function App() {
  const [parents, setParents] = useState([
    {
      id: 0,
      checkedChildId: null,
    },
  ]);

  const handleAddParentList = () => {
    const lastId = parents.length === 0 ? 0 : parents[parents.length - 1].id;
    setParents((prev) => [...prev, { id: lastId + 1, checkedChildId: null }]);
  };

  const handleChecked = (parentId, childId) => {
    console.log({ parentId, childId });

    setParents((prev) =>
      prev.map((item) =>
        item.id === parentId
          ? {
              ...item,
              checkedChildId: childId,
            }
          : item
      )
    );
  };

  const handleRemoveParent = (id) => {
    setParents((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "centers",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>The Product Highway</h1>
      <div style={{ marginTop: "10px", marginBottom: "30px" }}>
        <button onClick={handleAddParentList} style={{ fontSize: "20px" }}>
          Add a new parent{" "}
        </button>
      </div>
      <div className="container">
        <div className="parent-container">
          {parents.map((_, i) => (
            <List
              key={parents[i].id}
              parent={parents[i]}
              parentId={parents[i].id}
              childId={0}
              checkedChildId={parents[i].checkedChildId}
              setIdChecked={handleChecked}
              handleRemoveParent={handleRemoveParent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

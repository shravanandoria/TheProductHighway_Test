import React, { useEffect, useState } from "react";

const List = ({
  nestedLength = 0,
  currentLevel = 0,
  setIsLevelChecked,
  isLevelChecked,
}) => {
  console.log(currentLevel);
  const [childList, setChildList] = useState([]);
  const [disableAddList, setDisableAddList] = useState(false);

  const handleAddChild = () => {
    setChildList((prev) => [...prev, {}]);
    setDisableAddList(true);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid black",
          padding: "6px",
          gap: "5px",
          marginLeft: `${nestedLength}px`,
        }}
      >
        <div style={{ display: "flex", gap: "6px", padding: "6px" }}>
          <label htmlFor="">
            <input
              type="checkbox"
              checked={
                isLevelChecked?.isChecked &&
                currentLevel >= isLevelChecked.level
              }
            />
          </label>
          <div>
            <button disabled={disableAddList} onClick={handleAddChild}>
              Nest List
            </button>
            <button
              onClick={() =>
                setIsLevelChecked((prev) => ({
                  level: currentLevel,
                  isChecked: !prev.isChecked,
                }))
              }
            >
              Select List
            </button>
          </div>
        </div>
        <div>
          {childList.map((e, i) => (
            <List
              nestedLength={30}
              currentLevel={currentLevel + 1}
              setIsLevelChecked={setIsLevelChecked}
              isLevelChecked={isLevelChecked}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;

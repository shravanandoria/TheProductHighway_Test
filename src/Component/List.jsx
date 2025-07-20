import React, { useState } from "react";

const List = ({
  parent,
  parentId,
  childId,
  checkedChildId,
  setIdChecked = () => {},
  handleRemoveParent = () => {},
}) => {
  const [hasChild, setHasChild] = useState(false);

  const handleAddList = () => {
    setHasChild(true);
  };

  const removeList = () => {
    setHasChild(false);
  };

  const handleChecked = () => {
    setIdChecked(parentId, childId);
  };

  const removeParent = () => {
    handleRemoveParent(parentId);
  };

  return (
    <div>
      <div
        className="list-container"
        style={{ position: "relative", left: "30px" }}
      >
        <label htmlFor="">
          <input
            type="checkbox"
            defaultChecked={false}
            checked={
              (parentId === parent.id && parent.checkedChildId == 0) ||
              (parent.checkedChildId &&
                parentId === parent.id &&
                childId >= parent.checkedChildId)
            }
          />
        </label>
        <button onClick={handleAddList}>Add List</button>
        <button onClick={handleChecked}>Select List</button>
        <button onClick={removeList}>Remove Child</button>
        {childId === 0 && <button onClick={removeParent}>Remove This Parent</button>}
      </div>
      <div
        className="child-container"
        style={{ position: "relative", left: "30px" }}
      >
        {hasChild && (
          <List
            parent={parent}
            parentId={parentId}
            childId={childId + 1}
            checkedChildId={checkedChildId}
            setIdChecked={setIdChecked}
          />
        )}
      </div>
    </div>
  );
};

export default List;

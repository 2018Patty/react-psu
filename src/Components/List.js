import React from "react";

export default ({ todo, onDelete }) => {
  return (
    <div>
      {todo.title} <button onClick={onDelete}>X</button>
    </div>
  );
};

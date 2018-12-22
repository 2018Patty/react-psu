import React from "react";

export default ({ value, onChangeInputTodo }) => {
  return <input value={value} onChange={event => onChangeInputTodo(event)} />;
};

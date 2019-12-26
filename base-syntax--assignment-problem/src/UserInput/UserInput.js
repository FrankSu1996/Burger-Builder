import React from "react";

const UserInput = props => {
  const style = {
    border: "2px solid red"
  };

  return (
    <input
      type="text"
      style={style}
      onChange={props.changeName}
      value={props.userName}
    ></input>
  );
};

export default UserInput;

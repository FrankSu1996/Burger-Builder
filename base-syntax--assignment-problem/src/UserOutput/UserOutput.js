import React from "react";
import "./UserOutput.css";

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>Random Text</p>
      <p>UserName = {props.userName}</p>
    </div>
  );
};

export default UserOutput;

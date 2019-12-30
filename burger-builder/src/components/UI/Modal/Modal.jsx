import React from "react";
import styles from "./Modal.module.css";

const modal = props => (
  <div
    className={styles.Modal}
    style={{
      display: props.show ? "inline" : "none",
      transform: props.show ? "translateY(0)" : "translateY(-11vh)",
      opacity: props.show ? "1" : "0"
    }}
  >
    {props.children}
  </div>
);

export default modal;

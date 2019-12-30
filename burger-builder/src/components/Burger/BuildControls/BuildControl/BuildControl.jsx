import React from "react";
import styles from "./BuildControl.module.css";

const buildControl = props => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Remove}>Remove</button>
    <button className={styles.Add} onClick={props.added}>
      Add
    </button>
  </div>
);

export default buildControl;

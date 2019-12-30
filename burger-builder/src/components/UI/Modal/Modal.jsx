import React from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <React.Fragment>
    <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
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
  </React.Fragment>
);

export default modal;

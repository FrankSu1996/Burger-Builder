import React from "react";
import burgerLogo from "../../Assets/images/burger-logo.png";
import styles from "./Logo.module.css";

const logo = () => (
  <div className={styles.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;

import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.module.css";

const sideDrawer = () => {
  return (
    <div className={styles.SideDrawer}>
      <Logo></Logo>
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </div>
  );
};

export default sideDrawer;

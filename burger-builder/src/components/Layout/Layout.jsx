import React from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <main className={styles.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;

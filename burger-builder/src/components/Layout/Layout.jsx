import React from "react";

const layout = props => {
  return (
    <React.Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;

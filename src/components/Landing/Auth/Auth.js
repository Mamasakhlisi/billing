import React from "react";
import { Drawer } from "antd";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = ({ visibleAuth, onClose, authType }) => {

  return (
    <Drawer
      width={400}
      title={authType ? "რეგისტრაცია" : "ავტორიზაცია"}
      placement="right"
      onClose={onClose}
      visible={visibleAuth}
    >
      {authType ? <SignUp /> : <SignIn />}
    </Drawer>
  );
};

export default Auth;

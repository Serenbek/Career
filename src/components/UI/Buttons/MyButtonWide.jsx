import scss from "./MyButton.module.scss";
import React from "react";

const MyButtonWide = ({ children, ...props }) => {
  return (
    <button {...props} className={scss.My__btn_wide}>
      {children}
    </button>
  );
};

export default MyButtonWide;
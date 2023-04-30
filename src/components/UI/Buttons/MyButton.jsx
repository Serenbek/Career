import React from "react";
import scss from "./MyButton.module.scss";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={scss.My__btn}>
      {children}
    </button>
  );
};

export default MyButton;
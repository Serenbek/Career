import React from "react";
import scss from "./MyButton.module.scss";

const ClearButton = ({ children, ...props }) => {
  return (
    <button {...props} className={scss.My__btn_clear}>
      {children}
    </button>
  );
};

export default ClearButton;
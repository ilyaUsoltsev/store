import React from "react";
import "./custom-button.scss";

interface ICustomButtonProps {
  children: any;
  customClass?: string;
  [x: string]: any;
}

function CustomButton({
  children,
  customClass = "",
  ...otherProps
}: ICustomButtonProps) {
  return (
    <button className={`${customClass} custom-button`} {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;

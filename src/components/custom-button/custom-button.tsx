import React from "react";
import "./custom-button.scss";

interface ICustomButtonProps {
  children: any;
  [x: string]: any;
}

function CustomButton({ children, ...otherProps }: ICustomButtonProps) {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;

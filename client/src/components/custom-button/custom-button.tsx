import React from "react";
import "./custom-button.scss";
import { CustomButtonContainer } from "./custom-button.styles";

export interface ICustomButtonProps {
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
    <CustomButtonContainer
      className={`${customClass} custom-button`}
      {...otherProps}
    >
      {children}
    </CustomButtonContainer>
  );
}

export default CustomButton;

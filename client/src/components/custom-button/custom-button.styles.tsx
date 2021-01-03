import styled, { css } from "styled-components";
import { ICustomButtonProps } from "./custom-button";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid black;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  ${buttonStyles}
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  border: 1px solid #4285f4;
  &:hover {
    background-color: #357ae8;
    color: white;
    border: 1px solid transparent;
  }
`;

const getButtonStyles = (props: ICustomButtonProps) => {
  const config: { [x: string]: any } = {
    "google-sign-in": googleSignInStyles,
    inverted: invertedButtonStyles,
  };
  return props.customClass ? config[props.customClass] : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;

  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  ${buttonStyles}
  text-transform: uppercase;
  font-weight: bolder;

  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;

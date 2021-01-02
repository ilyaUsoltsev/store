import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

interface WrappedComponentProps {
  [x: string]: any;
  isLoading: boolean;
}

const WithSpinner = (WrappedComponent: any) => ({
  isLoading,
  ...otherProps
}: WrappedComponentProps) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;

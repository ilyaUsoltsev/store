import React from "react";
import "./form-input.scss";

interface IFormInputProps {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  label?: string;
  value?: string;
  [x: string]: any;
}

function FormInput({
  handleChange,
  label,
  value,
  ...otherProps
}: IFormInputProps) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label && (
        <label className={`${value ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;

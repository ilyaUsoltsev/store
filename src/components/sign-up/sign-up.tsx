import React, { useState, Dispatch, FormEvent } from "react";
import { connect } from "react-redux";
import { ISingUpState } from "../../models/auth";
import { UserActionTypes } from "../../redux/user/action-types";
import { singUpStart } from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-up.scss";

interface ISignUpProps {
  signUpWithEmailAndPassword?: (
    email: string,
    password: string,
    displayName: string
  ) => {};
}

const SignUp = ({ signUpWithEmailAndPassword }: ISignUpProps) => {
  const [userCreds, setUserCreds] = useState<ISingUpState>({
    email: "",
    password: "",
    displayName: "",
    confirmPassword: "",
  });

  const { password, displayName, email, confirmPassword } = userCreds;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords aint the same!");
      return;
    }
    signUpWithEmailAndPassword!(email, password, displayName);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setUserCreds({ ...userCreds, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          handleChange={handleChange}
          label="Display Name"
          required
          type="text"
          name="displayName"
          value={displayName}
        />
        <FormInput
          handleChange={handleChange}
          label="E-mail"
          required
          type="email"
          name="email"
          value={email}
        />
        <FormInput
          handleChange={handleChange}
          label="Password"
          required
          type="password"
          name="password"
          value={password}
        />
        <FormInput
          handleChange={handleChange}
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
        />
        <CustomButton type="submit">SING UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
  signUpWithEmailAndPassword: (
    email: string,
    password: string,
    displayName: string
  ) => dispatch(singUpStart({ email, password, displayName })),
});

export default connect<any>(null, mapDispatchToProps)(SignUp);

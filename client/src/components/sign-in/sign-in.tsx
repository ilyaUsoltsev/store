import React, { Dispatch, FormEvent, useState } from "react";
import { connect } from "react-redux";
import { IEmailAndPassword } from "../../models/auth";
import { UserActionTypes } from "../../redux/user/action-types";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-in.scss";

interface IProps {
  googleSignInStart: () => {};
  emailSignInStart: (x: IEmailAndPassword) => {};
}

const SignIn = ({ googleSignInStart, emailSignInStart }: IProps) => {
  const [userCreds, setUserCreds] = useState<IEmailAndPassword>({
    email: "",
    password: "",
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    emailSignInStart(userCreds);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setUserCreds({ ...userCreds, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sing in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="email"
          handleChange={handleChange}
          type="email"
          value={userCreds.email}
          required
        />
        <FormInput
          handleChange={handleChange}
          label="password"
          name="password"
          type="password"
          value={userCreds.password}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            customClass="google-sign-in"
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (emailAndPassword: IEmailAndPassword) =>
    dispatch(emailSignInStart(emailAndPassword)),
});

export default connect(undefined, mapDispatchToProps)(SignIn as any);

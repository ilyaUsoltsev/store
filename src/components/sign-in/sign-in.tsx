import React, { Component, FormEvent } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { ISignInState } from "../../models/state";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-in.scss";

interface IProps {}

export default class SignIn extends Component {
  state: ISignInState;

  constructor(props: IProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sing in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="email"
            handleChange={this.handleChange}
            type="email"
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="password"
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              customClass="google-sign-in"
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
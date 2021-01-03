import React, { Component, Dispatch, FormEvent } from "react";
import { connect } from "react-redux";
import { ISignUpState } from "../../models/state";
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

export class SignUp extends Component<ISignUpProps> {
  state: ISignUpState;
  constructor(props: ISignUpProps) {
    super(props);
    this.state = {
      password: "",
      displayName: "",
      email: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { password, displayName, email, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords aint the same!");
      return;
    }
    this.props.signUpWithEmailAndPassword!(email, password, displayName);
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { password, displayName, email, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            handleChange={this.handleChange}
            label="Display Name"
            required
            type="text"
            name="displayName"
            value={displayName}
          />
          <FormInput
            handleChange={this.handleChange}
            label="E-mail"
            required
            type="email"
            name="email"
            value={email}
          />
          <FormInput
            handleChange={this.handleChange}
            label="Password"
            required
            type="password"
            name="password"
            value={password}
          />
          <FormInput
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
  signUpWithEmailAndPassword: (
    email: string,
    password: string,
    displayName: string
  ) => dispatch(singUpStart({ email, password, displayName })),
});

export default connect<any>(null, mapDispatchToProps)(SignUp);

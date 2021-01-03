import React, { Component, Dispatch, FormEvent } from "react";
import { connect } from "react-redux";
import { IEmailAndPassword } from "../../models/auth";
import { ISignInState } from "../../models/state";
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

class SignIn extends Component<IProps> {
  state: ISignInState;

  constructor(props: IProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.emailSignInStart({ email, password });
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (emailAndPassword: IEmailAndPassword) =>
    dispatch(emailSignInStart(emailAndPassword)),
});

export default connect(undefined, mapDispatchToProps)(SignIn as any);

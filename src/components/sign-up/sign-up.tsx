import React, { Component, FormEvent } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { ISignUpState } from "../../models/state";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-up.scss";

interface ISignUpProps {}

export class SignUp extends Component {
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
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        email: "",
        password: "",
        displayName: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error.message);
    }
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

export default SignUp;

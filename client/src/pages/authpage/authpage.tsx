import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import "./authpage.scss";

function AuthPage() {
  return (
    <div className="auth-page">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default AuthPage;

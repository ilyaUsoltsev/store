import React from "react";
import Directory from "../../components/directory/directory";
import { HomePageContainer } from "./homepage.styles";
import "./homepage.styles.scss";

function Homepage() {
  return (
    <HomePageContainer>
      <Directory></Directory>
    </HomePageContainer>
  );
}

export default Homepage;

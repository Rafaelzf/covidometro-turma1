import React from "react";

import { Header, Container, MainContent } from "./styles.js";
import Logo from "../../Assets/icon/logo.png";

function PageDefault({ children }) {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo convidômetro" />
      </Header>
      <MainContent>{children}</MainContent>
    </Container>
  );
}

export default PageDefault;

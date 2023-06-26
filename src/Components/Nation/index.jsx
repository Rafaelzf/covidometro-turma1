import React from "react";

import { CountriesData, Title } from "./styles";
import { BoxDefault } from "../";
function Nation() {
  return (
    <BoxDefault>
      <Title>Nome do país</Title>
      <CountriesData>
        <li>
          <h3>Total de casos</h3>
          <strong>111111</strong>
        </li>
        <li>
          <h3>Mortes</h3>
          <strong>111111</strong>
        </li>
        <li>
          <h3>Última atualização</h3>
          <strong>111111</strong>
        </li>
      </CountriesData>
    </BoxDefault>
  );
}

export default Nation;

import { BoxDefault } from "../";

import { Title, InputBox } from "./styles";

function Filter() {
  return (
    <BoxDefault>
      <Title>Filtar dados sobre um país</Title>
      <InputBox>
        <input type="text" name="search" placeholder="Digite o nome do país" />
      </InputBox>
    </BoxDefault>
  );
}

export default Filter;

import { BoxDefault } from "../";

import { Title, InputBox } from "./styles";

function Filter(props) {
  const { searchText, setSearchText } = props;
  return (
    <BoxDefault>
      <Title>Filtrar dados sobre um país</Title>
      <InputBox>
        <input
          type="text"
          name="search"
          placeholder="Digite o nome do país"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </InputBox>
    </BoxDefault>
  );
}

export default Filter;

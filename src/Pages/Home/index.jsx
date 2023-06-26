import { PageDefault, Filter, Nation, BoxDefault } from "../../Components";
import axios from "axios";
import { useQuery } from "react-query";
import { baseURL } from "../../Conections";
import Loading from "../../Assets/img/loading.gif";

import {
  Container,
  Presentation,
  MainText,
  Main,
  ContainerBoxes,
} from "./styles";

function App() {
  const { isLoading, data, error } = useQuery("data", () =>
    axios.get(`${baseURL}countries`)
  );

  return (
    <PageDefault>
      <Container>
        <Presentation>
          <MainText>
            <h1>Conheça o Covidrômetro</h1>
            <p>
              Fique atualizado com velocidade e transparência. O Covidrômetro é
              uma ferramenta que mostra para você em tempo real o número de
              casos de óbitos relacionados à pandemia do COVID-19 ao redor do
              mundo.
            </p>
          </MainText>
        </Presentation>
        <Main>
          {isLoading && <BoxDefault>Loading....</BoxDefault>}

          {!isLoading && error ? (
            <BoxDefault>
              💢 Infelizmente houve algum erro inexperado. Volte mais tarde. ⛔️
            </BoxDefault>
          ) : (
            !isLoading && (
              <ContainerBoxes>
                <Filter />
                <Nation />
              </ContainerBoxes>
            )
          )}
        </Main>
      </Container>
    </PageDefault>
  );
}

export default App;

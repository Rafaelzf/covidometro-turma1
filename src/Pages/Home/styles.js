import styled from "styled-components";

import Nurses from "../../Assets/img/doctors.png";

export const Container = styled.div`
  width: 80%;
`;

export const Presentation = styled.div`
  min-height: 385px;
  margin-bottom: 0px;
  background: url(${Nurses}) right center no-repeat;
`;

export const MainText = styled.div`
  width: 50%;
  text-align: left;
`;

export const Main = styled.main`
  width: 70%;
  margin: -100px auto 0;
`;

export const ContainerBoxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

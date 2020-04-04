import styled from "styled-components";
import { theme } from "../globals/styles";

export const MainSection = styled.main`
  width: 100%;
  height: calc(100vh - 60px);
  margin-top: 60px;
  padding: 25px 10px;
  background-color: ${props => props.background || theme.backgroundMain};
  @media screen and (max-width: 425px) {
    height: 100%;
  }
`;

export const GeneralSection = styled(MainSection)`
  height: 100vh;
  margin-top: 0;
`;

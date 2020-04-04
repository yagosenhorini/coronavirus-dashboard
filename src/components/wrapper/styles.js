import styled from "styled-components";
import { theme } from "../globals/styles";

export const WrapperContent = styled.div`
  width: 75%;
  display: flex;
  margin: 50px auto 0;
  padding: 50px 20px;
  border-radius: 25px;
  flex-direction: row;
  justify-content: center;
  background-color: ${theme.secondaryColor};
  border: 1px solid ${theme.titleBackground};
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 425px) {
    width: 95%;
    flex-direction: column;
  }
`;

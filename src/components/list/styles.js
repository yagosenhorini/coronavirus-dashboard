import styled from "styled-components";
import { theme } from "../globals/styles";

export const ListWrapper = styled.ul`
  width: 40%;
  height: auto;
  display: flex;
  list-style: none;
  flex-direction: column;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  height: auto;
  border: none;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  max-width: 300px;
  margin: 10px auto;
  text-align: center;
  border-radius: 25px;
  color: ${theme.mainTitle};
  background-color: ${theme.secondaryTextBg};
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 425px) {
    width: 100%;
    font-size: 14px;
  }
`;

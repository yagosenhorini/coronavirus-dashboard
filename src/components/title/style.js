import styled from "styled-components";
import { theme } from "../globals/styles";

export const MainTitle = styled.h1`
  width: 50%;
  height: auto;
  border: none;
  padding: 10px;
  margin: 0 auto;
  font-size: 48px;
  font-weight: 400;
  text-align: center;
  border-radius: 25px;
  font-family: "Roboto";
  color: ${theme.mainTitle};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.color || theme.titleBackground};
  text-transform: capitalize;

  @media screen and (max-width: 425px) {
    width: 95%;
    font-size: 24px;
  }
`;

export const SecondaryTitle = styled.h2`
  width: 100%;
  height: auto;
  margin: 0 auto;
  font-size: 40px;
  color: ${props => props.color || "#000"};

  @media screen and (max-width: 425px) {
    width: 60%;
    margin: 25% auto;
  }
`;

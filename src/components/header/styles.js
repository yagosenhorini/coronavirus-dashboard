import styled from "styled-components";
import { theme } from "../globals/styles";

export const Header = styled.header`
  top: 0;
  width: 100%;
  height: 60px;
  padding: 20px;
  position: fixed;
  background-color: ${theme.secondaryTextBg};
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

export const NavMenu = styled.nav`
  width: calc(100% - 10px);
  height: auto;
  display: flex;
  justify-content: space-around;
`;

export const NavLink = styled.span`
  width: auto;
  color: ${theme.mainTitle};
`;

import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

const Header = props => {
  return (
    <>
      <S.Header>
        <S.NavMenu>
          <Link to="/">
            <S.NavLink>Home</S.NavLink>
          </Link>
          <Link to="/form">
            <S.NavLink>Form</S.NavLink>
          </Link>
        </S.NavMenu>
      </S.Header>
      {props.children}
    </>
  );
};

export default Header;

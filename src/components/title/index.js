import React from "react";
import * as S from "./style";

function Title(props) {
  return (
    <>
      <S.MainTitle>{props.content}</S.MainTitle>
    </>
  );
}

export default Title;

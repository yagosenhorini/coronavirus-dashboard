import React from "react";
import Title from "../title";
import * as S from "./styles";
import * as L from "../list/styles";
import { WrapperContent } from "../wrapper/styles";

function Main({ api }) {
  return (
    <>
      <S.MainSection>
        <Title content={`Coronavirus cases on ${api.country}`} />
        <WrapperContent>
          <L.ListWrapper>
            <L.ListItem>Number of confirmed cases: {api.cases}</L.ListItem>
            <L.ListItem>Today cases: {api.todayCases}</L.ListItem>
            <L.ListItem>Total of deaths today: {api.todayDeaths}</L.ListItem>
          </L.ListWrapper>
          <L.ListWrapper>
            <L.ListItem>Total of deaths: {api.deaths}</L.ListItem>
            <L.ListItem>Total of recovered people: {api.recovered}</L.ListItem>
            <L.ListItem>Total of critical cases: {api.critical}</L.ListItem>
          </L.ListWrapper>
        </WrapperContent>
      </S.MainSection>
    </>
  );
}

export default Main;

import React from "react";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import HeaderWrapper from "../atoms/HeaderWrapper";
import LargeTitle from "../atoms/LargeTitle";
import Title1 from "../atoms/Title1";
import Title2 from "../atoms/Title2";
import Title3 from "../atoms/Title3";

const MainPage = () => {
  return (
    <>
      <Container>
        <HeaderWrapper>헤더다</HeaderWrapper>
        <Button>기본</Button>
        <Button filtered>필터</Button>
        <Button recent>recent</Button>
        <LargeTitle>전체차량</LargeTitle>
        <Title1>Title1</Title1>
        <Title2>Title2</Title2>
        <Title3>Title3</Title3>
      </Container>
    </>
  );
};

export default MainPage;

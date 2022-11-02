import React from "react";
import Atoms from "../atoms";

const Filter = () => {
  return (
    <>
      <Atoms.ButtonWrapper>
        <Atoms.Button>전체</Atoms.Button>
        <Atoms.Button>대형</Atoms.Button>
        <Atoms.Button>중형</Atoms.Button>
        <Atoms.Button>소형</Atoms.Button>
      </Atoms.ButtonWrapper>
    </>
  );
};

export default Filter;
